<template>
  <div class="cover">
    <div class="player-container">
      <music-player></music-player>
    </div>
    <song-list></song-list>
  </div>
</template>

<script>
import SongList from '@/Navbar/SongList.vue'
import MusicPlayer from './MusicPlayer.vue'
export default {
  components: { SongList, MusicPlayer },
}
</script>

<style lang="scss" scoped>
.cover {
  background-image: url('@/assets/img/cover.jpg');
  width: 100vw;
  height: 100vh;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-color: black;
}
.player-container {
  width: 100vw;
  height: 10%;
  position: fixed;
  bottom: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
</style>
