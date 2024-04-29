<template>
    <p>Cloud Base: {{ cloudBase }} meters</p>
  </template>
  
  <script>
  export default {
    props: {
      cloudBase: Number,
    },
  };
  </script>
  