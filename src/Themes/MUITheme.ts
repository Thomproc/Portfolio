import { createTheme } from "@mui/material/styles";
import colors from "./ColorTheme";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: colors.primary,
    },
    secondary: {
      main: colors.secondary,
    },
    text: {
      primary: colors.text,
    },
  },
  components: {
    MuiModal: {
      styleOverrides: {
        backdrop: {
          background: "rgba(0, 0, 0, 0.6)",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background: colors.background,
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          paddingLeft: "8px",
        },
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          zIndex: 1,
          paddingLeft: "8px",
          color: colors.text3,
          "&.MuiFormLabel-filled": {
            color: colors.secondary, // Couleur du label flottant
          },
          "&.Mui-focused": {
            color: colors.primary,
          },
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          color: colors.text,
          background: colors.background,
          "&:before": {
            borderBottom: `2px solid ${colors.secondary_dark}`,
          },
          "&:hover:not(.Mui-disabled):before": {
            borderBottom: `2px solid ${colors.secondary}`,
          },
          "&.Mui-focused:before": {
            borderBottom: `2px solid ${colors.primary}`,
          },
        },
      },
    },
  },
});

export default theme;
