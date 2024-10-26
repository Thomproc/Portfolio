// Mettre le parent en position: relative / absolute
import { ButtonBase } from "@mui/material";
import { color } from "three/examples/jsm/nodes/Nodes.js";

export default function MyRipple() {
  return (
    <ButtonBase
      sx={{ position: "absolute", color: "var(--text)", inset: 0, zIndex: 2 }}
    />
  );
}
