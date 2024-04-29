<template>
    <p>Cloud Ceiling: {{ cloudCeiling }} meters</p>
  </template>
  
  <script>
  export default {
    props: {
      cloudCeiling: Number,
    },
  };
  </script>
  