import React from "react";
import { Box, Typography, Link, Stack } from "@mui/material";
import MyLocationIcon from "@mui/icons-material/MyLocation";
import { useStyles } from "./messageDisplay";

const MessagesDisplay = ({ name, messages }) => {
  const classes = useStyles();
  let trimmedName = name.trim().toLowerCase();
  return (
    <Box className={classes.wrapper}>
      {messages?.map((message, index) =>
        message.name === trimmedName ? (
          <Box key={index} className={classes.rightMessageContainer}>
            <Box
              className={classes.rightMessageBox}
              justifyContent="end"
              justifySelf="end"
            >
              <Typography variant="body2" fontWeight={500}>
                {message.name}
              </Typography>
              <Stack direction="row" spacing={1} alignItems="end">
                <Typography variant="subtitle1">
                  {message.text}
                  {message.url && (
                    <Link
                      href={message.url}
                      target="_blank"
                      rel="noopener"
                      color="inherit"
                      underline="hover"
                    >
                      <Box display="flex">
                        <MyLocationIcon />
                        <Typography ml={1}>My location</Typography>
                      </Box>
                    </Link>
                  )}
                </Typography>
                <Typography variant="caption" fontWeight={500}>
                  {message.time}
                </Typography>
              </Stack>
            </Box>
          </Box>
        ) : (
          <Box
            key={index}
            className={
              message.name === "admin"
                ? classes.adminContainer
                : classes.leftMessageContainer
            }
          >
            <Box
              className={
                message.name === "admin"
                  ? classes.adminMessageBox
                  : classes.leftMessageBox
              }
            >
              <Typography variant="body2" fontWeight={500}>
                {message.name}
              </Typography>
              <Stack direction="row" spacing={1} alignItems="end">
                <Typography
                  variant="subtitle1"
                >
                  {message.text}
                  {message.url && (
                    <Link
                      href={message.url}
                      target="_blank"
                      rel="noopener"
                      color="inherit"
                      underline="hover"
                    >
                      <Box display="flex">
                        <MyLocationIcon />
                        <Typography ml={1}>My location</Typography>
                      </Box>
                    </Link>
                  )}
                </Typography>
                <Typography variant="caption" fontWeight={500}>
                  {message.time}
                </Typography>
              </Stack>
            </Box>
          </Box>
        )
      )}
    </Box>
  );
};

export default MessagesDisplay;
