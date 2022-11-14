import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  parent: {
    display: "flex",
    height: "100vh",
    width: "100vw",
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    background: `linear-gradient(rgba(0,0,0,0.6),rgba(0, 0, 0,0.6)),url(https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjQ4MS1iYi1uaW5nLTEyY18xLmpwZw.jpg)`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
  },
  child: {
    width: "400px",
    [theme.breakpoints.down("sm")]: {
      width: "90%",
    },
  },
  paper: {
    padding: "20px",
  },
}));
