<template>
  <header class="header__wrapper">
    <div class="header__row">
      <div class="header__row-title">
        <span>auto</span><span>consultant</span>
      </div>
      <nav class="header__row__nav">
        <div
          class="header__row__nav-btn"
          v-for="link in headerNav"
          :key="link.id"
        >
          <button @click="link.nameFunc">
            <span>{{ link.nameBtn }}</span>
          </button>
        </div>
        <div class="header__row__nav-button">
          <ac-button><span>Xочу купить</span></ac-button>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
export default {
  name: "ac-header",
  components: {},

  data() {
    return {
      headerNav: [
        {
          id: 1,
          nameBtn: "Как работает бот",
          nameFunc: "scrollJob",
        },
        {
          id: 2,
          nameBtn: "Вопросы и ответы",
          nameFunc: "scrollAnswer",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";
.header__wrapper {
  max-width: 1360px;
  width: 100%;
  margin: 0 auto;
  .header__row {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 35px;
    &-title {
      span {
        font-weight: 700;
        font-size: 36px;
        line-height: 90%;
        letter-spacing: -1px;
      }
      span:nth-child(1) {
        color: $green-color;
      }
    }
    &__nav {
      display: flex;
      column-gap: 37px;
      align-items: center;
      &-btn {
        span {
          font-weight: 500;
          font-size: 20px;
          line-height: 90%;
        }
      }
    }
  }
}
</style>
