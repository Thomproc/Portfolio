import styles from "./NavBar.module.css";
import { useEffect, useState } from "react";
import ComputerNavBar from "./ComputerNavBar";
import MobileNavBar from "./MobileNavBar";
import FileDownloadOutlinedIcon from "@mui/icons-material/FileDownloadOutlined";

const useResponsiveWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
};

const switchNavBar = (screenWidth: number) => {
  if (screenWidth < 720) {
    return <MobileNavBar />;
  } else if (screenWidth < 900) {
    return <ComputerNavBar withoutIcons />;
  }

  return <ComputerNavBar />;
};

export default function NavBar() {
  const width = useResponsiveWidth();
  return (
    <div className={styles.navBar}>
      {switchNavBar(width)}
      <div
        className={styles.cv}
        onClick={(_event) => window.open("./CV.pdf", "_blank")}
      >
        CV
        <FileDownloadOutlinedIcon />
      </div>
    </div>
  );
}
