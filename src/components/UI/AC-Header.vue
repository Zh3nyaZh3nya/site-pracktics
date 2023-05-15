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
          <ac-button id="black-button"><span>Xочу купить</span></ac-button>
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
                <ac-button id="green-button">
                  <span>Xочу купить</span>
                </ac-button>
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
  padding: 0px 31px 19px 51px;
  .header__row {
    display: flex;
    justify-content: space-between;
    &-title {
      padding-top: 29px;
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
      padding: 26px 0 0 0;
      display: flex;
      column-gap: 39px;
      &__link {
        display: flex;
        align-items: center;
        column-gap: 42px;
        span {
          font-weight: 500;
          font-size: 21px;
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
    .header__row {
      &-title {
        padding: 0;
      }
      &__nav {
        display: none;
      }
      .header__burger {
        display: block;
        position: relative;
        z-index: $z-index-burger;
        background: #fff;
        padding: 4px 6px 7px 6px;
        border-radius: 8px;
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
            padding-left: 20px;
            background: #d9d9d9;
            button {
              margin-bottom: 13px;
            }
            #green-button {
              padding: 22px 71px;
            }
            span {
              font-weight: 800;
              font-size: 34px;
              line-height: 40px;
            }
          }
        }
      }
    }
  }
}
@media (max-width: 512px) {
  .header__wrapper {
    padding: 5px 17px 10px 20px;
    .header__row {
      &-title {
        padding-top: 5px;
        span {
          font-size: 25px;
        }
      }
      .header__burger {
        .closedBurger {
          .burger__row__nav {
            &__link {
              margin-bottom: 31px;
            }
            #green-button {
              padding: 10px 120px;
              span {
                font-weight: 600;
                font-size: 17px;
              }
            }
          }
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
              font-size: 26px;
              line-height: 40px;
            }
          }
        }
      }
    }
  }
}
</style>
