<template>
  <div class="container">
    <div class="overlay"></div>
    <video src="/public/video/wait_and_bleed.mp4?url" autoplay loop muted></video>
    <img src="@/assets/img/slipknot-logo.png" alt="slipknot logo" class="logo" />
    <p class="copyright">
      <span>This is a fan-made project.</span>
      <span> No copyright infringement intended.</span>
    </p>
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
    background-color: rgba(0, 0, 0, 0.6);
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
  .copyright {
    position: absolute;
    right: 0;
    bottom: 0;
    z-index: 99;
    color: white;
    cursor: default;
    margin-right: 5px;
    font-size: 12px;
    font-family: Arial, Helvetica, sans-serif;
    span:hover {
      font-family: 'SF Mono';
      font-weight: 700;
    }
  }
}
</style>
