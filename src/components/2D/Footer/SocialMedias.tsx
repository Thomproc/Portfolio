import { Tooltip } from "@mui/material";
import styles from "./SocialMedias.module.css";
import { LinkedIn, GitHub } from "@mui/icons-material";
export default function SocialMedias() {
  return (
    <div className={styles["social"]}>
      <Tooltip title="GitHub">
        <div
          className={styles["icon-container"]}
          onClick={() => {
            window.open(
              "https://github.com/Thomproc?tab=repositories",
              "_blank",
            );
          }}
        >
          <GitHub
            sx={{
              "&:hover": { color: "#6e5494" },
            }}
          />
        </div>
      </Tooltip>
      <Tooltip title="LinkedIn">
        <div
          className={styles["icon-container"]}
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/thomas-procureur-a31114260",
              "_blank",
            )
          }
        >
          <LinkedIn
            sx={{
              "&:hover": { color: "#0A66C2" },
            }}
          />
        </div>
      </Tooltip>
    </div>
  );
}
