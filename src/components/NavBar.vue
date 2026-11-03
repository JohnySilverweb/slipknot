<template>
  <nav>
    <ul>
      <li>
        <router-link to="/"><span>Home</span></router-link>
      </li>
      <li>
        <router-link to="/description"><span>Description</span></router-link>
      </li>
      <li>
        <router-link to="/player"><span>Listen album</span></router-link>
      </li>
      <li>
        <router-link to="/gallery"><span>Gallery</span></router-link>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: 'nav-bar',
}
</script>

<style lang="scss" scoped>
nav {
  position: fixed;
  width: 240px;
  height: 100%;
  z-index: 1000;
  &::before {
    content: '';
    width: 1px;
    height: 100%;
    background-color: white;
    left: var(--nav-x);
    position: absolute;
    opacity: 0.24;
  }
  ul {
    margin: 0;
    padding: 0;
    position: absolute;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 100%;
    li a {
      width: 100%;
      height: 54px;
      display: flex;
      align-items: center;
      position: relative;
      &:hover span {
        opacity: 1;
        color: white;
        text-shadow:
          0 0 3px #fff,
          0 0 7px var(--sk-red),
          0 0 14px var(--sk-red);
        animation: sk-word-strobe 920ms steps(1, end) infinite;
      }
      &::before {
        content: '';
        position: absolute;
        width: 9px;
        background: white;
        left: calc(var(--nav-x) - 4px);
        height: 9px;
        box-shadow: 0 0 0 rgba(255, 255, 255, 0);
        border-radius: 50%;
        top: 50%;
        animation: sk-dot-breathe 4.8s ease-in-out infinite;
        transition:
          background-color 160ms ease,
          transform 160ms ease,
          box-shadow 160ms ease;
      }
      &::after {
        content: '';
        position: absolute;
        height: 1px;
        width: 0;
        background-color: var(--sk-red);
        left: 37px;
        top: 50%;
        box-shadow:
          0 0 5px var(--sk-red),
          0 0 10px var(--sk-red);
        transform: translateY(-50%);
        transition: width 180ms ease;
      }
      &:hover::before {
        background: var(--sk-red);
        transform: translateY(-50%) scale(1.35);
        box-shadow:
          0 0 6px var(--sk-red),
          0 0 16px var(--sk-red),
          0 0 28px var(--sk-red);
        animation: sk-active-dot 920ms steps(1, end) infinite;
        opacity: 1;
        color: white;
      }
      &:hover::after {
        width: 11px;
      }
      span {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: calc(var(--nav-x) + 25px);
        font-size: 12px;
        font-weight: 700;
        letter-spacing: 0.16em;
        text-transform: uppercase;
        transition:
          opacity 140ms ease,
          transform 180ms ease;
        opacity: 0;
        &::before {
          content: '';
          display: block;
          position: absolute;
          animation: sk-red-fire 920ms steps(1, end) infinite;
          bottom: -35%;
          height: 190%;
          width: 100%;
          z-index: -1;
          background:
            radial-gradient(ellipse at 8% 82%, var(--sk-red) 0 5%, transparent 34%),
            radial-gradient(ellipse at 30% 65%, var(--sk-red) 0 5%, transparent 38%),
            radial-gradient(ellipse at 52% 88%, var(--sk-red) 0 6%, transparent 40%),
            radial-gradient(ellipse at 74% 62%, var(--sk-red) 0 4%, transparent 36%),
            radial-gradient(ellipse at 94% 84%, var(--sk-red) 0 5%, transparent 34%);
          filter: blur(4px);
          transform: translateY(4px) scaleY(0.7);
          transform-origin: center bottom;
        }
      }
    }
  }
}
</style>
