import React, { useState, useEffect, useRef } from "react";
import "./css_pages/Membership.css";
import { motion } from "framer-motion";

const MembershipForm = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    dateNaissance: "",
    adresse: "",
    telephone: "",
    email: "",
    instagram: "",
    facebook: "",
    posteJeu: "",
    taille: "",
    pointure: "",
    tailleVetement: "",
  });

  const paypalRef = useRef(null);



  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/send-email", {
        method : "POST", // Envoie d'une requete POST
        headers : {
          "Content-Type" : "application/json" // Indique qu'on envoie du JSON 
        },

        body: JSON.stringify(formData), // Convertit les données du formulaire en JSON

      });

      const data = await response.json(); // Attend la reponse du serveur et la convertit en JSON
      if (data.success) {
        alert("Formulaire soumis et email envoyé"); // Message de succés
      } else {
        alert("Erreur lors de l'envoi du formualaire"); // Message d'erreur
      }
    } catch(error) {
      console.error("Erreur:", error);
      alert("Une erreur est survenue"); // Gestion des erreurs 
    }


   
  };

  // Fonction pour charger le script PayPal dynamiquement
  const loadPayPalScript = (callback) => {
    const script = document.createElement("script");
    script.src = "https://www.paypal.com/sdk/js?client-id=TON_CLIENT_ID&currency=EUR";
    script.async = true;
    script.onload = callback;
    document.body.appendChild(script);
  };

  useEffect(() => {
    loadPayPalScript(() => {
      if (window.paypal) {
        // Bouton PayPal classique
        window.paypal.Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [{ amount: { currency_code: "EUR", value: "10.00" } }],
            });
          },
          onApprove: (data, actions) => {
            return actions.order.capture().then((details) => {
              alert("Paiement réussi par " + details.payer.name.given_name);
            });
          },
          onError: (err) => {
            console.error("Erreur PayPal :", err);
          },
        }).render(paypalRef.current);

        // Bouton Google Pay via PayPal
        window.paypal.Buttons({
          fundingSource: window.paypal.FUNDING.GOOGLEPAY,
          style: { shape: "rect", color: "black", label: "pay" },
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [{ amount: { currency_code: "EUR", value: "10.00" } }],
            });
          },
          onApprove: (data, actions) => {
            return actions.order.capture().then((details) => {
              alert("Paiement réussi par " + details.payer.name.given_name);
            });
          },
          onError: (err) => {
            console.error("Erreur Google Pay :", err);
          },
        }).render("#google-pay-button-container");
      }
    });
  }, []);

  return (
    <motion.div className="Backgrnd" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.5 }}>
      <motion.div className="form-container" initial={{ y: -50, opacity: 1 }} transition={{ duration: 1, ease: "easeOut" }}>
        <h2>Devenir Membre</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Nom :</label>
            <input type="text" name="nom" value={formData.nom} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Prénom :</label>
            <input type="text" name="prenom" value={formData.prenom} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Date de naissance :</label>
            <input type="date" name="dateNaissance" value={formData.dateNaissance} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Adresse :</label>
            <input type="text" name="adresse" value={formData.adresse} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Téléphone :</label>
            <input type="tel" name="telephone" value={formData.telephone} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Adresse mail :</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="form-group">
            <label>Compte Instagram :</label>
            <input type="text" name="instagram" value={formData.instagram} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Compte Facebook :</label>
            <input type="text" name="facebook" value={formData.facebook} onChange={handleChange} />
          </div>
          <div className="form-group">
            <label>Poste de jeu :</label>
            <select name="posteJeu" value={formData.posteJeu} onChange={handleChange}>
              <option value="">Sélectionnez un poste</option>
              <option value="Meneur">Meneur</option>
              <option value="Arrière">Arrière</option>
              <option value="Ailier">Ailier</option>
              <option value="Ailier fort">Ailier fort</option>
              <option value="Pivot">Pivot</option>
            </select>
          </div>
          <button className="btn-inscription" type="submit">
            S'inscrire
          </button>
        </form>

        {/* Bouton PayPal */}
        <div ref={paypalRef}></div>

        {/* Bouton Google Pay */}
        <div id="google-pay-button-container"></div>

        <button className="devenez-membre-btn">
          <a href="https://www.paypal.com/ncp/payment/LHFDGH2CX8S2S">Payer la cotisation</a>
        </button>
      </motion.div>
    </motion.div>
  );
};

export default MembershipForm;
