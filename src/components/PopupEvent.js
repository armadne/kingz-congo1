import React, { useState, useEffect } from "react";
import "./css_components/PopupEvent.css" // import du fichier css pour le PopUp



// Déclaration du composant PopupEvent
function PopupEvent() {

    // Création d'un état 'ShowPopup' pour gérer l'affichage du popup
    // 'false' signifie que le popup est caché au départ
    const [showPopup, setShowPopup] = useState(false);

    // 'useEffect'  est une fonction qui exécute du code à un moment précis du cycle de vie du composant
    useEffect(() => {
        // On définit un timer qui mettra 'showPopup' à 'true' après 3 secondes
        const timer = setTimeout(() => {
            setShowPopup(true);

        }, 2000);

        // La fonction de nettoyage :  si le composant disparaît avant 3 secondes, on annule le timer
        return () => clearTimeout(timer);

         
    }, []); // Le tableau vide `[]` signifie que cet effet s'exécute uniquement après le premier rendu du composant

return(
    // On affiche le popup seulement si 'showPopup' est 'true'
    showPopup && (
        <div className="popup-overlay">
            <div className="popup">
                {/* Bouton pour fermer le popup, il change 'showPopup' à 'false' lorsqu'on clique dessus (pour faire disparaitre le popup)*/}
                

                {/* Titre du popup */}
                <h2>Événement à venir</h2>

                {/* Information sur l'évenement */}
                <p>Tournoi de Basketball - Été 2025</p>
                <p>Date : Avril 2025</p>
                
                {/* Bouton d'inscription (actuellement il ne fait rien, mais on peut ajouter une fonction plus tard) */}
                {/* CTA" (Call To Action) signifie qu'il s'agit d'un bouton destiné à inciter l'utilisateur à effectuer une action (ex: "S'inscrire", "Acheter", "En savoir plus")*/}
                {/* Bouton d'inscription : redirige vers PayPal */}
          <a href="https://www.paypal.com/ncp/payment/T7D6FEGPB3D6S" target="_blank" rel="noopener noreferrer">
            <button className="cta-btn">S'inscrire</button>
          </a>

          <button className="close-btn" onClick={() => setShowPopup(false)}>Fermer</button>
                
            </div>
        </div>
    )
);


}

// On exporte le composant pour pouvoir l'utiliser ailleurs dans le projet
export default PopupEvent;