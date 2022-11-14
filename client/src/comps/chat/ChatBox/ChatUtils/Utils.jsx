import React, { useState } from "react";
import { Box, Stack, Tooltip, Fab } from "@mui/material";
import { Send, LocationOn } from "@mui/icons-material";
import InputEmoji from "react-input-emoji";

const Utils = ({ socket }) => {
  const [message, setMessage] = useState("");

  const sendMessage = () => {
    socket.emit("sendMessage", message);
    setMessage("");
  };

  const sendLocation = () => {
    if (!navigator.geolocation) {
      return alert("Sorry,your browser doesn't support geolocation services");
    }
    navigator.geolocation.getCurrentPosition((position) =>
      socket.emit("sendLocation", {
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      })
    );
  };
  return (
    <Box sx={{ padding: { xs: "0px 10px 0px 10px", sm: "0px 40px 0 40px" } }}>
      <Stack direction="row" spacing={1} alignItems="center">
        <InputEmoji
          value={message}
          onChange={setMessage}
          cleanOnEnter
          onEnter={sendMessage}
          placeholder="Type a message"
          borderColor="black"
          fontSize="18px"
        />
        <Tooltip title="Send message" arrow>
          <Fab color="inherit" size="medium" onClick={sendMessage}>
            <Send fontSize="large" sx={{ color: "black" }} />
          </Fab>
        </Tooltip>
        <Tooltip title="Send location" arrow>
          <Fab color="inherit" size="medium" onClick={sendLocation}>
            <LocationOn fontSize="large" sx={{ color: "black" }} />
          </Fab>
        </Tooltip>
      </Stack>
    </Box>
  );
};

export default Utils;
