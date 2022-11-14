import React, { useState } from "react";
import {
  Box,
  Button,
  InputAdornment,
  Paper,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Person, Groups } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useStyles } from "./homeStyles";

const Home = () => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [room, setRoom] = useState("");

  return (
    <Box className={classes.parent}>
      <Box className={classes.child}>
        <Paper className={classes.paper} variant="elevation" elevation={4}>
          <Stack spacing={5}>
            <Typography variant="h4">Join</Typography>
            <TextField
              variant="outlined"
              placeholder="Enter your name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Person fontSize="large" />
                  </InputAdornment>
                ),
              }}
            />
            <TextField
              variant="outlined"
              placeholder="Enter room name"
              required
              value={room}
              onChange={(e) => setRoom(e.target.value)}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <Groups fontSize="large" />
                  </InputAdornment>
                ),
              }}
            />
            <Link
              onClick={(e) => (!name || !room ? e.preventDefault() : null)}
              to={`/chat/${name}/${room}`}
              style={{ textDecoration: "none", color: "inherit" }}
            >
              <Button variant="contained" size="large" fullWidth>
                Enter chat room
              </Button>
            </Link>
          </Stack>
        </Paper>
      </Box>
    </Box>
  );
};

export default Home;
