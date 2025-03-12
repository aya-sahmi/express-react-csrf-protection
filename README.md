# Projet avec Express.js et React.js - Protection CSRF

Ce projet est une démonstration de la mise en place de la protection CSRF (Cross-Site Request Forgery) dans une application web utilisant **Express.js** pour le backend et **React.js** pour le frontend. Le backend génère un token CSRF et l'envoie au frontend, qui l'utilise pour protéger les requêtes envoyées au serveur.

## Technologies utilisées

- **Backend :** Express.js
- **Frontend :** React.js
- **Protection CSRF :** csurf
- **Axios :** pour les requêtes HTTP du frontend
- **CORS :** pour autoriser les requêtes entre différentes origines

## Fonctionnement

### Backend (Express.js)

1. **Installation des dépendances :**
   Installez les dépendances nécessaires pour le backend avec Express.js :
   ```bash
   npm install express cors cookie-parser csurf body-parser
Routes principales :

GET /csrf-token : Récupère le token CSRF généré par le serveur.
POST /submit : Soumet les données envoyées par le frontend après vérification du token CSRF.
Démarrage du serveur : Le serveur écoute sur le port 5000.
node index.js


### Frontend (React.js)  
Installation des dépendances : Installez les dépendances nécessaires pour le frontend avec React.js :  
npm install axios  

**Fonctionnement :**  

Le frontend envoie une requête GET à l'API /csrf-token pour obtenir un token CSRF.
Le token est ajouté aux données du formulaire lors de la soumission pour protéger l'utilisateur contre les attaques CSRF.
Lors de la soumission du formulaire, une requête POST est envoyée au backend avec les données et le token CSRF.
Démarrage de l'application React :  
npm start  

1-Sécurisation des requêtes:  
Le backend utilise le middleware csurf pour générer et vérifier les tokens CSRF. Le token est renvoyé dans la réponse à chaque requête GET vers /csrf-token et doit être inclus dans le corps de chaque requête POST vers le serveur.
Le frontend récupère ce token et l'ajoute automatiquement aux données du formulaire lors de sa soumission, assurant ainsi la sécurité des échanges.  

2-Environnement de développement  
Backend : http://localhost:5000  
Frontend : http://localhost:3000  

**Instructions**  
Clonez ce projet sur votre machine locale.  
Ouvrez un terminal et accédez au dossier du backend.  
Exécutez npm install pour installer les dépendances du backend.  
Démarrez le serveur backend avec node index.js.  
Ouvrez un autre terminal et accédez au dossier du frontend.  
Exécutez npm install pour installer les dépendances du frontend.  
Démarrez l'application React avec npm start.  
Ouvrez http://localhost:3000 dans votre navigateur et testez la soumission du formulaire.  

**Conclusion**
Ce projet illustre comment sécuriser les applications web contre les attaques CSRF en utilisant des tokens générés côté serveur. Il montre également comment intégrer la protection CSRF dans une architecture utilisant Express.js pour le backend et React.js pour le frontend.  

**Auteurs**  
Nom de l'auteur : Sahmi Lamrani Aya  
Email : ayasahmilam@gmail.com  
GitHub : Sahmi Lamrani Aya GitHub  
