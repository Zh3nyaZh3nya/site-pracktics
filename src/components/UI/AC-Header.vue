<template>
  <header class="header__wrapper">
    <div class="header__row">
      <div class="header__row-title">
        <span>auto</span><span>consultant</span>
      </div>
      <nav class="header__row__nav">
        <div class="header__row__nav__link">
          <div class="header__row__nav__link-btn">
            <button @click="scrollToJob">
              <span>Как работает бот</span>
            </button>
          </div>
          <div class="header__row__nav__link-btn">
            <button @click="scrollToQuestions">
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
            <img src="@/assets/svgIcon/Burger.svg" alt="" />
          </button>
        </div>
        <div v-else class="closedBurger">
          <button @click="showBurger">
            <img src="@/assets/svgIcon/closed.svg" alt="" />
          </button>
          <Transition name="slide-fade">
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
                <ac-button id="green-button"
                  ><span>Xочу купить</span></ac-button
                >
              </div>
            </nav>
          </Transition>
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
    scrollToJob() {
      this.visibleBurger = !this.visibleBurger;
      this.$emit("scrollToJob");
    },
    scrollToQuestions() {
      this.visibleBurger = !this.visibleBurger;
      this.$emit("scrollToQuestions");
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
  padding: 28px 52px;
  .header__row {
    margin: 30px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
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
@media (max-width: 1024px) {
  .header__wrapper {
    max-width: 768px;
    margin: 0 auto;
    position: relative;
    z-index: $z-index-header;
    background: #d9d9d9;
    .header__row {
      margin: 15px 0;
      &__nav {
        display: none;
      }
      .header__burger {
        display: block;
        position: relative;
        z-index: $z-index-burger;
        background: #fff;
        padding: 4px 6px 7px 6px;
        .closedBurger {
          position: relative;
          button {
            position: relative;
            z-index: $z-index-burger;
          }
          img {
            background: #fff;
            padding: 4px;
          }
          .burger__row__nav {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            background: #d9d9d9;
            button {
              margin-bottom: 45px;
            }
            #green-button {
              padding: 22px 71px;
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
@media (max-width: 512px) {
  .header__wrapper {
    .header__row {
      &-title {
        span {
          font-size: 26px;
        }
      }
    }
  }
}
@media (max-width: 359px) {
  .header__wrapper {
    max-width: 280px;
    padding: 5px;
    .header__row {
      .header__burger {
        .closedBurger {
          .burger__row__nav {
            max-width: 280px;
            #green-button {
              padding: 10px 60px;
              span {
                font-size: 20px;
              }
            }
            span {
              font-weight: 800;
              font-size: $small-font-size - 6px;
              line-height: $small-line-height + 2px;
            }
          }
        }
      }
    }
  }
}
</style>
