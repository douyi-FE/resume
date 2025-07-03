<template>
  <div>
    <h1>{{ content }}</h1>
    <h2>{{ title }}</h2>
  </div>
</template>

<script setup>
defineProps({
  content: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
});
</script>

<style scoped></style>