import styles from "./SocialMedias.module.css";
import { LinkedIn, GitHub } from "@mui/icons-material";
export default function SocialMedias() {
  return (
    <div className={styles["social"]}>
      <div className={styles["icon-container"]}>
        <GitHub
          sx={{
            "&:hover": { color: "#6e5494" },
          }}
        />
      </div>
      <div className={styles["icon-container"]}>
        <LinkedIn
          sx={{
            "&:hover": { color: "#0A66C2" },
          }}
        />
      </div>
    </div>
  );
}
