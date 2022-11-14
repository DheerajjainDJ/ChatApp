import React from "react";
import {
  List,
  Box,
  ListItem,
  ListItemAvatar,
  Avatar,
  Typography,
  ListItemText,
  Divider,
} from "@mui/material";
import { useStyles } from "./userListStyles";

const UsersList = ({ users }) => {
  const classes = useStyles();
  return (
    <>
      <Typography
        variant="h4"
        textAlign="center"
        borderBottom="2px solid black"
      >
        Members
      </Typography>
      <List className={classes.list}>
        {users?.map((user, i) => (
          <Box key={i}>
            <ListItem button sx={{ marginTop: "8px" }}>
              <ListItemAvatar>
                <Avatar sx={{ backgroundColor: "#191A19" }}>
                  <Typography textTransform="capitalize" variant="h5">
                    {user.userName.charAt(0)}
                  </Typography>
                </Avatar>
              </ListItemAvatar>
              <ListItemText
                primary={
                  <Typography variant="h5" color="black">
                    {user.userName}
                  </Typography>
                }
              />
            </ListItem>
            <Divider color="black" />
          </Box>
        ))}
      </List>
    </>
  );
};

export default UsersList;
