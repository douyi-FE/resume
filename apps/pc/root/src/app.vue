<template>
    <h1>Hello World</h1>
</template>

<script setup lang="ts">
import { getBasicData } from '@/api/basic'

getBasicData().then(res => {
    console.log(res)
})
</script>