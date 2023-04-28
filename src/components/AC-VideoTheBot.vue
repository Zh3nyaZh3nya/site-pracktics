<template>
  <section class="video__wrapper">
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
</template>

<script>
export default {
  name: "ac-video-the-bot",
  data() {
    return {
      videoSource: "video.mp4",
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
    margin-bottom: 72px;
    video {
      max-width: 1360px;
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
</style>
