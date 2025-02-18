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

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Merci pour votre don de ${formData.montant}€ !`);
  };

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
              <label>Montant du don (€) :</label>
              <input type="number" name="montant" value={formData.montant} onChange={handleChange} required />
            </div>
    
            {/*<button type="submit">Faire un don</button>*/}



          </form>




          

                  {/* Bouton PayPal */}


                  <div className="paypal-button-container">
  <form action="https://www.paypal.com/donate" method="post" target="_top">
    <input type="hidden" name="hosted_button_id" value="NQ2QZ8FAJ6DRY" />
    <input 
      type="image" 
      src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" 
      border="0" 
      name="submit" 
      title="PayPal - The safer, easier way to pay online!" 
      alt="Donate with PayPal button" 
      className="paypal-button"
    />
    <img 
      alt="" 
      border="0" 
      src="https://www.paypal.com/en_FR/i/scr/pixel.gif" 
      width="1" 
      height="1" 
    />
  </form>
</div>

</div>


</div>



        
    
     

  

  );
};

export default DonationForm;
