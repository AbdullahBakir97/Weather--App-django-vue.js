<template>
    <div>
      <p>Wind Speed: {{ windData.speed }} m/s</p>
      <p>Wind Direction: {{ windData.direction }}°</p>
      <p>Wind Gust: {{ windData.gust }} m/s</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      windData: Object,
    },
  };
  </script>
  