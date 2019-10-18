import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import classes from './Header.module.css'

const Header = () => {
  return (
      <div className={classes.Header}>
        <AppBar position={"static"} className={classes.AppBar}>
          <Toolbar>
            <Typography variant={'h6'} className={classes.Title}>
              Приложение погоды
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
  );
};

export default Header;
