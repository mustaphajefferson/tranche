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
- Bougie en haut à droite : nuit noire, seule la flamme éclaire, ambiance sonore de cave (bourdon, gouttes sous la voûte). Sons dans « Ranger ».
- Ajouter un livre → photo de la couverture ou de la tranche : les contours sont détectés tout seuls, l'image est redressée comme un scan (coins ajustables avec une loupe, « Photo fidèle » ou « Gravure »).
- Ajouter → « Plusieurs d'un coup » : coller une liste ou importer un export Goodreads / Babelio (.csv) pour le premier remplissage.
- Fiche d'un livre que tu as rangé → « Modifier » : titre, auteur, couverture (recherche ou photo), format, détails, ou le retirer. Les livres ajoutés sont vérifiés tout seuls (orthographe de l'auteur, année, pages, couverture, résumé via Google Books et Open Library).
- Reader : importer des .cbz (série et tome lus dans le nom du fichier), En cours / Collections / Terminés, liseuse sens manga ou BD, double page, zoom. Un tome d'exemple, « Le Copiste », est inclus.
- Bouton rond en haut à droite : compte (Supabase, voir `docs/supabase.sql`) et réglages : sauvegarde, restauration, livres d'exemple, réinitialiser la collection.
- Le logo T ramène à l'accueil.
- Dans la fiche d'un livre : « Enluminer la lettrine » : on colorie la première lettre du titre dans un cadre au choix (8 cadres, 8 dessins de lettre, fonds et encres). Elle apparaît ensuite sur la tranche et dans la fiche.

Les 150 livres sont des exemples (une trentaine ont un résumé complet). Ouvert en local, le prototype va chercher la vraie couverture sur Open Library.

## Feuille de route

1. ✅ Concept, DA, prototype de navigation
2. App Vite + React : reprise du prototype, ajout d'un livre (titre + auteur → Open Library / Google Books), stockage local
3. Résumés IA, couleurs extraites des couvertures, wish list
4. Synchro entre appareils, installation PWA, gestes stylet
5. Reader .cbz / .epub
