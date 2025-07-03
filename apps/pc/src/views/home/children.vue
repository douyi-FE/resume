<template>
  <div>
    <span>{{ label }}</span>
    <input v-model="inputVal" class="border-2 focus:border-blue-500  border-red-500 dark:border-blue-500" />
  </div>
</template>

<script setup>
import { ref } from "vue";
const props = defineProps({
  label: {
    type: String,
    required: true,
  },
});
const inputVal = ref("");
</script>
