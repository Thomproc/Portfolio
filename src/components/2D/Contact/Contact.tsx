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
        {/* <h2>Envoyer un message</h2> */}

        <div className={styles["form-components"]}>
          <div>
            <label className="paragraph" htmlFor={EEmailParams.FROM_NAME}>
              Nom
            </label>
            <input
              id={EEmailParams.FROM_NAME}
              // name={EEmailParams.FROM_NAME}
              type="text"
              value={fromName}
              onChange={(e) => setFromName(e.target.value)}
              placeholder="Votre nom"
              required
            />
          </div>
          <div>
            <label className="paragraph" htmlFor={EEmailParams.EMAIL}>
              Adresse mail
            </label>
            <input
              id={EEmailParams.EMAIL}
              // name={EEmailParams.EMAIL}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="example@gmail.com"
              required
            />
          </div>
          <div>
            <label
              className={styles["message"] + " paragraph"}
              htmlFor={EEmailParams.MESSAGE}
            >
              Message
            </label>
            <textarea
              className={styles["message"]}
              id={EEmailParams.MESSAGE}
              // name={EEmailParams.MESSAGE}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Salut ! Je vous contacte pour..."
              required
            />
          </div>
        </div>

        <button type="submit" className={styles["send-button"]}>
          Envoyer
        </button>
      </form>
      {/* <div className={styles["astronaut"]}>
        <img src="./anime_astronaut.jpg" alt="astronaute_anime" />
      </div> */}
    </div>
  );
}
