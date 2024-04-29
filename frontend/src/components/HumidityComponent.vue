<template>
    <p>Humidity: {{ humidity }}%</p>
  </template>
  
  <script>
  export default {
    props: {
      humidity: Number,
    },
  };
  </script>