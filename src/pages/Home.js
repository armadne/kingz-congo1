import React from "react";
import "./css_pages/Home.css"; // Fichier CSS spécifique à Home
import Card from "../components/Card";
import background from "./background_home4.jpg";

function Home() {
    return (


        
       <div className="home">


        <img src={background} alt="Kingz of Kongo" className="background-image" />
            <h1>Bienvenue sur Kingz of Kongo</h1>
            <p> Notre mission est de promouvour la culture et soutenir nos actions humanitaires.</p>
            <div className="card-container">
                {/* Card affiche les évenements (actions caritatives, les stages et camps (ex: Camp de basketball été 2025), tournois basketball, temoiganages etc..) */}
                <Card title="Nos actions" description=" Découvrez nos projets humanitaires"/>
                {/*<Card title="Notre boutique" description="Achetez et soutenez nos actions"/>*/}
                <Card title="Nous contacter" description="Rejoignez notre communauté" />

            </div>
        </div>


    );


    
}

export default Home;

//<div className="home" style={{ backgroundImage: `url(${background})` }}></div>