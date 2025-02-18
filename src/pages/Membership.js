import React, { useState, useEffect } from "react";
import './css_pages/Membership.css'
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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Formulaire soumis avec succès !");
  };

  useEffect(() => {
    // Charger le bouton PayPal après le rendu du composant
    if (window.paypal) {
      window.paypal.HostedButtons({
        hostedButtonId: "FDSFSCUEL996C",
      }).render("#paypal-container-FDSFSCUEL996C");
    }
  }, []);

  return (

    <motion.div
    className="Backgrnd"
      initial={{ opacity: 0}} 
      animate={{ opacity: 1}} 
      transition={{ duration: 1.5  }}
      >

      <motion.div
      className="form-container"
      initial={{ y: -50, opacity: 1}}
      transition={{ duration: 1, ease: "easeOut"}}
      >
     
      
        
        <h2>Devenir Membre</h2>

<form onSubmit={handleSubmit}>
{/*{<img src={background} alt="Devenir Membre" className="background-image" />}*/}
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

  <div className="form-group">
    <label>Taille :</label>
    <input type="number" name="taille" value={formData.taille} onChange={handleChange} placeholder="En cm" />
  </div>

  <div className="form-group">
    <label>Pointure :</label>
    <input type="number" name="pointure" value={formData.pointure} onChange={handleChange} />
  </div>

  <div className="form-group">
    <label>Taille de vêtement :</label>
    <select name="tailleVetement" value={formData.tailleVetement} onChange={handleChange}>
      <option value="">Sélectionnez une taille</option>
      <option value="S">S</option>
      <option value="M">M</option>
      <option value="L">L</option>
      <option value="XL">XL</option>
      <option value="XXL">XXL</option>
      <option value="XXXL">XXXL</option>
    </select>
  </div>

  <button type="submit">S'inscrire</button>
</form>




        {/* Conteneur du bouton PayPal  */}
        <div id="paypal-container-FDSFSCUEL996C"></div>
    
        {/* Initialisation du bouton PayPal */}

        <div id="paypal-container-FDSFSCUEL996C"></div>




</motion.div>
    
    </motion.div>

  
  );
};

export default MembershipForm;
