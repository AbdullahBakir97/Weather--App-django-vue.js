<template>
  <div id="app">
    <WeatherDisplay />
  </div>
</template>

<script>
import WeatherDisplay from './components/WeatherDisplay.vue';

export default {
  name: 'App',
  components: {
    WeatherDisplay,
  },
}
</script>
