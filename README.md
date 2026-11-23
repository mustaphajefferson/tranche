# Tranche

**Ta bibliothèque de livres lus, vue de dos. Et de quoi t'en souvenir.**

Une PWA (ordi, iPad, téléphone) qui garde la trace des romans que tu as lus, avec un résumé de l'intrigue pour chacun. L'écran principal ne montre que les tranches des livres, à parcourir au trackpad, au doigt ou au stylet.

- 📖 [Le concept et la direction artistique](docs/CONCEPT.md)
- ✏️ [Idées pour l'iPad et l'Apple Pencil](docs/STYLET.md)
- 🧱 [La stack technique](docs/STACK.md)

## Essayer le prototype

Ouvre [`prototype/index.html`](prototype/index.html) dans un navigateur (double-clic suffit). Tout tient dans ce fichier.

- Deux doigts sur le trackpad : naviguer. Pincer : zoomer.
- Survol : le livre grandit. Clic : la fiche s'ouvre, clic sur la couverture pour la retourner.
- Bouton rond en bas à droite : vue (étagère, pile, cosmos) et tri (genre, auteur, taille, hasard).
- Maj + glisser (ou stylet sur iPad) : dessine une ligne, les livres s'y rangent.
- Les tranches pâles sont des livres pas revus depuis plus d'un an : ouvre-les pour les raviver.

Les 150 livres sont des exemples (une quarantaine ont un résumé).

## Feuille de route

1. ✅ Concept, DA, prototype de navigation
2. App Vite + React : reprise du prototype, ajout d'un livre (titre + auteur → Open Library / Google Books), stockage local
3. Résumés IA, couleurs extraites des couvertures, wish list
4. Synchro entre appareils, installation PWA, gestes stylet
5. Reader .cbz / .epub
