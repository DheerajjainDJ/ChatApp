import React, { useState } from "react";
import {
  AppBar,
  Box,
  Container,
  Toolbar,
  Tooltip,
  Menu,
  Fab,
  Typography,
} from "@mui/material";
import { Groups, Logout } from "@mui/icons-material";
import { Link } from "react-router-dom";
import UsersList from "../ChatBox/usersList/UsersList";

const Header = ({ room, users }) => {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Box>
      <AppBar sx={{ boxShadow: "none", backgroundColor: "lightgray" }}>
        <Container maxWidth="lg">
          <Toolbar sx={{ height: "70px" }}>
            <Groups fontSize="large" sx={{ color: "black" }} />
            <Typography
              variant="h5"
              sx={{ marginLeft: { xs: "10px", md: "25px" } }}
              flexGrow={1}
              color="black"
            >
              {room}
            </Typography>
            <Box sx={{ display: { xs: "block", md: "none" } }}>
              <Fab
                variant="extended"
                onClick={handleClick}
                sx={{ color: "black", marginRight: "8px" }}
              >
                Members
              </Fab>
              <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
              >
                <UsersList users={users} />
              </Menu>
            </Box>
            <Tooltip title="Leave room" arrow>
              <Link to="/" style={{ color: "inherit" }}>
                <Fab color="inherit" size="medium">
                  <Logout fontSize="medium" sx={{ color: "black" }} />
                </Fab>
              </Link>
            </Tooltip>
          </Toolbar>
        </Container>
      </AppBar>
    </Box>
  );
};

export default Header;
