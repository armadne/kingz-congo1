const mongoose = require("mongoose");


//Ce code définit un modèle Mongoose qui permet d'enregistrer dans MongoDB
//  des pages avec un titre, une description et une liste 
// d'images (images). Ensuite, il exporte ce modèle pour 
// qu'il puisse être utilisé ailleurs dans l'application.




// Créer un modèle Mongoose basé sur le schéma ContenuSchema (autrement dit :  Créer un "Schéma" qui définit la structure des données)
const ContenuSchema = new mongoose.Schema({
    titre: String,  // Titre de la page 
    description: String, // Texte de présentation
    images: [String] // Liste d'URSLs d'images
});

// Création du modèle basé sur le schéma
const Contenu = mongoose.model("Contenu", ContenuSchema);

// Exporter le modèle pour l'utiliser ailleurs
module.exports = Contenu