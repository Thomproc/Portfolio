import { FormEvent, useEffect, useState } from "react";
import styles from "./Contact.module.css";
import emailjs from "@emailjs/browser";

enum EEmailParams {
  FROM_NAME = "from_name",
  EMAIL = "email",
  MESSAGE = "message",
}

export default function Contact() {
  const [fromName, setFromName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const mailParams = {
    from_name: fromName,
    email: email,
    message: message,
  };

  useEffect(() => {
    emailjs.init("OX7XBSMFmNn6oTWJ8");
  }, []);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    if (fromName === "" || email === "" || message === "") {
      return;
    }
    emailjs
      .send("service_2ws4xnj", "template_gfhq1z8", mailParams)
      .then((_res) => {
        console.log("C est parti !", _res.text);
      })
      .catch((_err) => {
        console.log("Erreur :(", _err.text);
      });
  };
  return (
    <div className={styles.contact}>
      <form onSubmit={sendEmail}>
        <label htmlFor={EEmailParams.FROM_NAME}>Nom :</label>
        <input
          id={EEmailParams.FROM_NAME}
          // name={EEmailParams.FROM_NAME}
          type="text"
          value={fromName}
          onChange={(e) => setFromName(e.target.value)}
          placeholder="Thomas PROCUREUR"
          required
        />

        <label htmlFor={EEmailParams.EMAIL}>Adresse mail :</label>
        <input
          id={EEmailParams.EMAIL}
          // name={EEmailParams.EMAIL}
          type="text"
          value={fromName}
          onChange={(e) => setFromName(e.target.value)}
          placeholder="votre_email@gmail.com"
          required
        />
        {/* <li>
          <label>Email : </label>
          <input
            name="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </li>
        <li>
          <label>Message : </label>
          <textarea
            name="message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </li> */}

        {/* <button type="submit">Envoyer</button> */}
      </form>
    </div>
  );
}
