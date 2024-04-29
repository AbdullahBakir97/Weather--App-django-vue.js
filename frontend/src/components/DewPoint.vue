<template>
    <p>Dew Point: {{ dewPoint }}°C</p>
  </template>
  
  <script>
  export default {
    props: {
      dewPoint: Number,
    },
  };
  </script>
  