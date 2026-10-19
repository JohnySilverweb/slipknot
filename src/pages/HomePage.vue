<template>
  <div class="container">
    <div class="overlay"></div>
    <video src="/public/video/wait_and_bleed.mp4?url" autoplay loop muted></video>
    <img src="@/assets/img/slipknot-logo.png" alt="slipknot logo" class="logo" />
    <!-- <p>This is a fan-made project. No copyright infringement intended.</p> -->
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.container {
  position: absolute;
  width: 100vw;
  height: 100vh;
  .overlay {
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.3);
    /* background-color: rgba(0, 0, 0, 1); */
    z-index: 99;
  }
  video {
    inset-block-start: 50%;
    inset-inline-start: 50%;
    position: fixed;
    transform: translate(-50%, -50%);
    object-fit: cover;
    width: 100%;
    height: 100%;
    pointer-events: none;
  }

  .logo {
    position: relative;
    z-index: 100;
    transform: translate(50%, 50%);
    pointer-events: none;
  }
  /*  p {
    position: relative;
    z-index: 99;
    color: white;
    pointer-events: none;
  } */
}
</style>
