<template>
    <p>Visibility: {{ visibility }} meters</p>
  </template>
  
  <script>
  export default {
    props: {
      visibility: Number,
    },
  };
  </script>
  