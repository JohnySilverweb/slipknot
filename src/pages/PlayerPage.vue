<template>
  <div class="cover">
    <video src="/video/scissors.mp4" autoplay muted loop></video>
    <div class="player-container">
      <music-player :song-id="currentId" @change="currentId = $event"></music-player>
    </div>
    <song-list :active-id="currentId" @select="currentId = $event"></song-list>
  </div>
</template>

<script>
import SongList from '@/components/SongList.vue'
import MusicPlayer from '../components/MusicPlayer.vue'

export default {
  components: { SongList, MusicPlayer },
  data() {
    return {
      currentId: 1,
    }
  },
}
</script>

<style lang="scss" scoped>
.cover {
  width: 100vw;
  height: 100vh;
  background-color: black;
  video {
    width: 100vw;
    height: 100vh;
    position: fixed;
  }
}
.player-container {
  width: 100vw;
  height: 70px;
  position: fixed;
  bottom: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #07081a;
}
</style>
