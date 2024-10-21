import { createTheme } from "@mui/material/styles";
import { colors } from "./ColorTheme";

const theme = createTheme({
  palette: {
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
    MuiInputLabel: {
      styleOverrides: {
        root: {
          zIndex: 1,
          color: colors.text2,
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
