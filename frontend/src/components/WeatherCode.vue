<template>
    <p>Weather Code: {{ weatherCode }}</p>
  </template>
  
  <script>
  export default {
    props: {
      weatherCode: Number,
    },
  };
  </script>
  