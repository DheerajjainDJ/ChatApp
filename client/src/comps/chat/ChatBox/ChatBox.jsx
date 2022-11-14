import React, { createRef, useEffect } from "react";
import { Box, Container, Grid } from "@mui/material";
import { useStyles } from "./chatBoxStyles";
import Utils from "./ChatUtils/Utils";
import MessagesDisplay from "./messagesDisplay/MessagesDisplay";
import UsersList from "./usersList/UsersList";

const ChatBox = ({ socket, name, messages, users }) => {
  const classes = useStyles();
  const scrolldiv = createRef();

  useEffect(() => {
    const scrollToBottom = (node) => {
      node.scrollTop = node.scrollHeight;
    };
    scrollToBottom(scrolldiv.current);
  });

  return (
    <Box className={classes.parent}>
      <Grid container justifyContent="center">
        <Grid item md={3} lg={3} className={classes.gridItemOne}>
          <Box mt={4}>
            <UsersList users={users} />
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={9} lg={9}>
          <Box className={classes.gridtwoparent}>
            <Container maxWidth="lg">
              <Box ref={scrolldiv} className={classes.gridTwoFirstChild}>
                <MessagesDisplay name={name} messages={messages} />
              </Box>
            </Container>
            <Box className={classes.gridTwoSecChild}>
              <Utils socket={socket} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default ChatBox;
