import { FormEvent, useEffect, useState } from "react";
import styles from "./Contact.module.css";
import TextField from "@mui/material/TextField";
import emailjs from "@emailjs/browser";
import SocialMedias from "./SocialMedias";
import { Alert, CircularProgress, Snackbar } from "@mui/material";

enum EEmailParams {
  FROM_NAME = "from_name",
  FROM_SURNAME = "from_surname",
  EMAIL = "email",
  OBJECT = "object",
  MESSAGE = "message",
}

export default function Contact() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState<null | boolean>(null);

  const [fromName, setFromName] = useState("");
  const [fromSurname, setFromSurname] = useState("");
  const [email, setEmail] = useState("");
  const [object, setObject] = useState("");
  const [message, setMessage] = useState("");
  const mailParams = {
    from_name: fromName,
    from_surname: fromSurname,
    email: email,
    object: object,
    message: message,
  };

  useEffect(() => {
    emailjs.init("OX7XBSMFmNn6oTWJ8");
  }, []);

  const sendEmail = (e: FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setIsSuccess(null);

    emailjs
      .send("service_2ws4xnj", "template_gfhq1z8", mailParams)

      .then((_res) => {
        console.log("Email envoyé !", _res.text);
        setIsSuccess(true);
      })
      .catch((_err) => {
        console.log("Erreur :(", _err.text);
        setIsSuccess(false);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <div className={styles.contact}>
      <div className={styles.header}>
        <h2>Contactez-moi !</h2>
        <SocialMedias />
      </div>
      <form className={styles["my-form"]} onSubmit={sendEmail}>
        <div className={styles["input-row"]}>
          <TextField
            variant="standard"
            fullWidth
            required
            id={EEmailParams.FROM_SURNAME}
            label="Nom"
            value={fromSurname}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setFromSurname(event.target.value);
            }}
          />
          <TextField
            variant="standard"
            fullWidth
            required
            id={EEmailParams.FROM_NAME}
            label="Prénom"
            value={fromName}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setFromName(event.target.value);
            }}
          />
        </div>
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
        <TextField
          variant="standard"
          fullWidth
          required
          id={EEmailParams.OBJECT}
          label="Objet"
          value={object}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setObject(event.target.value);
          }}
        />
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
        <div className="m-auto">
          <button
            type="submit"
            className={`${styles["send-button"]} ${
              isSuccess === true
                ? styles["success"]
                : isSuccess === false
                  ? styles["error"]
                  : ""
            }`}
            disabled={isLoading}
          >
            <div>Envoyer</div>
            {isLoading && (
              <CircularProgress size={20} style={{ color: "white" }} />
            )}
          </button>
        </div>
      </form>
      <Snackbar
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        open={isSuccess !== null}
        autoHideDuration={2000}
        onClose={() => setIsSuccess(null)}
      >
        <Alert severity={isSuccess ? "success" : "error"}>
          {isSuccess === true
            ? "Message envoyé ;)"
            : "Échec de l'envoi... Veuillez réessayer"}
        </Alert>
      </Snackbar>
    </div>
  );
}
