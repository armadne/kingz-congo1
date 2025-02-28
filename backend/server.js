// Ce fichier permettrra de recevoir les infos du formulaire du frontend
// Et enverra un mail a contact@kingzofkongo.com

// Importations libraries necessaires
require("dotenv").config();

console.log("Email User:", process.env.EMAIL_USER);
console.log("Email Password", process.env.EMAIL_PASS);

const express = require("express"); //dotenv : permet d’utiliser un fichier .env pour stocker les informations sensibles comme l’adresse e-mail et le mot de passe.
const cors = require("cors") // Permet autoriser requetes entre frontend React et backend Express
const nodemailer = require("nodemailer") // Bibliothèque epour envoyer des mails
const mongoose = require("mongoose"); // Bibliotheque pour interagir avec MongoDB
const Contenu= require("./models/Contenu"); // Importation du modèle MongoDB depuis le dossier models et importe le fichier Contenu.js


// Initialise l'application  Express
const app = express();


// Active le support JSON pour lire les données envoyées par le frontend
app.use(express.json())


// Active le CORS pour autoriser les requêtes du frontend
app.use(cors());

//Définit le port du serveur (5000 par défaut, ou un autre mais doit etre definie dans .env )
const PORT = process.env.PORT || 5000;

// Connexion à MongoDB
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => console.log("Connecté à MongoDB"))
  .catch((err) => console.error("Erreur MongoDB:", err));



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


// Route pour récupérer le contenu
// Cette route permet à React de récuperer les données stockées en base
app.get("/api/contenu", async (req, res) => {
    try{
        const contenu = await Contenu.findOne(); // Cherche un document de contenu dans la base de donnée
        res.json(contenu); // Renvoie le contenu en réponse JSON
} catch(error) {
    res.status(500).json({ error: "Erreur serveur"}); // Réponse en cas d'erreur serveur
}

});

// Route pour modifier le contenu
// Cette route permet de mettrre a jour le titre, descriotion et les images de la base de donnée
app.put("/api/contenu/:id", async (req, res) => {
    const { titre, description, images } = req.body; //Recuperration des nouvelles données envoyées par le client

    try{
        // Met à jour le contenu en base de données avec les nouvelles valeurs et renvoie le contenu mis à jour
        const contenu = await Contenu.findByIdAndUpdate(req.params.id, { titre, description, images}, { new: true });
        res.json(contenu);
    } catch (error) {
        res.status(500).json({ error: "Erreur serveur"});
    }
});

app.post("/api/upload", upload.single("image"), async (req, res) => {
    try {
        const result = await cloudinary.uploader.upload(req.file.path); // Upload sur Cloudinary
        res.json( {url: result.secur_url }); // Retourne l'URL de l'image uploadée
    } catch(error) {
        res.status(500).json({ error: "Erreur d'upload"});
    }
});

// Démarrage du serveur
app.listen(PORT, () => {
    console.log(`Serveur en écoute sur http://localhost:${PORT}`);
})



app.listen(PORT, () => {
    console.log(`Serveur en écoute sur http://localhost:${PORT}`);
});