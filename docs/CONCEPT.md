# Tranche : le concept

## L'idée en une phrase

**Tranche, c'est ta bibliothèque de livres lus, vue de dos, et la mémoire de ce qu'il y avait dedans.**

Une étagère, on la reconnaît à ses tranches. On ne lit pas les couvertures, on reconnaît une couleur, une typo, une épaisseur, et le souvenir revient. Tranche part de là : l'écran principal ne montre que des dos de livres, lisibles, et chaque livre garde un résumé de son intrigue pour quand le souvenir ne revient pas.

Le nom joue sur deux sens : la tranche du livre, et une « tranche de vie », celle où tu l'as lu.

## Ce qui la rend différente

1. **Rien que des livres déjà lus.** Pas de progression, pas d'objectifs, pas de stats à remplir. C'est une mémoire, pas un tableau de bord.
2. **Le dos comme interface.** Chaque tranche est générée à partir du vrai livre : la hauteur vient du format (poche, standard, grand format, beau livre), l'épaisseur vient du nombre de pages, la couleur vient de la couverture. Ta bibliothèque a donc la même silhouette qu'en vrai.
3. **La poussière du souvenir.** Un livre que tu n'as pas ouvert dans l'app depuis plus d'un an perd peu à peu ses couleurs. Le rouvrir (relire son résumé) le ravive. L'étagère montre ainsi, sans un mot, ce que tu es en train d'oublier. C'est l'idée forte du projet.
4. **Tu ranges comme tu veux.** Tri au hasard, par taille, par genre ou par auteur, et disposition en étagère, en pile, éparpillée sur une table, ou en « cosmos » (un canvas infini où chaque genre forme une galaxie).
5. **Le stylet dessine l'étagère.** Sur iPad, on trace une ligne et les livres viennent s'y poser. Voir [STYLET.md](STYLET.md).

## Direction artistique

- **Minimaliste, pour laisser la place aux livres.** L'interface est à l'encre (noir ou blanc selon le thème) sur un gris papier froid. Toute la couleur vient des livres.
- **Une seule couleur d'interface : le bleu stylo bille.** C'est la couleur de l'annotation dans la marge. Elle sert à tous les éléments « dessinés à la main » : étiquettes de catégories, contours des galaxies du cosmos, lignes que tu traces au stylet.
- **Formes organiques tracées à la main.** Les catégories sont entourées d'un trait irrégulier qui ne se referme pas tout à fait, comme quand on entoure un mot au stylo. Les étagères sont des traits légèrement tremblés. Les couvertures générées (quand il n'y a pas d'image) portent une forme organique unique par livre.
- **Typographie.**
  - *Bricolage Grotesque* : titres et interface, caractère affirmé, un peu artisanal.
  - *Newsreader* : textes longs (résumés, 4e de couverture), une vraie typo de livre.
  - *JetBrains Mono* : données (années, pages, noms d'auteurs sur les tranches), comme les petites mentions techniques d'une édition.
- **Mouvement.** Tout bouge avec la même courbe douce (`cubic-bezier(.2,.85,.2,1)`). Quand on change de tri ou de disposition, les livres se déplacent un par un, avec un léger décalage, comme si quelqu'un les rangeait. La caméra suit le trackpad sans à-coups et garde de l'inertie.

## Les écrans

| Écran | Ce qu'on y fait |
|---|---|
| **Landing** | Le mot « Tranche » souligné d'un trait bleu qui se dessine, quelques tranches qui montent se ranger. Un bouton pour entrer. |
| **Bibliothèque** | Le canvas de tranches. Glisser à deux doigts pour naviguer, pincer pour zoomer. Survol = le livre grandit un peu. Barre flottante en bas : vue + tri. |
| **Fiche livre** | Clic sur une tranche : la couverture apparaît, les infos à côté (genre, année, pages, lu en, dernière visite) et le résumé de l'intrigue. Clic sur la couverture : le livre se retourne et montre la 4e. |
| **Wish list** | Même logique de tranches, mais en « fantômes » (contour seulement) : les livres que tu n'as pas encore. Pratique pour les idées cadeaux. |
| **Reader** | Bouton présent, désactivé. Lecteur .cbz (mangas) et .epub (romans) beaucoup plus tard. |
| **Ajouter un livre** | Tu tapes titre + auteur, l'app trouve couverture, date, pages, ISBN, description (Open Library, puis Google Books), puis génère le résumé de l'intrigue avec l'IA. |

## Autres objets

Les livres photo, beaux livres et autres objets ont leur propre genre et un format « beau livre » (plus haut, plus épais). Ils vivent sur la même étagère.
