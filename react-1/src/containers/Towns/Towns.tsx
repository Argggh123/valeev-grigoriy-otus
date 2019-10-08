import { Container, MenuItem, } from "@material-ui/core";
import React, { Component } from 'react';
import SelectComponent from "../../components/Select/SelectComponent";
import WeatherDetails from "../../components/WeatherDetails/WeatherDetails";
import { Weather } from "../../interfaces/weather.interface";

class Towns extends Component {

  state = {
    selectedValue: null,
    options: [
      {
        id: 1,
        name: 'Пермь',
        isFavorite: true,
        data: {
          weatherType: Weather.RAIN,
          wind: {
            speed: '15 м/с',
            direction: 'C/В',
          },
          temperature: 6,
          temperatureType: 'C'
        }
      },
      {
        id: 2,
        name: 'Москва',
        isFavorite: false,
        data: {
          weatherType: Weather.SUN,
          wind: {
            speed: '7 м/с',
            direction: 'Ю/В',
          },
          temperature: 18,
          temperatureType: 'C'
        }
      },
      {
        id: 3,
        name: 'Санкт-Петербург',
        isFavorite: false,
        data: {
          weatherType: Weather.FOG,
          wind: {
            speed: '17 м/с',
            direction: 'C/В',
          },
          temperature: 6,
          temperatureType: 'C'
        }
      },
      {
        id: 4,
        name: 'Владивосток',
        isFavorite: false,
        data: {
          weatherType: Weather.CLOUDY,
          wind: {
            speed: '10 м/с',
            direction: 'Ю/В',
          },
          temperature: 15,
          temperatureType: 'C'
        }
      },
    ]
  };

  changeOption(event: React.ChangeEvent<HTMLInputElement>) {
    this.setState({ selectedValue: event.target.value })
  }

  selectItems() {
    return this.state.options.map((item, index) => (
      <MenuItem value={item.id} key={`menu-${index}`}>
        {item.name}
      </MenuItem>
    ))
  }

  changeFavoriteStatus(id: number, event: React.ChangeEvent<HTMLInputElement>) {
    const options = this.state.options.concat();

    options.forEach(item => {
      if (item.id === id) {
        item.isFavorite = event.target.checked
      }
    });

    this.setState({ options })
  }

  getCityById() {
    const { options, selectedValue } = this.state;
    let selectedCity = null;
    options.forEach(city => {
      if (city.id === selectedValue) {
        selectedCity = <WeatherDetails
          data={city}
          changeFavoriteStatus={this.changeFavoriteStatus.bind(this, city.id)}
        />
      }
    });

    return selectedCity
  }


  render() {
    return (
      <Container maxWidth={"lg"}>
        <h1>Выберите город из списка</h1>
        <SelectComponent onChange={this.changeOption.bind(this)} value={this.state.selectedValue}>
          {this.selectItems()}
        </SelectComponent>
        {this.getCityById()}
      </Container>
    );
  }
}

export default Towns;
