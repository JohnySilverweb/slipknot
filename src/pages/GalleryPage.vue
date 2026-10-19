<template>
  <div class="gifs-grid-container">
    <img v-for="gif in gifs" class="gif" :key="gif.id" :src="gif.url" />
  </div>
</template>

<script>
import gifs from '@/components/gifs.js'

export default {
  data() {
    return {
      gifs,
    }
  },
}
</script>

<style scoped>
.gifs-grid-container {
  display: grid;
  gap: 10px;
  background-color: black;
  grid-template-columns: repeat(4, 1fr);
  .gif {
    filter: grayscale(1) brightness(0.8);
    width: 100%;
    height: 353px;
    pointer-events: none;
  }
}
</style>
