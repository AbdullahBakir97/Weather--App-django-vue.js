<template>
    <p>UV Index: {{ uvIndex }}</p>
  </template>
  
  <script>
  export default {
    props: {
      uvIndex: Number,
    },
  };
  </script>
  