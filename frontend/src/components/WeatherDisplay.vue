<template>
  <div>
    <h2>Current Weather</h2>
    <div v-if="weather">
      <p>Temperature: {{ weather.temperature_2m }}</p>
      <p>Weather Code: {{ weather.weather_code }}</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  data() {
    return {
      weather: null,
    }
  },
  mounted() {
    this.fetchWeather();
  },
  methods: {
  fetchWeather() {
    const api_key = 'vUbDFPiVGydzGkTtrmsgoNHPkm48T7Fh';
    const location = 'berlin'; // Or use dynamic location from your application
    const url = `https://api.tomorrow.io/v4/weather/realtime?location=${location}&apikey=${api_key}`;

    axios.get(url)
      .then(response => {
        const weatherData = response.data.data;
        const locationData = response.data.location;
        console.log('Weather data:', weatherData);
        console.log('Location:', locationData);
        
        // Access weather values
        const temperature = weatherData.values.temperature;
        const cloudCover = weatherData.values.cloudCover;
        const dewPoint = weatherData.values.dewPoint;
        // Add more weather properties as needed
        
        // Access location information
        const cityName = locationData.name;

        // Update component data with fetched weather and location information
        this.temperature = temperature;
        this.cloudCover = cloudCover;
        this.dewPoint = dewPoint;
        this.cityName = cityName;
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
      });
    },
  },
}
</script>
