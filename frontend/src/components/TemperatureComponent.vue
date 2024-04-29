<template>
    <p>Temperature: {{ temperature }}°C</p>
  </template>
  
  <script>
  export default {
    props: {
      temperature: Number,
    },
  };
  </script>
  