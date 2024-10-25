// Mettre le parent en position: relative / absolute
import { ButtonBase } from "@mui/material";

export default function MyRipple() {
  return <ButtonBase sx={{ position: "absolute", inset: 0, zIndex: 2 }} />;
}
