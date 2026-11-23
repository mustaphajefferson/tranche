# Résumés complets par l'IA

L'app appelle une fonction Supabase, `resume`, qui demande à Claude l'intrigue complète du livre (600 à 900 mots, fin comprise). La clé Claude reste dans Supabase, jamais dans le navigateur, et seuls les comptes connectés peuvent l'appeler.

## À faire une fois

1. **Clé Claude** : sur https://platform.claude.com, crée une clé API (Settings → API keys) et ajoute un peu de crédit.
2. **Secret Supabase** : dans ton projet, Edge Functions → Secrets → ajoute `ANTHROPIC_API_KEY` avec cette clé.
3. **La fonction** : Edge Functions → Deploy a new function → Via Editor. Nom : `resume`. Colle le contenu de `supabase/functions/resume/index.ts`, puis Deploy.

## Ensuite

- Connecte-toi dans l'app (rond en haut à droite).
- Compte → Réglages → « Écrire les résumés » : tous tes livres reçoivent leur résumé, un par un.
- Dans la fiche d'un livre : « Écrire le résumé complet ».
- Les livres ajoutés ensuite reçoivent leur résumé tout seuls.

Coût indicatif : environ 2 à 3 centimes par livre.
