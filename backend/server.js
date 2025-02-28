// Ce fichier permettrra de recevoir les infos du formulaire du frontend
// Et enverra un mail a contact@kingzofkongo.com

// Importations libraries necessaires
require("dotenv").config();


console.log("Email User:", process.env.EMAIL_USER);
console.log("Email Password", process.env.EMAIL_PASS);

const express = require("express"); //dotenv : permet d’utiliser un fichier .env pour stocker les informations sensibles comme l’adresse e-mail et le mot de passe.
const cors = require("cors") // Permet autoriser requetes entre frontend React et backend Express
const nodemailer = require("nodemailer") // Bibliothèque epour envoyer des mails


// Initialise l'application  Express
const app = express();


// Active le support JSON pour lire les données envoyées par le frontend
app.use(express.json())


// Active le CORS pour autoriser les requêtes du frontend
app.use(cors());

//Définit le port du serveur (5000 par défaut, ou un autre mais doit etre definie dans .env )
const PORT = process.env.PORT || 5000;




// transporter = outil qui se connecte a un serveur d'e-mails SMTP pour envoyer des mails a une adresse mail
const transporter = nodemailer.createTransport({

    host: "mail.kingzofkongo.com", // utilisation de mail pro  mail.kingzofkongo.com
    port : 465, // ou mettre 587
    secure: true, // false pour 587 et sinon mettre true pour chosiri le port 465

    auth : {
        user: process.env.EMAIL_USER, // Email de l'expéditeur (stocké dans .env)
        pass: process.env.EMAIL_PASS,  // Mot de passe de l'expéditeur (stocké dans .env)
    },
});


// Création de route pour envoyer un E-mail

// req = request represente requete HTTP envoyée par le client depuis le frontend et cette requete contient les données du formulaire de la page Membership
// res = response est la reponse que le backend renvoie au frontend si c'est le mail a été envoyé avec succés ou c'est un echec
app.post("/send-email", async (req, res) => {
    // Récuperation des données envoyées par le frontend (par le fomualaire Membership)
    const {nom, prenom, dateNaissance, adresse, telephone, email, posteJeu} = req.body;

    // Configuration de l'email
    const mailOptions = {
        from : process.env.EMAIL_USER, // Expéditeur
        to: "contact@kingzofkongo.com", // Destinataire contact@kingzofkongo.com
        subject: "Nouvelle adhésion", // Sujet de l'email

    text: `
    Nouveau membre :
    - Nom : ${nom}
    - Prénom : ${prenom}
    - Date de naissance : ${dateNaissance}
    - Adresse : ${adresse}
    - Téléphone : ${telephone}
    - Email : ${email}
    - Poste de jeu : ${posteJeu}
`

        
    };

    try {
        // Envoi de l'e-mail
        await transporter.sendMail(mailOptions);
        res.json({ success: true, message: "Email envoyé avec succés !"}); // Réponse email envoyé avec succés
    } catch (error) {
        console.error("Erreur d'envoi d'email :", error);
        res.status(500).json( {success: false, message: "Erreur d'envoi d'email" }); // Réponse en cas d'erreur
    }
});




app.post("/send-donation-email", async (req, res) => {
    // Récuperation des données envoyées par le frontend (formulaire de don)
    const { nom, prenom, nomSociete, adresse, pays, montant} = req.body;

    // Configuration de l'email
    const mailOptions = {
        from: process.env.EMAIL_USER, // Expéditeur
        to: "contact@kingzofkongo.com",
        subject: "Nouveau don reçu", // Sujet de l'email
        text: `
        Nouveau don reçu :
        - Nom : ${nom}
        - Prénom : ${prenom}
        - Société : ${nomSociete ? nomSociete : "N/A"}
        - Adresse : ${adresse}
        - Pays : ${pays}
        - Montant du don : ${montant}€
        `  
    };


    try{
        // Envoie de l'e-mail
        await transporter.sendMail(mailOptions);
        res.json({ success: true, message: "Email de don envoyé avec succés !"});

    } catch(error) {
        console.error("Erreur d'envoi d'email :", error);
        res.status(500).json({ success: false, message: "Erreur d'envoi d'email" });
    }
});




// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`Serveur en écoute sur http://localhost:${PORT}`);
})

