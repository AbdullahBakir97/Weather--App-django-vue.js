<template>
    <p>Apparent Temperature: {{ apparentTemperature }}°C</p>
  </template>
  
  <script>
  export default {
    props: {
      apparentTemperature: Number,
    },
  };
  </script>