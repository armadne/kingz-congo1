import React from "react";
import "./css_components/Card.css"


// Card affiche les évenements (actions caritatives, les stages et camps (ex: Camp de basketball été 2025), tournois basketball, temoiganages etc..)

function Card({title, description}) {
    return(
        <div className="card" style={{ background: "transparent" }}>
            <h2>{title}</h2> {/* {title} donc ce que l'utilisateur aura choisi comme titre */}
            <p>{description}</p>
        </div>
    );
}

export default Card;

