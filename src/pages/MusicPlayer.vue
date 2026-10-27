<template>
  <div class="player">
    <div class="controls">
      <div class="control-buttons">
        <button id="prev"><span>⏮</span></button>
        <button id="play"><span>▶</span></button>
        <button id="next"><span>⏭</span></button>
      </div>
      <input type="range" class="vol" min="0" max="1" step="0.01" value="1" />
    </div>
    <div class="time">
      <span class="current-time">0:00</span>
      <input type="range" class="range" min="0" max="100" step="0.1" value="0" />
      <span class="duration">0:00</span>
    </div>
  </div>
</template>

<script>
import songs from '@/components/songs'
export default {}
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
      span {
        color: white;
        font-size: 36px;
      }
    }
    #play {
      border: none;
      border-radius: 50%;
      width: 40px;
      height: 40px;
      span {
        font-size: 22px;
      }
    }
  }
  .vol {
    margin-left: auto;
  }
}
</style>
