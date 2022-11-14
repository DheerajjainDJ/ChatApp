import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          fontSize: "15px",
          color: "black",
          background: "lightgray",
          backgroundColor: "lightgray",
        },
      },
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          minHeight: "70% !important",
          minWidth: "50% !important",
          background: "lightgray !important",
          backgroundColor: "lightgray !important",
        },
      },
    },
  },
});
