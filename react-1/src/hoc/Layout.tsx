import { Icon, ListItem, ListItemIcon, ListItemText } from "@material-ui/core";
import React, { Component, ReactNodeArray } from 'react';
import { Link, Switch, Route } from "react-router-dom";
import DrawerComponent from "../components/Drawer/DrawerComponent";
import Header from "../components/Header/Header";
import Favorites from "../containers/Favorites/Favorites";
import Town from "../containers/Town/Town";
import Towns from "../containers/Towns/Towns";

class Layout extends Component {

  state = {
    drawerOpen: false,
    pages: [
      {
        name: 'Главная',
        iconName: 'home',
        path: '/'
      },
      {
        name: 'Избранное',
        iconName: 'favorite',
        path: '/favorites'
      }
    ]
  };

  private toggleDrawer() {
    this.setState({ drawerOpen: !this.state.drawerOpen })
  }


  private renderDrawerMenu(): ReactNodeArray {
    const { pages } = this.state;

    return pages.map((item, key) => (
      <ListItem button component={Link} to={item.path} key={`page-${key}`} onClick={this.toggleDrawer.bind(this)}>
        <ListItemIcon>
          <Icon>
            {item.iconName}
          </Icon>
        </ListItemIcon>
        <ListItemText primary={item.name}/>
      </ListItem>
    ));
  }

  render() {
    return (
      <div>
        <Header onClick={this.toggleDrawer.bind(this)}/>
        <DrawerComponent isOpen={this.state.drawerOpen} onClick={this.toggleDrawer.bind(this)}>
          {this.renderDrawerMenu()}
        </DrawerComponent>
        <Switch>
          <Route exact path={'/'} component={Towns}/>
          <Route exact path={'/favorites'} component={Favorites}/>
          <Route exact path={'/town/:id'} component={Town}/>
        </Switch>
      </div>
    );
  }
}

export default Layout;
