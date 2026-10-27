<template>
  <!-- <div class="overlay"></div> -->
  <div class="info">
    <div class="block-l">
      <p>There were <span class="spec-word">nine</span> of them.</p>
      <p>Dead-end town, dead-end jobs, days that all looked the same.</p>
      <p>Nothing to do, nothing to lose, so they started going insane on purpose.</p>
      <p>Masks on, noise up, rage with nowhere left to hide.</p>
      <p>This album is what that <span class="spec-word">(sic)</span>kness gave birth to.</p>
    </div>
    <div class="block-r">
      <video src="/video/glitch.mp4" autoplay muted loop></video>
      <img src="@/assets/img/slipknot-1999.jpg" alt="" class="img-first" />
    </div>
  </div>

  <div class="barcode">
    <div class="bars">
      <i class="long s0 w1"></i><i class="long s1 w1"></i>
      <i class="s1 w3 member" :style="getBackground(members[0])"></i><i class="s1 w2"></i
      ><i class="s1 w1"></i><i class="s3 w2 member" :style="getBackground(members[1])"></i
      ><i class="s2 w1"></i><i class="s2 w2"></i> <i class="s1 w1"></i
      ><i class="s1 w4 member" :style="getBackground(members[2])"></i><i class="s2 w2"></i
      ><i class="s2 w1"></i><i class="s1 w3 member" :style="getBackground(members[3])"></i
      ><i class="s1 w2"></i> <i class="long s1 w1"></i><i class="long s1 w1"></i>
      <i class="s1 w3"></i><i class="s2 w1 member" :style="getBackground(members[4])"></i
      ><i class="s1 w3"></i><i class="s2 w1"></i
      ><i class="s1 w3 member" :style="getBackground(members[5])"></i><i class="s2 w1"></i>
      <i class="s1 w3 member" :style="getBackground(members[6])"></i><i class="s2 w1"></i
      ><i class="s1 w2"></i><i class="s1 w2 member" :style="getBackground(members[7])"></i
      ><i class="s2 w1"></i><i class="s3 w1"></i>
      <i class="long s2 w1 member" :style="getBackground(members[8])"></i><i class="long s1 w1"></i>
    </div>
  </div>

  <div class="ros_robinson">
    <video src="/video/glitch.mp4" autoplay muted loop></video>
    <div class="img"></div>
    <div class="overlay">
      <p>
        Slipknot’s self-titled album was recorded at Indigo Ranch Studios in Malibu with producer
        Ross Robinson. The band formed in Des Moines, Iowa, in 1995 around Shawn Crahan and Joey
        Jordison, and their first independent album, Mate. Feed. Kill. Repeat., came out in 1996 in
        a run of about a thousand copies.
      </p>
      <p>
        A demo from it reached Roadrunner Records, and the band signed in 1998. They moved to
        California to record, living and working under constant tension: nine people, everyone on
        edge, arguments over everything. The members later described this period as hard and
        chaotic, but that tension is exactly what you hear on the record.
      </p>
      <p>
        The album was released on June 29, 1999. It went platinum, and singles like Wait and Bleed
        and Spit It Out pushed the band out of the underground and into the mainstream.
      </p>
    </div>
  </div>
</template>

<script setup>
import members from '@/components/members'

function getBackground(member) {
  return {
    backgroundImage: `url(${member.image})`,
  }
}
</script>

<style lang="scss" scoped>
body {
  background-color: black;
}
.info {
  display: flex;
  width: 100vw;
  height: 80vh;
  .block-l {
    width: 50%;
    background-color: black;
    padding: 20px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    &::after {
      content: '';
      position: absolute;
      right: 0;
      bottom: -4px;
      left: 100%;
      height: 100%;
      width: 10%;
      z-index: 99;
      background: linear-gradient(
        to left,
        rgba(0, 0, 0, 0) 0%,
        rgba(0, 0, 0, 0.2) 20%,
        rgba(0, 0, 0, 0.55) 50%,
        #000 100%
      );
    }
    p {
      color: white;
      font-size: 36px;
      margin: 20px 0 20px 40px;
      .spec-word {
        color: red;
        animation: sk-active-dot 920ms steps(1, end) infinite;
      }
    }
  }
  .block-r {
    width: 50%;
    height: 100%;
    position: relative;
    video {
      height: 100%;
      position: absolute;
      opacity: 0.5;
      max-width: 100%;
      object-fit: cover;
    }
    .img-first {
      object-fit: cover;
      height: 100%;
      max-width: 100%;
    }
  }
}

.barcode {
  container-type: inline-size;
  width: 100%;
  background: black;
  display: flex;
  justify-content: center;
  align-self: center;
  position: relative;
  &::before {
    content: '';
    position: absolute;
    right: 0;
    top: -10%;
    left: 0;
    height: 10%;
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.2) 20%,
      rgba(0, 0, 0, 0.55) 50%,
      #000 100%
    );
  }

  &::after {
    content: '';
    position: absolute;
    right: 0;
    bottom: -10%;
    height: 10%;
    width: 100%;
    background: linear-gradient(
      to top,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.2) 20%,
      rgba(0, 0, 0, 0.55) 50%,
      #000 100%
    );
  }
}
.bars {
  --u: calc(100cqw / 113);
  --k: 0.9;
  display: flex;
  align-items: flex-start;
  padding-bottom: calc(6 * var(--u));
  padding-top: calc(3 * var(--u));
  counter-reset: member -1;
}
.bars i {
  box-sizing: border-box;
  padding-inline: calc(var(--u) * 0.2);
  background-clip: content-box;
  display: block;
  height: calc(35 * var(--u));
  background: white;
  width: calc(var(--w) * var(--u) * var(--k));
  margin-left: calc(var(--s) * var(--u) * var(--k));
}
.bars i.long {
  height: calc(39 * var(--u));
}
.w1 {
  --w: 1;
}
.w2 {
  --w: 2;
}
.w3 {
  --w: 3;
}
.w4 {
  --w: 4;
}
.s0 {
  --s: 0;
}
.s1 {
  --s: 1;
}
.s2 {
  --s: 2;
}
.s3 {
  --s: 3;
}

.member {
  box-shadow:
    0 0 3px #fff,
    0 0 7px var(--sk-red),
    0 0 14px var(--sk-red);
  /* animation: sk-active-dot 920ms steps(1, end) infinite; */
  counter-increment: member;
  background-position: center center !important;
  position: relative;
  transition: 0.3s ease;
  &::after {
    content: counter(member);
    position: absolute;
    top: calc(100% + var(--u) * 1);
    left: 50%;
    transform: translateX(-50%);
    font-size: calc(var(--u) * 3);
    line-height: 1;
    color: #fff;
    font-style: normal;
    font-family: 'SF Mono';
    pointer-events: none;
  }
  &:hover {
    width: 100%;
    animation: none;
  }
}

.ros_robinson {
  display: flex;
  align-items: center;
  background-color: black;
  flex-direction: column;
  clip-path: inset(0);
  position: relative;
  .img,
  video {
    background-image: url('@/assets/img/ros_robinson.jpg');
    background-position: center;
    background-size: cover;
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100%;
    z-index: -10;
  }
  video {
    z-index: 10;
    opacity: 0.5;
    width: 100vw;
    object-fit: cover;
  }
  .overlay {
    margin: 100vh 0;
    display: flex;
    flex-direction: column;
    align-items: end;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 12;
    p {
      color: white;
      width: 60%;
      font-size: 36px;
      text-align: right;
      margin-right: 2rem;
    }
  }
}
</style>
