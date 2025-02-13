import React, { useState } from "react";
import "./css_pages/Contact.css";
import videoBg from "./video-contact.mp4";

const Contact = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:contact@kingzofkongo.com?subject=Demande de contact&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="contact-page">

      {/* Video en Background */}
      <video autoPlay loop muted className="background-video">
        <source src={videoBg} type="video/mp4" />
        Votre navigateur ne supporte pas les vidéos.
      </video>

      <div className="contact-container">

      <h1>Nous Contacter</h1>
      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="message">Votre message :</label>
        <textarea
        
          id="message"
          name="message"
          rows="6"
          maxLength="500"
          placeholder="Écrivez votre message ici (max 500 caractères)..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <button type="submit">Envoyer</button>
      </form>
      </div>

    </div>
  );
};

export default Contact;
