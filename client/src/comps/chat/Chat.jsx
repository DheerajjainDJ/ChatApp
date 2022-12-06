import React, { useState, useEffect } from "react";
import { Box } from "@mui/material";
import { useParams, useNavigate } from "react-router-dom";
import io from "socket.io-client";
import { useStyles } from "./chatStyles";
import Header from "./Header/Header";
import ChatBox from "./ChatBox/ChatBox";

let ENDPOINT = "https://lets-chat-react-app.up.railway.app/";
let socket;
const Chat = () => {
  const { name, room } = useParams();
  const navigate = useNavigate();
  const [messages, setMessages] = useState([]);
  const [users, setUsers] = useState([]);
  const classes = useStyles();

  useEffect(() => {
    socket = io(ENDPOINT, {
      transports: ["websocket", "polling", "flashsocket"],
    });

    socket.emit("join", { name, room }, (error) => {
      if (error) {
        window.alert(error);
        navigate("/");
      }
    });
    return () => {
      socket.off();
    };
  }, [ENDPOINT, name, room]);

  useEffect(() => {
    socket.on("message", (message) => {
      setMessages((messages) => [...messages, message]);
    });

    socket.on("roomData", ({ users }) => {
      setUsers(users);
    });
  }, []);

  return (
    <Box className={classes.parentBox}>
      <Header room={room} users={users} />
      <ChatBox socket={socket} name={name} messages={messages} users={users} />
    </Box>
  );
};

export default Chat;
