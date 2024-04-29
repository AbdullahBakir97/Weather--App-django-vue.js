<template>
    <v-card class="mx-auto" max-width="500">
      <!-- Card header -->
      <v-card-title>
        <span class="headline">Florida</span>
        <v-icon class="ml-2" color="error" size="24">mdi-alert</v-icon>
        <span class="subtitle-2 ml-1">Extreme Weather Alert</span>
      </v-card-title>
  
      <!-- Weather details -->
      <v-card-text>
        <v-row align="center">
          <!-- Temperature -->
          <v-col cols="6">
            <div class="d-flex align-center">
              <v-icon color="primary" size="36">mdi-thermometer</v-icon>
              <span class="headline ml-2">64&deg;F</span>
            </div>
          </v-col>
  
          <!-- Weather icon -->
          <v-col cols="6">
            <v-icon color="primary" size="64">mdi-weather-hurricane</v-icon>
          </v-col>
        </v-row>
      </v-card-text>
  
      <!-- Additional weather details -->
      <v-divider></v-divider>
      <v-card-actions>
        <v-row justify="space-between" align="center">
          <!-- Wind speed -->
          <v-col cols="4">
            <v-icon color="primary" size="24">mdi-weather-windy</v-icon>
            <span class="subtitle-2 ml-1">123 km/h</span>
          </v-col>
  
          <!-- Humidity -->
          <v-col cols="4">
            <v-icon color="primary" size="24">mdi-weather-pouring</v-icon>
            <span class="subtitle-2 ml-1">48%</span>
          </v-col>
  
          <!-- Expand button -->
          <v-col cols="4">
            <v-btn :text="!expand ? 'Full Report' : 'Hide Report'" @click="expand = !expand"></v-btn>
          </v-col>
        </v-row>
      </v-card-actions>
  
      <!-- Expanded content -->
      <v-expand-transition>
        <div v-if="expand">
          <!-- Slider for forecast time -->
          <v-slider v-model="time" :max="6" :step="1" :ticks="labels" color="primary" thumb-size="10" hide-details></v-slider>
  
          <!-- Forecast list -->
          <v-list>
            <v-list-item v-for="item in forecast" :key="item.day">
              <v-list-item-avatar>
                <v-icon :color="item.color">{{ item.icon }}</v-icon>
              </v-list-item-avatar>
  
              <v-list-item-content>
                <v-list-item-title>{{ item.day }}</v-list-item-title>
                <v-list-item-subtitle>{{ item.temp }}</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </div>
      </v-expand-transition>
    </v-card>
  </template>
  
  <script>
  export default {
    data() {
      return {
        labels: { 0: 'SU', 1: 'MO', 2: 'TU', 3: 'WED', 4: 'TH', 5: 'FR', 6: 'SA' },
        expand: false,
        time: 0,
        forecast: [
          { day: 'Tuesday', icon: 'mdi-white-balance-sunny', temp: '24°C / 12°C', color: 'orange' },
          { day: 'Wednesday', icon: 'mdi-white-balance-sunny', temp: '22°C / 14°C', color: 'orange' },
          { day: 'Thursday', icon: 'mdi-cloud', temp: '25°C / 15°C', color: 'blue' },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  /* Add any custom styling here */
  </style>
  