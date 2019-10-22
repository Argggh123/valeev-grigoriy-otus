import { AppBar, Icon, IconButton, Toolbar, Typography } from "@material-ui/core";
import React from "react";
import classes from './Header.module.css'

const Header:React.FC<any> = (props) => {
  return (
      <div className={classes.Header}>
        <AppBar position={"static"} className={classes.AppBar}>
          <Toolbar>
            <IconButton onClick={props.onClick} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
              <Icon>
                menu
              </Icon>
            </IconButton>
            <Typography variant={'h6'} className={classes.Title}>
              Приложение погоды
            </Typography>
          </Toolbar>
        </AppBar>
      </div>
  );
};

export default Header;
