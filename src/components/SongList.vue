<template>
  <nav>
    <ul>
      <li
        v-for="song in songs"
        class="song"
        :class="{ active: song.id === activeId }"
        :key="song.id"
        @click="$emit('select', song.id)"
      >
        0{{ song.id }} {{ song.name }}
      </li>
    </ul>
  </nav>
</template>

<script>
import songs from '@/lists/songs'
export default {
  name: 'SongList',
  data() {
    return {
      songs,
    }
  },

  props: { activeId: { type: Number, default: null } },

  emits: ['select'],
}
</script>

<style lang="scss" scoped>
nav {
  height: 100vh;
  width: 220px;
  position: fixed;
  right: 0;
  top: 0;
  z-index: 1;
  background-color: black;
  &::before {
    content: '';
    background: linear-gradient(
      to right,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.25) 25%,
      rgba(0, 0, 0, 0.5) 50%,
      rgba(0, 0, 0, 1) 100%
    );
    width: 15%;
    display: block;
    height: 100vh;
    position: absolute;
    left: -15%;
  }
  ul {
    padding: 0;
    margin-top: 0;
    .song {
      color: red;
      list-style: none;
      padding: 5px;
      cursor: pointer;
      &:hover,
      &.active {
        background-color: red;
        color: black;
      }
    }
  }
}
</style>
