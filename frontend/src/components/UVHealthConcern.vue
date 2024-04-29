<template>
  <p>UV Health Concern: {{ uvHealth }}</p>
</template>

<script>
export default {
  props: {
    uvHealthConcern: {
      type: [String, Number],
      default: ""
    },
  },
  data() {
    return {
      uvHealth: ""
    };
  },
  created() {
    // Assign the prop value to the local data property
    this.uvHealth = String(this.uvHealthConcern);
  }
};
</script>
