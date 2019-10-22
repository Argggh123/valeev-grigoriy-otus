import { Weather } from "../../interfaces/weather.interface";
import { ActionTypes } from "../actions/actionTypes";

const initialState = {
  selectedValue: null,
  options: [
    {
      id: 1,
      name: 'Пермь',
      isFavorite: true,
      currentWeather: {
        weatherType: Weather.RAIN,
        wind: {
          speed: '15 м/с',
          direction: 'C/В',
        },
        temperature: 6,
        temperatureType: 'C'
      },
      data: [
        {
          date: 'Завтра',
          weatherType: Weather.FOG,
          wind: {
            speed: '10 м/с',
            direction: 'C/В',
          },
          temperature: 3,
          temperatureType: 'C'
        },
        {
          date: 'Послезавтра',
          weatherType: Weather.FOG,
          wind: {
            speed: '15 м/с',
            direction: 'C/В',
          },
          temperature: 6,
          temperatureType: 'C'
        },]
    },
    {
      id: 2,
      name: 'Москва',
      isFavorite: false,
      currentWeather: {
        weatherType: Weather.SUN,
        wind: {
          speed: '7 м/с',
          direction: 'Ю/В',
        },
        temperature: 18,
        temperatureType: 'C'
      },
      data: [
        {
          date: 'Завтра',
          weatherType: Weather.CLOUDY,
          wind: {
            speed: '7 м/с',
            direction: 'Ю/В',
          },
          temperature: 18,
          temperatureType: 'C'
        },
        {
          date: 'Послезавтра',
          weatherType: Weather.RAIN,
          wind: {
            speed: '7 м/с',
            direction: 'Ю/В',
          },
          temperature: 18,
          temperatureType: 'C'
        },]
    },
    {
      id: 3,
      name: 'Санкт-Петербург',
      isFavorite: false,
      currentWeather: {
        weatherType: Weather.FOG,
        wind: {
          speed: '17 м/с',
          direction: 'C/В',
        },
        temperature: 6,
        temperatureType: 'C'
      },
      data: [
        {
          date: 'Завтра',
          weatherType: Weather.RAIN,
          wind: {
            speed: '17 м/с',
            direction: 'C/В',
          },
          temperature: 6,
          temperatureType: 'C'
        },
        {
          date: 'Послезавтра',
          weatherType: Weather.FOG,
          wind: {
            speed: '17 м/с',
            direction: 'C/В',
          },
          temperature: 6,
          temperatureType: 'C'
        },
      ]
    },
    {
      id: 4,
      name: 'Владивосток',
      isFavorite: false,
      currentWeather: {
        weatherType: Weather.CLOUDY,
        wind: {
          speed: '10 м/с',
          direction: 'Ю/В',
        },
        temperature: 15,
        temperatureType: 'C'
      },
      data: [
        {
          date: 'Завта',
          weatherType: Weather.CLOUDY,
          wind: {
            speed: '10 м/с',
            direction: 'Ю/В',
          },
          temperature: 15,
          temperatureType: 'C'
        },
        {
          date: 'Послезавтра',
          weatherType: Weather.SUN,
          wind: {
            speed: '10 м/с',
            direction: 'Ю/В',
          },
          temperature: 15,
          temperatureType: 'C'
        }]
    },
  ]
};

export default function towns(state = initialState, action: any) {
  switch (action.type) {
    case ActionTypes.FAV: {
      const options = state.options.concat();
      options.forEach(item => {
        if (item.id === action.payload) {
          item.isFavorite = !item.isFavorite;
        }
      });
      return {
        ...state,
        options
      }
    }
    case ActionTypes.CHANGE_CITY: {
      return {
        ...state,
        selectedValue: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
