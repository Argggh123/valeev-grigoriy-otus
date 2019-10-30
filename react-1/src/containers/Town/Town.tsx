import { Container, ExpansionPanel, ExpansionPanelDetails, ExpansionPanelSummary, Typography } from "@material-ui/core";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import React, { Component } from 'react';
import { connect } from "react-redux";
import WeatherDetails from "../../components/WeatherDetails/WeatherDetails";
import { changeFavorite } from "../../redux/actions/actions";

class Town extends Component<any> {
  getCityById() {
    const { options, match } = this.props;
    let selectedCity = null;
    options.forEach((city: any) => {
      if (city.id === parseInt(match.params.id, 10)) {
        selectedCity = <WeatherDetails
          data={city}
          weather={city.currentWeather}
          changeFavoriteStatus={this.props.changeFavorite.bind(this, city.id)}
        />
      }
    });
    return selectedCity
  }

  getNextDaysWeather() {
    const { options, match } = this.props;

    return options.map((city: any) => {
      if (city.id === parseInt(match.params.id, 10)) {
        return city.data.map((item: any, index: number) =>
          (
            <ExpansionPanel key={`ExpansionPanel-${index}`}>
              <ExpansionPanelSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls="panel1a-content"
                id="panel1a-header"
              >
                <Typography >{item.date}</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails>
                <WeatherDetails
                data={city}
                weather={item}
                changeFavoriteStatus={this.props.changeFavorite.bind(this, city.id)}
                />
              </ExpansionPanelDetails>
            </ExpansionPanel>
          )
        )
      }
    })
  }

  render() {
    return (
      <Container maxWidth={'lg'}>
        {this.getCityById()}

        <h2>Погода на несколько дней</h2>

        {this.getNextDaysWeather()}
        <br/>
      </Container>
    );
  }
}
const mapStateToProps = (state: any) => ({
  options: [...state.towns.options],
});

const mapDispatchToProps = (dispatch: any) => ({
  changeFavorite: (id: number) => dispatch(changeFavorite(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Town);
