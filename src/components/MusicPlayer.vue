<template>
  <div class="player">
    <div class="controls">
      <div class="control-buttons">
        <button id="prev" @click="prev"><span>⏮</span></button>
        <button @click="togglePlay" id="play">
          <img :src="playing ? PauseIcon : PlayIcon" alt="" />
        </button>
        <button id="next" @click="next"><span>⏭</span></button>
      </div>
      <input
        type="range"
        class="vol"
        min="0"
        max="1"
        step="0.01"
        value="1"
        v-model.number="volume"
        :style="{ '--fill': volume * 100 + '%' }"
      />
    </div>
    <div class="time">
      <span class="current-time">{{ convertTimeHHMMSS(currentSeconds) }}</span>
      <div class="player-track-progress" @click.prevent="seek">
        <div :style="{ width: percentComplete + '%' }" class="player-track-seeker" />
        <div :style="{ width: percentBuffered + '%' }" class="player-track-buffered" />
      </div>
      <span class="duration">{{ convertTimeHHMMSS(durationSeconds) }}</span>
    </div>
  </div>
</template>

<script>
import songs from '@/lists/songs'

import PlayIcon from '@/assets/img/player-buttons/play.svg'
import PauseIcon from '@/assets/img/player-buttons/pause.svg'
import VHigh from '@/assets/img/player-buttons/volume-high.svg'
import VLow from '@/assets/img/player-buttons/volume-low.svg'
import VMute from '@/assets/img/player-buttons/mute.svg'

export default {
  props: {
    songId: { type: Number, default: 1 },
  },

  data() {
    return {
      playing: false,
      currentTime: 0,
      duration: 0,
      volume: 1,
      seeking: false,
      currentSeconds: 0,
      durationSeconds: 0,
      bufferedSeconds: 0,
      PlayIcon,
      PauseIcon,
      loaded: false,
    }
  },

  watch: {
    songId() {
      if (!this.song) return

      this.currentSeconds = 0
      this.durationSeconds = 0
      this.bufferedSeconds = 0
      this.loaded = false

      this.audio.src = this.song.src
      this.audio.play().catch(() => {})
    },

    volume(v) {
      this.audio.volume = v
    },
  },

  methods: {
    convertTimeHHMMSS(value) {
      const hhmmss = new Date(value * 1000).toISOString().substring(11, 19)
      return hhmmss.indexOf('00:') === 0 ? hhmmss.substr(3) : hhmmss
    },

    seek(e) {
      if (!this.loaded) return
      const el = e.target.getBoundingClientRect()
      const seekPos = (e.clientX - el.left) / el.width
      this.audio.currentTime = this.audio.duration * seekPos
    },

    togglePlay() {
      this.playing ? this.audio.pause() : this.audio.play()
    },

    next() {
      const i = (this.index + 1) % songs.length
      this.$emit('change', songs[i].id)
    },

    prev() {
      const i = (this.index - 1 + songs.length) % songs.length
      this.$emit('change', songs[i].id)
    },
  },

  computed: {
    index() {
      return songs.findIndex((s) => s.id === this.songId)
    },

    song() {
      return songs.find((s) => s.id === this.songId) || null
    },

    percentBuffered() {
      return this.bufferedSeconds ? (this.bufferedSeconds / this.durationSeconds) * 100 : 0
    },

    percentComplete() {
      return this.durationSeconds ? (this.currentSeconds / this.durationSeconds) * 100 : 0
    },
  },

  created() {
    this.audio = new Audio()
    if (this.song) this.audio.src = this.song.src

    this.audio.addEventListener('loadedmetadata', () => {
      this.durationSeconds = this.audio.duration
      this.loaded = true
    })

    this.audio.addEventListener('timeupdate', () => {
      this.currentSeconds = this.audio.currentTime
    })

    this.audio.addEventListener('progress', () => {
      const b = this.audio.buffered
      if (b.length) this.bufferedSeconds = b.end(b.length - 1)
    })

    this.audio.addEventListener('play', () => (this.playing = true))
    this.audio.addEventListener('pause', () => (this.playing = false))
    this.audio.addEventListener('ended', () => (this.playing = false))
    this.audio.addEventListener('ended', () => this.next())
  },

  beforeUnmount() {
    this.audio.pause()
    this.audio.src = ''
  },
}
</script>

<style lang="scss" scoped>
.player {
  width: 45vw;
  gap: 10px;
  display: flex;
  flex-direction: column;
}
.time,
.controls {
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  gap: 15px;

  .current-time,
  .duration {
    color: white;
    font-size: 13px;
    cursor: default;
  }

  .range {
    width: 100%;
  }

  .control-buttons {
    display: flex;
    gap: 10px;
    align-items: center;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    #prev,
    #next {
      background: none;
      border: none;
      padding: 0;
      cursor: pointer;
      span {
        color: white;
        font-size: 25px;
      }
    }

    #play {
      border: none;
      border-radius: 50%;
      width: 40px;
      height: 25px;
      background: none;
      padding: 0;
      cursor: pointer;
      img {
        width: 30px;
        height: 30px;
      }
    }
  }

  .vol {
    margin-left: auto;
    background: transparent;
    -webkit-appearance: none;
    appearance: none;
    cursor: pointer;
  }

  .vol::-webkit-slider-runnable-track,
  .vol::-moz-range-track {
    border-radius: 0;
    height: 4px;
    background: linear-gradient(to right, #fff var(--fill), rgba(255, 255, 255, 0.25) var(--fill));
  }

  .vol::-webkit-slider-thumb,
  .vol::-moz-range-thumb {
    border: none;
    width: 14px;
    height: 14px;
  }
}
.time .player-track-progress {
  width: 100%;
  position: relative;
  padding: 5px 0;
  cursor: pointer;
}

.time .player-track-progress .player-track-seeker {
  background-color: white;
  width: 100%;
  height: 4px;
}

.time .player-track-progress .player-track-buffered {
  height: 4px;
  background-color: var(--inactive-bar);
  position: absolute;
  width: 100% !important;
  top: 5px;
}
</style>
