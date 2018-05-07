# EKO - SCRIPT SCAN EAN 13
## Démo en ligne
Impossible de trouver une version stable et compatible pour tous les appareils.
La seule solution est de proposer 2 outils :
- Le scan via une photo prise sur le moment (ou bien en stock dans la bibliothèque) : https://mon-chatbot.com/Scan_Eko/index_image.html (Disponible via iOS et Android depuis un navigateur Web)
- Le scan via une video Live à partir de la caméra de l'appareil : https://mon-chatbot.com/Scan_Eko/index_live.html (Non stable)

## Objectifs
- Récuperer à partir d'une image ou d'une vidéo un Code-bar EAN 13 et envoyer directement le formulaire vers une page de détail en .PHP

Pour cela, nous avons créé : 
- 2 pages HTML permettant de remplir un input via une image ou une video d'un code-bar
- Un système via jQuery qui permet de remplir automatiquement cet input
- Une page PHP permettant de récuperer la valeur du POST

## Fonctionnement
- Rendez-vous sur https://mon-chatbot.com/Scan_Eko/index_image.html
- Cliquez sur le bouton "Choisir un fichier"
- Vous pouvez y accéder depuis n'importe quel navigateur
- Prenez en photo un code-bar (pas trop près, pas trop loin non plus ...)
- Vous êtes alors redirigé après validation de la photo automatiquement vers la page de détails en question où un requete affichera le détail
