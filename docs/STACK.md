# Stack technique

Objectif : une PWA qui marche sur ordi, iPad et téléphone, avec des animations à 60 images/seconde et rien à installer depuis un store.

| Besoin | Choix | Pourquoi |
|---|---|---|
| App | **Vite + React + TypeScript** | Rapide à développer, énorme écosystème, facile à reprendre par quelqu'un d'autre. |
| Animations | **Motion** (ex-Framer Motion) pour l'interface, et une **caméra maison** (transform CSS + `requestAnimationFrame`) pour le canvas | Les tranches bougent par `transform` uniquement, accéléré par la carte graphique. C'est ce que fait déjà le prototype. |
| Beaucoup de livres (500+) | Passage à **PixiJS** (WebGL) pour le canvas si le DOM ne suit plus | On garde le même modèle de positions, on change seulement le rendu. |
| PWA / hors ligne | **vite-plugin-pwa** | Installable sur l'écran d'accueil de l'iPad et du téléphone. |
| Données locales | **IndexedDB via Dexie** | La bibliothèque marche hors ligne. |
| Synchro entre appareils | **Supabase** (base Postgres + auth + stockage) | Gratuit pour ce volume, un compte suffit pour tout synchroniser. |
| Infos des livres | **Open Library** puis **Google Books** en secours | Gratuits. Couverture, date, pages, ISBN, description. |
| Résumés | **API Claude** via une petite fonction serveur | La clé API reste côté serveur, jamais dans le navigateur. Résumé complet de l'intrigue, fin comprise, généré une fois à l'ajout. |
| Couleur des tranches | Couleur dominante extraite de la couverture (canvas) | Les tranches ressemblent aux vrais livres. |
| Hébergement | **Vercel** (ou Netlify) | Déploiement automatique à chaque push sur GitHub, gratuit. |
| Reader (plus tard) | .cbz : décompression avec **fflate** ; .epub : **foliate-js** | À traiter dans une phase dédiée. |

## Structure prévue

```
tranche/
├─ prototype/        prototype autonome (un seul fichier HTML, à ouvrir tel quel)
├─ docs/             concept, stylet, stack
└─ app/              (étape suivante) l'app Vite + React
```
