// Tranches : écrit le résumé complet de l'intrigue d'un livre déjà lu.
// Supabase → Edge Functions → nom « resume ». Secret requis : ANTHROPIC_API_KEY.
// Appelée depuis l'app par un utilisateur connecté (Supabase vérifie son jeton).
import Anthropic from "npm:@anthropic-ai/sdk";

const cors = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
};
const client = new Anthropic({ apiKey: Deno.env.get("ANTHROPIC_API_KEY") });

const SYSTEM = `Tu écris pour Tranches, une bibliothèque personnelle des livres qu'on a déjà lus.
Le lecteur a fini le livre et veut s'en souvenir : raconte l'intrigue complète, fin comprise, sans prévenir des révélations.
Écris en français, au présent, en 5 à 8 paragraphes (600 à 900 mots) : situation de départ, personnages principaux avec leurs noms, grandes étapes, tournants, dénouement et ce que deviennent les personnages.
Texte brut uniquement : pas de titre, pas de listes, pas de gras, pas de phrase d'introduction ni de conclusion sur le livre lui-même.
Si tu ne connais pas ce livre précisément, réponds uniquement le mot INCONNU, sans rien inventer.`;

Deno.serve(async (req) => {
  if (req.method === "OPTIONS") return new Response("ok", { headers: cors });
  try {
    const { t, a, y, desc } = await req.json();
    if (!t) return Response.json({ error: "titre manquant" }, { status: 400, headers: cors });
    const user = `Livre : « ${t} »${a ? ` de ${a}` : ""}${y ? ` (${y})` : ""}.` +
      (desc ? `\nPrésentation de l'éditeur, pour être sûr de quel livre il s'agit :\n${String(desc).slice(0, 2000)}` : "");
    const msg = await client.beta.messages.create({
      model: "claude-opus-5-5",
      max_tokens: 16000,
      output_config: { effort: "medium" },
      betas: ["server-side-fallback-2026-07-01"],
      fallbacks: "default",
      system: SYSTEM,
      messages: [{ role: "user", content: user }],
    });
    if (msg.stop_reason === "refusal") return Response.json({ unknown: true }, { headers: cors });
    const text = msg.content.filter((b) => b.type === "text").map((b) => b.text).join("").trim();
    if (!text || /^INCONNU\b/.test(text)) return Response.json({ unknown: true }, { headers: cors });
    return Response.json({ resume: text }, { headers: cors });
  } catch (e) {
    return Response.json({ error: String(e?.message || e) }, { status: 500, headers: cors });
  }
});
