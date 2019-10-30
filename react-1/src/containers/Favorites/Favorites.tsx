import { Container } from "@material-ui/core";
import React, { Component } from 'react';
import { connect } from "react-redux";
import { Link } from "react-router-dom";

class Favorites extends Component<any> {

  getFavoriteTowns(): any[] {
    return this.props.options
      .filter((item: any) => item.isFavorite === true)
      .map((item: any, key: number) => (
      <li>
        <Link to={`/town/${item.id}`} key={`favorite-${key}`}>{item.name}</Link>
      </li>
    ));
  }

  render() {
    return (
      <Container maxWidth={'lg'}>
        <h1>Favorites</h1>
        <ul>
        {this.getFavoriteTowns()}
        </ul>
      </Container>
    );
  }
}

const mapStateToProps = (state: any) =>({
  ...state.towns
});

export default connect(mapStateToProps)(Favorites);
