import { Drawer, List } from "@material-ui/core";
import React from 'react';
import classes from './Drawer.module.css'

const DrawerComponent: React.FC<any> = (props: any) => {
  return (
    <Drawer open={props.isOpen} onClose={props.onClick}>
      <List className={classes.List}>
        {props.children}
      </List>
    </Drawer>
  );
};

export default DrawerComponent;
