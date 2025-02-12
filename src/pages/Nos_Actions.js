import React from "react";
import "./css_pages/Nos_actions.css";
//import background from "./Image1.jpg";



const actions = [
  {
    title: "Actions Caritatives",
    description:
      "Nous organisons des événements pour soutenir les communautés locales, en offrant des ressources et un encadrement aux jeunes passionnés de basketball.",
    image: "/images/actions1.jpg",
  },
  {
    title: "Stages & Camps U9-U15",
    description:
      "Des stages dédiés aux jeunes joueurs de 9 à 15 ans, avec un encadrement professionnel pour les aider à progresser et à développer leurs compétences.",
    image: "/images/actions2.jpg",
  },
  {
    title: "Tournoi Kingz Of B-Ball",
    description:
      "Un tournoi de basketball unique qui rassemble des équipes de différents horizons, mettant en avant le talent et la passion du jeu.",
    image: "/images/actions3.jpg", // Correction du nom du fichier
  },
];

const NosActions = () => {
  return (

    <div className="img-actions">
      
                <div className="actions-container">
      <h1 className="title">Nos Actions</h1>
      <div className="cards-container">
        {actions.map((action, index) => (
          <div key={index} className="card">
            <img src={action.image} alt={action.title} className="card-image" />
            <div className="card-content">
              <h2 className="card-title">{action.title}</h2>
              <p className="card-description">{action.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>






  );
};

export default NosActions;
