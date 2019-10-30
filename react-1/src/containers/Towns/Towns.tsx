import { Container, } from "@material-ui/core";
import React, { Component } from 'react';
import { connect } from "react-redux";
import Select from "react-select";

class Towns extends Component<any> {

  test(option: any) {
    console.log(option);
    let { value } = option;
    this.props.history.push(`/town/${value}/`);
  };

  render() {
    const options = this.props.options.map((item: any) => ({
      label: item.name,
      value: item.id
    }));
    return (
      <Container maxWidth={"lg"}>
        <h1>Выберите город из списка</h1>
        <Select options={options}
                onChange={(value) => {
                  this.test(value)
                }}
        />
      </Container>
    );
  }
}

const mapStateToProps = (state: any) => ({
  ...state.towns
});

export default connect(
  mapStateToProps,
)(Towns)
