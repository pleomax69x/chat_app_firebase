import * as React from "react";
import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { NavLink } from "react-router-dom";
import { LOGIN_ROUTE } from "../utils/consts";

const Navbar = () => {
  const user = true;
  return (
    <AppBar color={"secondary"} position="static">
      <Toolbar variant="dense">
        <Grid container justifyContent={"flex-end"}>
          {user ? (
            <Button variant={"outlined"}>Log Out</Button>
          ) : (
            <NavLink to={LOGIN_ROUTE}>
              <Button variant={"outlined"}>Login</Button>
            </NavLink>
          )}
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
