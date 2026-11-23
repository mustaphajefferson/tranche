// Tranches : fonction Supabase « resume ».
// 1) Écrit le résumé complet de l'intrigue d'un livre déjà lu (Groq gratuit, ou Claude si tu préfères).
// 2) op "bnf" : cherche un livre dans le catalogue de la BnF (toutes les éditions françaises).
// Secrets : GROQ_API_KEY (gratuit, console.groq.com) ; facultatif GROQ_MODEL ; ou ANTHROPIC_API_KEY pour Claude.
const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};
const json = (d: unknown, status = 200) => Response.json(d, { status, headers: cors });

const SYSTEM = `Tu écris pour Tranches, une bibliothèque personnelle des livres qu'on a déjà lus.
Le lecteur a fini le livre et veut s'en souvenir : raconte l'intrigue complète, fin comprise, sans prévenir des révélations.
Écris en français, au présent, en 5 à 8 paragraphes (600 à 900 mots) : situation de départ, personnages principaux avec leurs noms, grandes étapes, tournants, dénouement et ce que deviennent les personnages.
Texte brut uniquement : pas de titre, pas de listes, pas de gras, pas de phrase d'introduction ni de conclusion sur le livre lui-même.
Si tu ne connais pas ce livre précisément, réponds uniquement le mot INCONNU, sans rien inventer.`;

async function withGroq(user: string, key: string) {
  const r = await fetch("https://api.groq.com/openai/v1/chat/completions", {
    method: "POST",
    headers: { "content-type": "application/json", authorization: `Bearer ${key}` },
    body: JSON.stringify({
      model: Deno.env.get("GROQ_MODEL") || "llama-3.3-70b-versatile",
      temperature: 0.3,
      max_tokens: 3000,
      messages: [{ role: "system", content: SYSTEM }, { role: "user", content: user }],
    }),
  });
  const j = await r.json();
  if (!r.ok) throw new Error(j?.error?.message || `Groq ${r.status}`);
  return String(j.choices?.[0]?.message?.content || "");
}

async function withClaude(user: string, key: string) {
  const { default: Anthropic } = await import("npm:@anthropic-ai/sdk");
  const client = new Anthropic({ apiKey: key });
  const msg = await client.beta.messages.create({
    model: "claude-opus-5-5",
    max_tokens: 16000,
    output_config: { effort: "medium" },
    betas: ["server-side-fallback-2026-07-01"],
    fallbacks: "default",
    system: SYSTEM,
    messages: [{ role: "user", content: user }],
  });
  if (msg.stop_reason === "refusal") return "INCONNU";
  return msg.content.filter((b: { type: string }) => b.type === "text").map((b: { text: string }) => b.text).join("");
}

// Catalogue général de la BnF (SRU, Dublin Core)
async function bnf(t: string, a: string) {
  const q = `bib.title all "${t.replace(/"/g, "")}"` + (a ? ` and bib.author all "${a.replace(/"/g, "")}"` : "") + ` and bib.doctype any "a"`;
  const url = `https://catalogue.bnf.fr/api/SRU?version=1.2&operation=searchRetrieve&recordSchema=dublincore&maximumRecords=15&query=${encodeURIComponent(q)}`;
  const xml = await (await fetch(url)).text();
  const recs = xml.split(/<srw:record>/).slice(1);
  const get = (r: string, tag: string) => [...r.matchAll(new RegExp(`<dc:${tag}[^>]*>([\\s\\S]*?)</dc:${tag}>`, "g"))].map((m) => m[1].replace(/&amp;/g, "&").replace(/&apos;/g, "'").replace(/&quot;/g, '"').trim());
  return recs.map((r) => {
    const title = (get(r, "title")[0] || "").split(" / ")[0].replace(/\s*\[.*?\]\s*/g, " ").trim();
    const author_name = get(r, "creator").map((c) => c.replace(/\(.*$/, "").replace(/\..*$/, "").trim()).map((c) => {
      const [nom, prenom] = c.split(",").map((s) => s.trim());
      return prenom ? `${prenom} ${nom}` : nom;
    });
    const publisher = (get(r, "publisher")[0] || "").replace(/\s*\(.*?\)\s*/g, " ").trim() || undefined;
    const first_publish_year = +(get(r, "date")[0] || "").slice(0, 4) || null;
    const pages = +((get(r, "format")[0] || "").match(/(\d+)\s*p\./)?.[1] || 0) || null;
    const isbn = get(r, "identifier").map((i) => i.match(/ISBN\s*([\d-]{10,17}X?)/i)?.[1]?.replace(/-/g, "")).find(Boolean);
    const subject = get(r, "subject");
    return { title, author_name, publisher, first_publish_year, number_of_pages_median: pages, isbn, subject };
  }).filter((r) => r.title);
}

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  try {
    const body = await req.json();
    if (body.op === "bnf") return json({ records: await bnf(String(body.t || ""), String(body.a || "")) });
    const { t, a, y, desc } = body;
    if (!t) return json({ error: "titre manquant" }, 400);
    const user = `Livre : « ${t} »${a ? ` de ${a}` : ""}${y ? ` (${y})` : ""}.` +
      (desc ? `\nPrésentation de l'éditeur, pour être sûr de quel livre il s'agit :\n${String(desc).slice(0, 2000)}` : "");
    const groq = Deno.env.get("GROQ_API_KEY"), claude = Deno.env.get("ANTHROPIC_API_KEY");
    if (!groq && !claude) return json({ error: "Aucune clé : ajoute GROQ_API_KEY dans les secrets Supabase." }, 500);
    const text = (groq ? await withGroq(user, groq) : await withClaude(user, claude!)).trim();
    if (!text || /^INCONNU\b/.test(text)) return json({ unknown: true });
    return json({ resume: text });
  } catch (e) {
    return json({ error: String((e as Error)?.message || e) }, 500);
  }
});
