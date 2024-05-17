<template>
  <v-card class="mx-auto mt-5" max-width="600" loading="loading" text="Fetching weather data..." variant="tonal">
    <div>
      <input class="full-width-input" type="text" v-model="city" @keyup.enter="fetchWeatherData" placeholder="Enter city name...">
      <!-- Add other UI elements here -->
    </div>
    <v-card-item :title="location.name">
      <template v-slot:subtitle>
        <v-icon
          class="me-1 pb-1"
          color="error"
          icon="mdi-alert"
          size="18"
        ></v-icon>
        Extreme Weather Alert
      </template>
    </v-card-item>

    <v-card-text class="py-0">
      <v-row align="center" no-gutters>
        <v-col class="text-h2" cols="6">{{ currentWeather.temperature }}&deg;C</v-col>
        <v-col class="text-right" cols="6">
          <v-icon color="error" :icon="currentWeather.icon" size="88"></v-icon>
        </v-col>
      </v-row>
    </v-card-text>

    <div class="d-flex py-3 justify-space-between">
      <v-list-item density="compact" prepend-icon="mdi-weather-windy">
        <v-list-item-subtitle>{{ currentWeather.windSpeed }} km/h</v-list-item-subtitle>
      </v-list-item>

      <v-list-item density="compact" prepend-icon="mdi-weather-pouring">
        <v-list-item-subtitle>{{ currentWeather.precipitationProbability }}%</v-list-item-subtitle>
      </v-list-item>
    </div>

    <v-expand-transition>
      <div v-if="expand">
        <div class="py-2">
          <v-slider
            v-model="time"
            :max="6"
            :step="1"
            :ticks="labels"
            class="mx-4"
            color="green"
            density="compact"
            show-ticks="always"
            thumb-size="10"
            hide-details
          ></v-slider>
        </div>

        <v-list class="bg-transparent">
          <v-list-item
            v-for="(item, index) in forecast"
            :key="index"
            :append-icon="item.icon"
            :subtitle="item.temp"
            :title="item.day"
          >
          </v-list-item>
        </v-list>
      </div>
    </v-expand-transition>

    <v-divider></v-divider>

    <v-card-actions>
      <v-btn
        :text="!expand ? 'Show Report' : 'Hide Report'"
        @click="expand = !expand"
      ></v-btn>
    </v-card-actions>

    <!-- Full Report Section -->
    <v-expand-transition>
      <v-card v-if="expand">
        <v-card-title>
          Full Report
        </v-card-title>
        <v-card-text>
          <v-row v-if="currentWeather">
            <v-col cols="6">
              <v-icon color="primary">mdi-thermometer</v-icon>
              <span class="text-h5">{{ currentWeather.temperature }}&deg;C</span>
            </v-col>
            <v-col cols="6">
              <v-icon color="primary">mdi-weather-sunny</v-icon>
              <span class="text-h5">{{ currentWeather.temperatureApparent }}&deg;C</span>
            </v-col>
          </v-row>
          <v-row v-if="currentWeather">
            <v-col cols="6">
              <v-icon color="primary">mdi-water-percent</v-icon>
              <span class="text-h5">{{ currentWeather.humidity }}%</span>
            </v-col>
            <v-col cols="6">
              <v-icon color="primary">mdi-weather-windy</v-icon>
              <span class="text-h5">{{ currentWeather.windSpeed }} km/h</span>
            </v-col>
          </v-row>
          <v-row v-if="currentWeather">
            <v-col cols="6">
              <v-icon color="primary">mdi-cloud</v-icon>
              <span class="text-h5">{{ currentWeather.cloudCover }}%</span>
            </v-col>
            <v-col cols="6">
              <v-icon color="primary">mdi-eye</v-icon>
              <span class="text-h5">{{ currentWeather.visibility }} km</span>
            </v-col>
          </v-row>
          <v-row v-if="currentWeather">
            <v-col cols="6">
              <v-icon color="primary">mdi-weather-fog</v-icon>
              <span class="text-h5">{{ currentWeather.cloudBase }} m</span>
            </v-col>
            <v-col cols="6">
              <v-icon color="primary">mdi-weather-hazy</v-icon>
              <span class="text-h5">{{ currentWeather.cloudCeiling }} m</span>
            </v-col>
          </v-row>
        </v-card-text>
      </v-card>
    </v-expand-transition>
  </v-card>
</template>

<script>
import axios from 'axios';
import moment from 'moment';

export default {
  props: {
    location: Object,
  },
  data() {
    return {
      city: '',
      loading: false, // Add loading state
      currentWeather: {},
      labels: {
        0: moment().format('ddd'), // Current day
        1: moment().add(1, 'days').format('ddd'), // Next day
        2: moment().add(2, 'days').format('ddd'), // Next next day
        3: moment().add(3, 'days').format('ddd'),
        4: moment().add(4, 'days').format('ddd'),
        5: moment().add(5, 'days').format('ddd'),
        6: moment().add(6, 'days').format('ddd'),
      },
      expand: false,
      time: 0,
      forecast: [],
    };
  },
  mounted() {
    if (this.location) {
      this.fetchWeather(0); // Fetch weather for the current day initially
    }
  },
  watch: {
    time(newTime) {
      this.fetchWeather(newTime); // Fetch weather for the selected day
    },
  },
  methods: {
    async fetchWeather(dayIndex) {
      try {
        this.loading = true; // Set loading state to true

        const api_key = '';
        const location = this.city;
        const url = `https://api.tomorrow.io/v4/weather/realtime?location=${location}&apikey=${api_key}&day=${dayIndex}`;

		    const response = await axios.get(url);
		    const weatherData = response.data.data;
		
		    this.currentWeather = {
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
		      rainIntensity: weatherData.values.rainIntensity,
		      sleetIntensity: weatherData.values.sleetIntensity,
		      snowIntensity: weatherData.values.snowIntensity,
		      freezingRainIntensity: weatherData.values.freezingRainIntensity,
		      uvIndex: weatherData.values.uvIndex,
		      uvHealthConcern: weatherData.values.uvHealthConcern,
		      weatherCode: weatherData.values.weatherCode,
		      visibility: weatherData.values.visibility,
		    };
		
		    this.updateForecast(dayIndex);
		  } catch (error) {
		    console.error('Error fetching weather data:', error);
		  } finally {
		    this.loading = false;
		  }
		},
		updateForecast(dayIndex) {
		  if (!this.currentWeather.forecast) return;
		
		  this.forecast = this.currentWeather.forecast[dayIndex].hourly.map(hour => ({
		    time: moment.unix(hour.observation_time).format('h A'),
		    icon: this.getWeatherIcon(hour.weather_code),
		    temp: `${hour.temperature}\xB0`,
		  }));
		},
		getWeatherIcon(weatherCode) {
		  return 'mdi-' + weatherCode;
		},
		fetchWeatherData() {
		  this.fetchWeather(this.time);
		},
  },
};
</script>

<style scoped>
  .full-width-input {
    padding: 5px;
    margin: 10px;
    width: 35%;
  }

</style>
