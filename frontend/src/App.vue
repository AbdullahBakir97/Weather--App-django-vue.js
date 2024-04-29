<template>
  <div id="app">
    <WeatherDisplay :location="location" />
  </div>
</template>

<script>
import WeatherDisplay from './components/WeatherDisplay.vue';

export default {
  name: 'App',
  components: {
    WeatherDisplay,
  },
  data() {
    return {
      location: {
        name: '', // Replace with actual location data
        // Other location properties
      },
    };
  },
};
</script>
