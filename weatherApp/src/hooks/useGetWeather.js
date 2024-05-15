import { useState, useEffect } from 'react';
import * as Location from 'expo-location';

export const UseGetWeather = () => {

  const WEATHER_API_KEY = '76b72827244bdf30c1a13fb1f3c03e48'

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [weather, setWeather] = useState([]);
  const [lat, setLat] = useState(0);
  const [lon, setLon] = useState(0);

  const FetchWeatherData = async () => {
    try {
      const res = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}`);
      const data = await res.json();
      setWeather(data);
    } catch (error) {
      console.log(error);
      setError('Could not fetch weather');
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setError('Permission to access location was denied');
        return;
      }
      let location = await Location.getCurrentPositionAsync({});
      setLat(location.coords.latitude);
      setLon(location.coords.longitude);
      await FetchWeatherData();
    })()
  }, [lat, lon])
  return [loading, error, weather];
}