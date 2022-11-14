import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  parent: {
    marginTop: "70px",
  },
  gridItemOne: {
    border: "1px solid black",
    backgroundColor: "lightgray",
    [theme.breakpoints.up("xs")]: {
      display: "none",
    },
    [theme.breakpoints.up("md")]: {
      display: "block",
    },
    [theme.breakpoints.up("sm")]: {
      padding: "15px",
    },
    [theme.breakpoints.up("lg")]: {
      padding: "40px",
    },
  },
  gridtwoparent: {
    height: "89vh",
    position: "relative",
    background: `linear-gradient(rgba(0,0,0,0.6),rgba(0, 0, 0,0.6)),url(https://images.rawpixel.com/image_800/czNmcy1wcml2YXRlL3Jhd3BpeGVsX2ltYWdlcy93ZWJzaXRlX2NvbnRlbnQvbHIvdjQ4MS1iYi1uaW5nLTEyY18xLmpwZw.jpg)`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    [theme.breakpoints.down("md")]: {
      height: "90vh",
    },
  },
  gridTwoFirstChild: {
    height: "78vh",
    maxHeight: "78vh",
    boxSizing: "border-box",
    overflowX: "hidden",
    overflow: "scroll",
    scrollbarWidth: "thin",
    "&::-webkit-scrollbar": {
      width: "0",
    },
    "&::-webkit-scrollbar-track": {
      background: "#fff",
    },
    "&::-webkit-scrollbar-thumb": {
      backgroundColor: "#fff",
    },
    "&::-webkit-scrollbar-thumb:hover": {
      background: "#fff",
    },
  },
  gridTwoSecChild: {
    width: "100%",
    position: "absolute",
    bottom: "7px",
  },
}));
