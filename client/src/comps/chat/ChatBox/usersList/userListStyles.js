import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles((theme) => ({
  list: {
    [theme.breakpoints.down("md")]: {
      maxHeight: "70%",
      overflow: "scroll",
      overflowY: "scroll",
      overflowX: "hidden",
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
  },
}));
