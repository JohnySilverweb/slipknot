<template>
  <div class="gifs-grid-container">
    <img v-for="gif in gifs" class="gif" :key="gif.id" :src="gif.url" />
  </div>
</template>

<script>
import gifs from '@/lists/gifs.js'

export default {
  data() {
    return {
      gifs,
    }
  },

  mounted() {
    this.io = new IntersectionObserver((giffs) => {
      giffs.forEach((g) => {
        if (!g.isIntersecting) return
        g.target.classList.add('is-visible')
        this.io.unobserve(g.target)
      })
    })
    this.$el.querySelectorAll('.gif').forEach((el) => this.io.observe(el))
  },

  beforeUnmount() {
    this.io.disconnect()
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
    filter: grayscale(1) brightness(0.6);
    width: 100%;
    height: 353px;
    pointer-events: none;
    opacity: 0;
    transform: scale(0.5);
    transform-origin: center top;
    transition: 1s;
    &.is-visible {
      opacity: 1;
      transform: scale(1);
    }
  }
}
</style>
