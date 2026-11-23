# Tranches : le concept

## L'idée en une phrase

**Tranches, c'est ta bibliothèque de livres lus, vue de dos, et la mémoire de ce qu'il y avait dedans.**

Une étagère, on la reconnaît à ses tranches. On ne lit pas les couvertures, on reconnaît une couleur, une typo, une épaisseur, et le souvenir revient. Tranches part de là : l'écran principal ne montre que des dos de livres, lisibles, et chaque livre garde un résumé de son intrigue pour quand le souvenir ne revient pas.

Le nom joue sur deux sens : la tranche du livre, et une « tranche de vie », celle où tu l'as lu.

## Ce qui la rend différente

1. **Rien que des livres déjà lus.** Pas de progression, pas d'objectifs, pas de stats à remplir. C'est une mémoire, pas un tableau de bord.
2. **Le dos comme interface.** Chaque tranche est générée à partir du vrai livre : la hauteur vient du format (poche, standard, grand format, beau livre), l'épaisseur vient du nombre de pages, la couleur vient de la couverture. Ta bibliothèque a donc la même silhouette qu'en vrai.
3. **Une nuit au scriptorium.** Un bouton bougie : la page s'assombrit, une lueur chaude suit le curseur ou le doigt et vacille avec le vent. Dehors, l'orage : pluie, rafales, éclairs qui illuminent un instant toute la bibliothèque, tonnerre. Sons discrets synthétisés : papier, livre qu'on pose, sceau de cire.
4. **L'atelier de reliure.** Pour les livres qu'on aime vraiment : l'app détecte les contours de la couverture, on les repasse au stylet avec une plume biseautée (la pression et le sens du trait comptent, le doigt n'imprime rien). On choisit le cuir, la dorure, les nerfs, les coins, le fermoir et le signet. Le dessin est doré au fer sur la couverture, et la tranche devient une vraie reliure en cuir sur l'étagère. Plus on est fidèle, plus le titre gagné est beau (Apprenti, Copiste, Enlumineur, Maître relieur).
5. **Tu ranges comme tu veux.** Tri par genre, auteur, taille ou au hasard, et vue en étagère, en grande pile.
6. **Le stylet dessine l'étagère.** Sur iPad, on trace une ligne et les livres viennent s'y poser. Voir [STYLET.md](STYLET.md).

## Direction artistique

- **La collection prend toute la place.** L'interface se réduit à un petit logo et un bouton rond qui ouvre les réglages (vue, tri, wish list, reader).
- **Noir, blanc et rouge de rubrique.** Fond blanc cassé neutre (ou noir en mode sombre), encre noire, et une seule couleur : le rouge (#C8201A) des titres enluminés dans les manuscrits. Il sert au logo, aux boutons et à tout ce qui est « dessiné à la main ».
- **Formes dessinées à la main.** Les catégories sont entourées d'un trait irrégulier qui ne se referme pas tout à fait, comme au stylo. Les étagères sont des traits légèrement tremblés. Chaque couverture générée porte un gribouillis unique.
- **Titres gothiques, très gros.** *Grenze Gotisch* pour les catégories et le titre du livre ouvert, *UnifrakturMaguntia* pour la landing et le logo (un simple « T »).
- **Le reste en Inter**, classique et lisible : résumés, infos, interface, et la plupart des tranches.
- **Des livres en 3D.** Au survol, le livre sort de l'étagère et pivote pour montrer un bout de sa couverture. Au clic, la tranche pivote en 3D et devient la première de couverture, à gauche, avec les infos à droite. On clique sur le livre pour le retourner.
- **Mouvement.** Une seule courbe douce partout. Quand on change de tri ou de vue, les livres se rangent un par un. La caméra suit le trackpad, avec de l'inertie.

## Les vues

- **Étagère** : des rangées de tranches, par catégorie.
- **Pile** : une seule très grande pile, à parcourir de haut en bas.
- **Tracé** : l'étagère que tu as dessinée (stylet, ou Maj + glisser).

## Les écrans

| Écran | Ce qu'on y fait |
|---|---|
| **Landing** | Une lettrine T enluminée se dessine, puis son T glisse et devient la première lettre de « Tranches », en rouge. En dessous, une étagère de petites tranches (nerfs, pièces de titre, bougies, piles), une rangée de tranches qui monte. Un bouton pour entrer. |
| **Bibliothèque** | Le canvas de tranches. Glisser à deux doigts pour naviguer, pincer pour zoomer. Survol = le livre grandit un peu. Un seul bouton rond pour la vue et le tri. |
| **Fiche livre** | Clic sur une tranche : elle pivote en 3D et devient la couverture, les infos à côté (genre, année, pages, lu en) et le résumé de l'intrigue. Clic sur la couverture : le livre se retourne et montre la 4e. |
| **Wish list** | Même logique de tranches, mais en « fantômes » (contour seulement) : les livres que tu n'as pas encore. Pratique pour les idées cadeaux. |
| **Reader** | Bouton présent, désactivé. Lecteur .cbz (mangas) et .epub (romans) beaucoup plus tard. |
| **Ajouter un livre** | Tu tapes titre + auteur, l'app trouve couverture, date, pages, ISBN, description (Open Library, puis Google Books), puis génère le résumé de l'intrigue avec l'IA. |

## Autres objets

Les livres photo, beaux livres et autres objets ont leur propre genre et un format « beau livre » (plus haut, plus épais). Ils vivent sur la même étagère.

## Le Scriptorium : pousser le gothique plus loin

Tranches se pense comme **un manuscrit enluminé de tes lectures**. Chaque livre lu y est recopié (le résumé), enluminé (sa couverture en gravure) et rubriqué (sa catégorie en rouge).

Déjà dans le prototype :
- **Lettrines** : le résumé commence par une grande initiale gothique rouge, comme dans les manuscrits.
- **Rubriques** : catégories et intertitres en rouge, la couleur des titres enluminés.
- **Gravures** : une photo de couverture devient une estampe deux tons (couleurs prises sur la couverture, hachures de graveur).
- **Sceau** : quand on range un nouveau livre, un sceau de cire rouge au « T » s'imprime à l'écran.
- **Manicules** : la petite main ☞ des marges médiévales signale les messages.
- **Chiffres romains** : le compteur de livres lus sur la page d'accueil.
- **Le chargement** : une lettrine « T » enluminée (cadre, nœuds, rinceaux) qui se dessine trait par trait.
- **Chandelle et sons** : voir plus haut.

À faire ensuite :
- **La Chronique de l'an** : chaque fin d'année, une page façon calendrier enluminé avec les livres lus mois par mois.
- **Ex-libris au stylet** : tu dessines une fois ta signature ou ton monogramme, l'app en fait un tampon rouge encadré de gothique, apposé à l'intérieur de chaque livre (4e de la fiche), sur les partages et la Chronique.
- **Les tranches gravées** : une photo de la vraie tranche, passée au même filtre gravure, pour retrouver ton étagère réelle.
