import { FocusContext } from "../../FocusContext";
import styles from "./HeroSection.module.css";
import Introduction from "./Introduction";
import Space from "./Space";

export default function HeroSection() {
  return (
    <FocusContext.Consumer>
      {({ computerIsFocused }) => (
        <div
          className={styles["container"]}
          style={
            {
              "--minHeight": computerIsFocused ? "600px" : "200px",
              "--minHeightMobile": computerIsFocused ? "400px" : "200px",
            } as any
          }
          onMouseMove={(e) => {
            const satellites = document.getElementById("satellites")!;
            const heroSize = e.currentTarget.getBoundingClientRect();
            const x = (e.clientX - heroSize.width / 2) / heroSize.width;
            const y = (e.clientY - heroSize.height / 2) / heroSize.height;
            satellites.style.transform = `rotateX(${y * -40}deg) rotateZ(${
              x * 40
            }deg)`;
          }}
        >
          <div className={styles["hero-section"]}>
            <Introduction />
            <Space />
          </div>
        </div>
      )}
    </FocusContext.Consumer>
  );
}
