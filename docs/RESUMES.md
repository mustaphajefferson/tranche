# Résumés complets et recherche BnF

La fonction Supabase `resume` fait deux choses :
- elle écrit l'intrigue complète d'un livre (600 à 900 mots, fin comprise) avec Groq, gratuit, ou Claude si tu ajoutes plutôt une clé Anthropic ;
- elle interroge le catalogue de la BnF (toutes les éditions parues en France) quand tu cherches un livre.

Elle ne répond qu'aux comptes connectés, et la clé reste dans Supabase.

## À faire une fois

1. **Clé Groq (gratuite)** : sur https://console.groq.com, crée un compte puis une clé (API Keys → Create).
2. **Secret Supabase** : Edge Functions → Secrets → ajoute `GROQ_API_KEY` avec cette clé.
   Facultatif : `GROQ_MODEL` pour changer de modèle (par défaut `llama-3.3-70b-versatile`).
   Pour utiliser Claude à la place : ajoute `ANTHROPIC_API_KEY` et pas de clé Groq.
3. **La fonction** : Edge Functions → Deploy a new function → Via Editor. Nom : `resume`. Colle le contenu de `supabase/functions/resume/index.ts`, puis Deploy.

## Ensuite

- Connecte-toi dans l'app (rond en haut à droite).
- Compte → Réglages → « Écrire les résumés ».
- Dans une fiche : « Écrire le résumé complet ».
- Les nouveaux livres reçoivent leur résumé tout seuls, et la recherche interroge la BnF en plus de Google Books et d'Open Library.

Un modèle gratuit invente plus volontiers sur les livres peu connus. La consigne lui demande de répondre « INCONNU » plutôt que d'inventer, mais relis les résumés des livres rares.
