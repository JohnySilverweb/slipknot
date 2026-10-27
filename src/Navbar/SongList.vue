<template>
  <nav>
    <ul>
      <li v-for="song in songs" class="song" :key="song.id" :src="song.song">
        0{{ song.id }} {{ song.name }}
      </li>
    </ul>
  </nav>
</template>

<script>
import songs from '@/components/songs'
export default {
  name: 'SongList',
  data() {
    return {
      songs,
    }
  },
}
</script>

<style lang="scss" scoped>
nav {
  height: 100vh;
  width: 250px;
  position: fixed;
  right: 0;
  z-index: 1;
  ul {
    .song {
      color: red;
      list-style: none;
      padding: 5px;
      cursor: pointer;
      &:hover {
        background-color: red;
        color: black;
      }
    }
  }
}
</style>
