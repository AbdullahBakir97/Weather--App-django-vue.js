<template>
    <p>Pressure: {{ pressure }} hPa</p>
  </template>
  
  <script>
  export default {
    props: {
      pressure: Number,
    },
  };
  </script>
  