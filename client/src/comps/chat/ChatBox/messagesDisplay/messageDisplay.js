import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  wrapper: {
    padding: "12px",
  },
  rightMessageContainer: {
    marginTop: "10px",
    display: "flex",
    justifyContent: "flex-end",
  },
  adminContainer: {
    marginTop: "8px",
    display: "flex",
    justifyContent: "center",
  },
  adminMessageBox: {
    maxWidth: "50%",
    padding: "3px 18px",
    color: "white",
    fontWeight: "500",
    lineHeight: 0.3,
    backgroundColor: "gray",
    borderRadius: "23px",
    justifyContent: "center",
    [theme.breakpoints.down("md")]: {
      maxWidth: "100%",
    },
  },
  rightMessageBox: {
    maxWidth: "50%",
    padding: "5px 18px",
    backgroundColor: "#1976d2",
    color: "#fff",
    lineHeight: "1",
    borderRadius: "23px 23px 0px 23px",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "80%",
    },
  },
  leftMessageContainer: {
    marginTop: "8px",
    display: "flex",
    justifyContent: "flex-start",
  },
  leftMessageBox: {
    maxWidth: "50%",
    padding: "5px 18px",
    backgroundColor: "lightgray",
    lineHeight: "1",
    borderRadius: "23px 23px 23px 0px",
    justifyContent: "center",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "80%",
    },
  },
}));
