# iPad + Apple Pencil : le stylet comme vrai outil de navigation

Principe : le doigt déplace, le stylet **dessine et désigne**. Les deux ne se gênent jamais : deux doigts pour naviguer et zoomer, le stylet pour agir.

## Les idées, par ordre de priorité

### 1. Tracer son étagère ⭐ (déjà dans le prototype)
Tu dessines une ligne, droite, courbe ou en spirale, et les livres viennent se poser dessus, debout, dans l'ordre du tri choisi. La ligne reste, en bleu stylo, comme une étagère dessinée.
*Prototype : avec le stylet, ou Maj + glisser à la souris.*

### 2. Entourer pour regrouper
Tu entoures quelques tranches au lasso : elles se resserrent dans la forme que tu as tracée, et tu peux lui donner un nom (« Été 2024 », « À prêter à Léa »). Les collections deviennent littéralement des formes dessinées à la main, cohérentes avec la DA.

### 3. Survol du stylet = loupe
Sur les iPad compatibles, le stylet est détecté quelques millimètres avant de toucher l'écran. Survoler une tranche la fait grandir (comme la souris sur ordi) et affiche titre + auteur. On parcourt l'étagère en glissant la pointe au-dessus, sans toucher.

### 4. Gribouiller une lettre pour sauter
Écrire « M » n'importe où sur l'étagère emmène la caméra aux auteurs en M (ou aux titres, selon le tri). La reconnaissance d'une seule lettre est simple et fiable.

### 5. Souligner pour ouvrir, barrer pour fermer
Un trait sous une tranche ouvre la fiche. Un trait sur la fiche la referme. Des gestes qu'on fait déjà sur papier.

### 6. Pression = profondeur
Dans la vue cosmos, appuyer plus fort en traçant zoome vers ce qu'on désigne. Léger = survol, appuyé = plongée.

### 7. Annoter la fiche
Écrire directement dans la marge de la fiche d'un livre : une note manuscrite, gardée en image vectorielle. Le livre garde ta trace à toi, pas seulement le résumé.

### 8. Gestes matériels du Pencil (plus tard)
Double-tap ou « squeeze » (Pencil Pro) pour retourner le livre et voir la 4e, rotation du stylet (barrel roll) pour faire pivoter le livre en 3D.

## Ce que le web permet, honnêtement

| Idée | En PWA (Safari) | Besoin d'une app native |
|---|---|---|
| 1, 2, 4, 5, 6, 7 | Oui : les *Pointer Events* donnent le type `pen`, la pression et l'inclinaison | Non |
| 3 Survol | Oui sur les iPad qui gèrent le survol (le navigateur reçoit des mouvements de pointeur avant le contact) | Non |
| 8 Double-tap, squeeze, barrel roll | Non, Safari ne les transmet pas | Oui (enveloppe native type Capacitor + petit plugin Swift) |

Conclusion : on fait 1 à 7 dans la PWA. Le point 8 ne vaut le coup que si on emballe un jour l'app en natif.
