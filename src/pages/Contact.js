import React, { useState } from "react";
import "./css_pages/Contact.css";

const Contact = () => {
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const mailtoLink = `mailto:contact@kingzofkongo.com?subject=Demande de contact&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  };

  return (
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
  );
};

export default Contact;
