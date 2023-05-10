<template>
  <section class="video__wrapper" v-if="videoSource.length">
    <div class="video__content">
      <video
        ref="videoPlayer"
        :src="require('@/assets/video/' + videoSource)"
        :muted="true"
      ></video>
      <button v-if="!isPlaying" @click="play">
        <img src="@/assets/svgIcon/Play.svg" alt="" />
      </button>
      <button v-else @click="pause">
        <img src="@/assets/svgIcon/Pause.svg" alt="" />
      </button>
    </div>
  </section>
  <section v-else>
    <div class="video__wrapper__empty">
      <div class="video__content__empty">
        <button>
          <img src="@/assets/svgIcon/Play.svg" alt="" />
        </button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ac-video-the-bot",
  data() {
    return {
      videoSource: "",
      isPlaying: false,
    };
  },
  methods: {
    play() {
      this.$refs.videoPlayer.play();
      this.isPlaying = true;
    },
    pause() {
      this.$refs.videoPlayer.pause();
      this.isPlaying = false;
    },
  },
};
</script>

<style lang="scss">
.video__wrapper {
  max-width: 1360px;
  width: 100%;
  margin: 0 auto;
  .video__content {
    position: relative;
    video {
      max-width: 1240px;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 52px;
      width: 100%;
      margin: 0 auto;
    }
    &:hover button {
      opacity: 1;
    }
    button {
      background: #fff;
      padding: 41px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      opacity: 0;
      transition: opacity 0.3s ease-in-out;
    }
  }
}
.video__wrapper__empty {
  background: #d9d9d9;
  max-width: 1248px;
  min-height: 682px;
  border-radius: 52px;
  display: flex;
  align-items: center;
  justify-content: center;
  .video__content__empty {
    position: relative;
    padding-left: 10px;
    button {
      background: #fff;
      padding: 40px 39px 40px 46px;
      border-radius: 50%;
    }
  }
}
@media (max-width: 1240px) {
  .video__wrapper {
    max-width: 1240px;
    .video__content {
      video {
        max-width: 960px;
      }
    }
  }
}
@media (max-width: 960px) {
  .video__wrapper {
    max-width: 960px;
    .video__content {
      video {
        max-width: 768px;
      }
    }
  }
}
@media (max-width: 768px) {
  .video__wrapper {
    max-width: 768px;
    .video__content {
      video {
        max-width: 768px;
      }
    }
  }
}
@media (max-width: 512px) {
  .video__wrapper {
    max-width: 512px;
    max-height: 355px;
    .video__content {
      video {
        width: 320px;
        margin: 0px auto;
      }
      button {
        display: block;
      }
    }
  }
  .video__wrapper__empty {
    min-height: 184px;
    .video__content__empty {
      button {
        background: #fff;
        padding: 11px 13px 10px 14px;
        border-radius: 50%;
        img {
          width: 11px;
          height: 14px;
        }
      }
    }
  }
}
@media (max-width: 359px) {
  .video__wrapper {
    max-width: 270px;
    max-height: 270px;
    .video__content {
      video {
        width: 270px;
        margin: 0px auto;
      }
      button {
        display: block;
      }
    }
  }
}
</style>
