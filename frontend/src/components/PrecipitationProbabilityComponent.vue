<template>
    <p>Precipitation Probability: {{ probability }}%</p>
  </template>
  
  <script>
  export default {
    props: {
      probability: Number,
    },
  };
  </script>
  