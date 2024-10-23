import { FormEvent, useEffect, useState } from "react";
import styles from "./Contact.module.css";
import TextField from "@mui/material/TextField";
import emailjs from "@emailjs/browser";
import SocialMedias from "./SocialMedias";

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

    // emailjs
    //   .send("service_2ws4xnj", "template_gfhq1z8", mailParams)
    //   .then((_res) => {
    //     console.log("C est parti !", _res.text);
    //   })
    //   .catch((_err) => {
    //     console.log("Erreur :(", _err.text);
    //   });
  };
  return (
    <div className={styles.contact}>
      <h1>Contact</h1>
      <form className={styles["my-form"]} onSubmit={sendEmail}>
        <div className={styles["input-row"]}>
          <TextField
            variant="standard"
            fullWidth
            required
            id={EEmailParams.FROM_NAME}
            label="Votre nom"
            value={fromName}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setFromName(event.target.value);
            }}
          />
          <TextField
            variant="standard"
            fullWidth
            required
            id={EEmailParams.EMAIL}
            type="email"
            label="Adresse mail"
            value={email}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setEmail(event.target.value);
            }}
          />
        </div>
        <TextField
          variant="standard"
          fullWidth
          required
          multiline
          rows={4}
          id={EEmailParams.MESSAGE}
          label="Votre Message"
          value={message}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setMessage(event.target.value);
          }}
        />

        <button type="submit" className={styles["send-button"]}>
          Envoyer
        </button>
      </form>
      <SocialMedias />
    </div>
  );
}
