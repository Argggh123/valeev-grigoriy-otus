import { Card, CardContent, CardMedia, Checkbox, FormControlLabel, Typography } from "@material-ui/core";
import { Favorite, FavoriteBorder } from "@material-ui/icons";
import React from 'react';
import { Weather } from "../../interfaces/weather.interface";
import classes from './WeatherDetails.module.css'
import sun from '../../static/images/sun.png'
import rain from '../../static/images/rain.jpg'
import fog from '../../static/images/fog.jpg'
import cloudy from '../../static/images/cloudy.png'

const WeatherDetails = (props: any) => {
  const { name, data, isFavorite } = props.data;
  const { changeFavoriteStatus } = props;

  const getWeatherBlock = (src: string, name: string) => (
    <CardMedia image={src} className={classes.CardMedia}>
      <div className={classes.CityName}>
        <Typography variant={'h2'} component={'h5'}>
          {name}
        </Typography>
        <FormControlLabel label={!isFavorite ? 'Добавить в избранное': 'Убрать из избранного'}
                          control={
                            <Checkbox
                              checked={isFavorite}
                              icon={<FavoriteBorder/>}
                              checkedIcon={<Favorite/>}
                              value={isFavorite}
                              onChange={changeFavoriteStatus}
                            />
                          }
        />
      </div>
    </CardMedia>
  );

  const getWeatherTypeImage = (weatherType: string) => {
    switch (weatherType) {
      case Weather.SUN: {
        return getWeatherBlock(sun, name)
      }
      case Weather.RAIN: {
        return getWeatherBlock(rain, name)
      }
      case Weather.FOG: {
        return getWeatherBlock(fog, name)
      }
      case Weather.CLOUDY: {
        return getWeatherBlock(cloudy, name)
      }
      default: {
        return getWeatherBlock('', name)
      }
    }
  };

  return (
    <Card className={classes.WeatherDetails}>
      {getWeatherTypeImage(data.weatherType)}
      <CardContent>
        <p>Ветер: {data.wind.direction} - {data.wind.speed}</p>
        <p>Температура воздуха: {data.temperature}º{data.temperatureType}</p>
      </CardContent>
    </Card>
  );
};

export default WeatherDetails;
