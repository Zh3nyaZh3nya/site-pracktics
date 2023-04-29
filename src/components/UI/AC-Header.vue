<template>
  <header class="header__wrapper">
    <div class="header__row">
      <div class="header__row-title">
        <span>auto</span><span>consultant</span>
      </div>
      <nav class="header__row__nav">
        <div class="header__row__nav__link">
          <div class="header__row__nav__link-btn">
            <button>
              <span>Как работает бот</span>
            </button>
          </div>
          <div class="header__row__nav__link-btn">
            <button>
              <span>Вопросы и ответы</span>
            </button>
          </div>
        </div>
        <div class="header__row__nav-button">
          <ac-button><span>Xочу купить</span></ac-button>
        </div>
      </nav>
      <div class="header__burger">
        <div v-if="this.visibleBurger === true" class="openBurger">
          <button @click="showBurger">
            <span></span>
          </button>
        </div>
        <div v-else class="closedBurger">
          <button @click="showBurger">
            <img src="@/assets/svgIcon/closed.svg" alt="" />
          </button>
          <nav class="burger__row__nav">
            <div class="burger__row__nav__link">
              <div class="burger__row__nav__link-descJob">
                <button @click="scrollToJob">
                  <span>Как работает бот</span>
                </button>
              </div>
              <div class="burger__row__nav__link-questions">
                <button @click="scrollToQuestions">
                  <span>Вопросы и ответы</span>
                </button>
              </div>
            </div>
            <div class="burger__row__nav-button">
              <ac-button id="green-button"><span>Xочу купить</span></ac-button>
            </div>
          </nav>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: "ac-header",
  components: {},
  data() {
    return {
      visibleBurger: true,
    };
  },
  methods: {
    showBurger() {
      this.visibleBurger = !this.visibleBurger;
    },
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";
.header__wrapper {
  max-width: 1360px;
  width: 100%;
  margin: 0 auto;
  padding: 28px 80px;
  .header__row {
    margin-top: 30px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 35px;
    &-title {
      z-index: $z-index-header;
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
      &__link {
        display: flex;
        align-items: center;
        column-gap: 37px;
        span {
          font-weight: 500;
          font-size: 20px;
          line-height: 90%;
        }
      }
    }
  }
}

.header__burger {
  display: none;
}
@media (max-width: 1240px) {
  .header__wrapper {
    max-width: 1024px;
    margin: 0 auto;
    padding: 10px 20px;
  }
}
@media (max-width: 902px) {
  .header__wrapper {
    max-width: 902px;
    margin: 0 auto;
    position: fixed;
    z-index: $z-index-header;
    background: #d9d9d9;
    .header__row {
      &__nav {
        display: none;
      }
      .header__burger {
        display: block;
        position: relative;
        z-index: $z-index-burger;
        .openBurger {
          position: relative;
          width: 30px;
          height: 20px;
          span {
            position: absolute;
            display: block;
            content: "";
            background-color: #000;
            width: 30px;
            height: 2px;
            top: 9px;
            right: 0;
          }
          button:before,
          button:after {
            display: block;
            content: "";
            background-color: #000;
            position: absolute;
            width: 100%;
            height: 2px;
            right: 0;
          }
          button:before {
            width: 30px;
            top: 0;
          }
          button:after {
            width: 30px;
            bottom: 0;
          }
        }
        .closedBurger {
          position: relative;
          button {
            position: relative;
            z-index: $z-index-burger;
          }
          .burger__row__nav {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: #fff;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            button {
              margin-bottom: 45px;
            }
            span {
              font-weight: 800;
              font-size: $small-font-size + 2px;
              line-height: $small-line-height + 2px;
            }
          }
        }
      }
    }
  }
}
</style>
