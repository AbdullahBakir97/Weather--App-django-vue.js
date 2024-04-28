<template>
  <v-card class="mx-auto" max-width="400">
    <v-card-title>
      Weather in {{ location.name }}
    </v-card-title>
    <v-card-text>
      <p>Time: {{ weatherData.time }}</p>
      <Temperature :temperature="weatherData.temperature" />
      <ApparentTemperature :apparentTemperature="weatherData.temperatureApparent" />
      <Humidity :humidity="weatherData.humidity" />
      <Wind :windData="windData" />
      <CloudCover :cloudCover="weatherData.cloudCover" />
      <CloudBase :cloudBase="weatherData.cloudBase" />
      <CloudCeiling :cloudCeiling="weatherData.cloudCeiling" />
      <DewPoint :dewPoint="weatherData.dewPoint" />
      <PrecipitationProbability :probability="weatherData.precipitationProbability" />
      <Pressure :pressure="weatherData.pressureSurfaceLevel" />
      <Visibility :visibility="weatherData.visibility" />
      <UVIndex :uvIndex="weatherData.uvIndex" />
      <UVHealthConcern :uvHealthConcern="weatherData.uvHealthConcern" />
      <WeatherCode :weatherCode="weatherData.weatherCode" />
    </v-card-text>
  </v-card>
</template>

<script>
import axios from 'axios';
import Temperature from './Temperature.vue';
import ApparentTemperature from './ApparentTemperature.vue';
import Humidity from './Humidity.vue';
import Wind from './Wind.vue';
import CloudCover from './CloudCover.vue';
import CloudBase from './CloudBase.vue';
import CloudCeiling from './CloudCeiling.vue';
import DewPoint from './DewPoint.vue';
import PrecipitationProbability from './PrecipitationProbability.vue';
import Pressure from './Pressure.vue';
import Visibility from './Visibility.vue';
import UVIndex from './UVIndex.vue';
import UVHealthConcern from './UVHealthConcern.vue';
import WeatherCode from './WeatherCode.vue';

export default {
  components: {
    Temperature,
    ApparentTemperature,
    Humidity,
    Wind,
    CloudCover,
    CloudBase,
    CloudCeiling,
    DewPoint,
    PrecipitationProbability,
    Pressure,
    Visibility,
    UVIndex,
    UVHealthConcern,
    WeatherCode,
  },
  props: {
    location: Object,
  },
  data() {
    return {
      weatherData: {},
    };
  },
  computed: {
    windData() {
      return {
        speed: this.weatherData.windSpeed,
        direction: this.weatherData.windDirection,
        gust: this.weatherData.windGust,
      };
    },
  },
  mounted() {
    this.fetchWeather();
  },
  methods: {
    async fetchWeather() {
      try {
        const api_key = 'vUbDFPiVGydzGkTtrmsgoNHPkm48T7Fh';
        const location = 'berlin'; // Or use dynamic location from your application
        const url = `https://api.tomorrow.io/v4/weather/realtime?location=${location}&apikey=${api_key}`;

        const response = await axios.get(url);
        const weatherData = response.data.data;
        const locationData = response.data.location;
        
        this.weatherData = {
          time: new Date().toLocaleTimeString(), // Update with actual time data
          temperature: weatherData.values.temperature,
          temperatureApparent: weatherData.values.temperatureApparent,
          humidity: weatherData.values.humidity,
          windSpeed: weatherData.values.windSpeed,
          windDirection: weatherData.values.windDirection,
          windGust: weatherData.values.windGust,
          cloudCover: weatherData.values.cloudCover,
          cloudBase: weatherData.values.cloudBase,
          cloudCeiling: weatherData.values.cloudCeiling,
          dewPoint: weatherData.values.dewPoint,
          precipitationProbability: weatherData.values.precipitationProbability,
          pressureSurfaceLevel: weatherData.values.pressureSurfaceLevel,
          visibility: weatherData.values.visibility,
          uvIndex: weatherData.values.uvIndex,
          uvHealthConcern: weatherData.values.uvHealthConcern,
          weatherCode: weatherData.values.weatherCode,
        };
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    },
  },
};
</script>
