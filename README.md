# Tranches

**Ta bibliothèque de livres lus, vue de dos. Et de quoi t'en souvenir.**

Une PWA (ordi, iPad, téléphone) qui garde la trace des romans que tu as lus, avec un résumé de l'intrigue pour chacun. L'écran principal ne montre que les tranches des livres, à parcourir au trackpad, au doigt ou au stylet.

- 📖 [Le concept et la direction artistique](docs/CONCEPT.md)
- ✏️ [Idées pour l'iPad et l'Apple Pencil](docs/STYLET.md)
- 🧱 [La stack technique](docs/STACK.md)

## Essayer le prototype

Ouvre [`prototype/index.html`](prototype/index.html) dans un navigateur (double-clic suffit). Tout tient dans ce fichier.

- Deux doigts sur le trackpad : naviguer. Pincer : zoomer.
- Survol : le livre grandit. Clic : la fiche s'ouvre, clic sur la couverture pour la retourner.
- Bouton rond en bas à droite : vue (étagère, pile) et tri (genre, auteur, taille, hasard).
- « Ranger » → Vue → Tracé : dessine une ligne (stylet, doigt ou souris), les livres s'y rangent. Sinon le stylet navigue comme le doigt.
- Bougie en haut à droite : nuit noire, seule la flamme éclaire ; l'orage projette par moments la lumière d'un vitrail sur les livres. Sons dans « Ranger ».
- Le logo T ramène à l'accueil.
- Dans la fiche d'un livre : « Enluminer la lettrine » : on colorie la première lettre du titre dans un cadre au choix (8 cadres, 8 dessins de lettre, fonds et encres). Elle apparaît ensuite sur la tranche et dans la fiche.

Les 150 livres sont des exemples (une trentaine ont un résumé complet). Ouvert en local, le prototype va chercher la vraie couverture sur Open Library.

## Feuille de route

1. ✅ Concept, DA, prototype de navigation
2. App Vite + React : reprise du prototype, ajout d'un livre (titre + auteur → Open Library / Google Books), stockage local
3. Résumés IA, couleurs extraites des couvertures, wish list
4. Synchro entre appareils, installation PWA, gestes stylet
5. Reader .cbz / .epub
