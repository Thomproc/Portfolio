import styles from "./NavBar.module.css";
import { useEffect, useState } from "react";
import ComputerNavBar from "./ComputerNavBar";
import MobileNavBar from "./MobileNavBar";

const useResponsiveWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      console.log("resize");
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return width;
};

export default function NavBar() {
  const width = useResponsiveWidth();
  return (
    <div className={styles.navBar}>
      {width < 600 ? <MobileNavBar /> : <ComputerNavBar />}
    </div>
  );
}
