import React, { useState } from "react";
import './css_pages/Donations.css'



const DonationForm = () => {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    nomSociete: "",
    adresse: "",
    pays: "",
    montant: "",
  });

  const [loading, setLoading] = useState(false); // Pour gérer l'état du bouton

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      const response = await fetch("http://localhost:5000/send-donation-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),

      });

      const data = await response.json();
      
      if (data.success) {
        alert(`Merci pour votre don de ${formData.montant}€ !`);

      // Redirection vers PayPal avec les détails du don
      const paypalUrl = `https://www.paypal.com/donate?business=${encodeURIComponent(
      "contact@kingzofkongo.com"
      )}&amount=${encodeURIComponent(
      formData.montant
      )}&currency_code=EUR`;

      window.location.href = paypalUrl;

    
    } else {
        alert("Erreur lors de l'envoi de l'email. Veuillez réessayer.");

      }


    }
    catch(error) {
      console.error("Erreur lors de l'envoi de l'email :", error);
      alert("Une erreur est survenue. Veuillez réessayer.");
    }
    finally{
      setLoading(false);
    }

  
  }

  return (

    <div className="img_background">

<div className="form-container-Donations">
          
          
          <h2>Faire un Don</h2>
          <form className="form_donation" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>Nom :</label>
              <input type="text" name="nom" value={formData.nom} onChange={handleChange} required />
            </div>
    
            <div className="form-group">
              <label>Prénom :</label>
              <input type="text" name="prenom" value={formData.prenom} onChange={handleChange} required />
            </div>
    
            <div className="form-group">
              <label>Nom de société (facultatif) :</label>
              <input type="text" name="nomSociete" value={formData.nomSociete} onChange={handleChange} />
            </div>
    
            <div className="form-group">
              <label>Adresse :</label>
              <input type="text" name="adresse" value={formData.adresse} onChange={handleChange} required />
            </div>
    
            <div className="form-group">
              <label>Pays :</label>
              <input type="text" name="pays" value={formData.pays} onChange={handleChange} required />
            </div>
    
    
            <div className="form-group">
              <label>Indiquer le Montant du don (€) :</label>
              <input type="number" name="montant" value={formData.montant} onChange={handleChange} required min="1" />
            </div>
    

            <button type="submit" disabled={loading}>
              {loading ? "Traitement en cours..." : "Faire un don avec PayPal"}
              </button>
        


            


          </form>

</div>

</div>



        
    
     

  

  );
};

export default DonationForm;
