import styles from "./SocialMedias.module.css";
import { LinkedIn, GitHub } from "@mui/icons-material";
export default function SocialMedias() {
  return (
    <div className={styles["social-container"]}>
      <ul className={styles["social-icons"]}>
        <li>
          <a href="#">
            <GitHub />
          </a>
        </li>
        <li>
          <a href="#">
            <LinkedIn />
          </a>
        </li>
      </ul>
    </div>
  );
}
