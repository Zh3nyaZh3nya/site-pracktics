<template>
  <section class="questions__wrapper" ref="Questions">
    <div class="questions__content">
      <div class="questions__content-title">
        <h2>
          Вопросы <br />
          и ответы
        </h2>
      </div>
      <div class="questions__content__list">
        <div
          class="questions__content__list__item"
          v-for="question in questions"
          :key="question.id"
        >
          <div class="questions__content__list__item__header">
            <div class="questions__content__list__item__header-title">
              <span v-html="question.titleQuestions"></span>
              <span v-html="question.titleQuestionsAdaptive"></span>
            </div>
            <div class="questions__content__list__item__header-btn">
              <button
                @click="question.isOpen = !question.isOpen"
                :class="{ opened: question.isOpen, closed: !question.isOpen }"
              >
                <img
                  v-if="question.isOpen"
                  src="@/assets/svgIcon/plus.svg"
                  alt="open"
                />
                <img v-else src="@/assets/svgIcon/closed.svg" alt="close" />
              </button>
            </div>
          </div>
          <transition name="fade">
            <div
              v-show="question.isOpen === true"
              class="questions__content__list__item-subtitle"
            >
              <span>{{ question.subtitleQuestions }}</span>
            </div>
          </transition>
          <hr />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ac-questions",
  data() {
    return {
      questions: [
        {
          id: 1,
          titleQuestions: "Можно ли вернуть деньги если передумал?",
          titleQuestionsAdaptive:
            "Можно ли вернуть<br /> деньги если передумал?",
          subtitleQuestions: "нельзя",
          isOpen: false,
        },
        {
          id: 2,
          titleQuestions: "Какие дополнительные функции планируете добавить?",
          titleQuestionsAdaptive:
            "Какие дополнительные функцию планируются добавлять?",
          subtitleQuestions: "не важно",
          isOpen: false,
        },
        {
          id: 3,
          titleQuestions: "Как работает бот?",
          titleQuestionsAdaptive: "Как работает сам бот? ",
          subtitleQuestions: "отлично",
          isOpen: false,
        },
      ],
      showList: true,
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/variables.css";
.questions__wrapper {
  max-width: 1360px;
  width: 100%;
  margin: 0 auto;
  background: #fff;
  border-radius: 60px;
  .questions__content {
    padding: 98px 0 48px 19px;
    margin-bottom: 16px;
    &-title {
      margin-bottom: 60px;
      h2 {
        font-weight: 800;
        font-size: $h1-font-size;
        line-height: $h1-line-height + 8px;
        text-align: center;
      }
      br {
        display: none;
      }
    }
    &__list {
      padding: 40px 36px 42px 41px;
      background: #d9d9d9;
      border-radius: 48px;
      margin: 0 69px;
      &__item {
        display: flex;
        flex-direction: column;
        margin-bottom: 32px;
        &__header {
          display: flex;
          justify-content: space-between;
          margin-bottom: 16px;
          align-items: center;
          text-align: center;
          &-title {
            span {
              font-weight: 400;
              font-size: $small-font-size + 1px;
              line-height: $small-font-size;
            }
            span:nth-child(2) {
              display: none;
            }
          }
          br {
            display: none;
          }
        }
        &-subtitle {
          span {
            font-weight: 400;
            font-size: 24px;
            line-height: 28px;
          }
          margin-bottom: 26px;
        }
      }
    }
  }
  button {
    background: $green-color;
    padding: 10px;
    border-radius: 50%;
  }
  .fade-enter-active {
    transition: all 0.3s ease-out;
  }
  .fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  }
  .fade-enter-from,
  .fade-leave-to {
    transform: translateY(-20px);
    opacity: 0;
  }
  .opened img:first-child {
    animation: rotate-plus 0.3s forwards;
  }

  .closed img:last-child {
    animation: rotate-minus 0.3s forwards;
  }

  @keyframes rotate-plus {
    from {
      transform: rotate(45deg);
    }
    to {
      transform: rotate(-45deg);
    }
  }

  @keyframes rotate-minus {
    from {
      transform: rotate(45deg);
    }
    to {
      transform: rotate(-45deg);
    }
  }
}
@media (max-width: 1360px) {
  .questions__wrapper {
    max-width: 1360px;
    .questions__content {
      &-title {
        margin-bottom: 40px;
        h2 {
          font-size: $h1-font-size - 36px;
          line-height: $h1-line-height - 8px;
        }
      }
      &__list {
        padding: 36px 28px;
        &__item {
          display: flex;
          flex-direction: column;
          margin-bottom: 26px;
          &__header {
            display: flex;
            justify-content: space-between;
            margin-bottom: 16px;
            align-items: center;
            text-align: center;
            &-title {
              font-weight: 400;
              font-size: $small-font-size - 6px;
              line-height: $small-font-size;
              text-align: start;
            }
          }
          &-subtitle {
            span {
              font-size: 24px;
              line-height: 28px;
            }
          }
        }
      }
    }
  }
}
@media (max-width: 1240px) {
  .questions__wrapper {
    max-width: 1024px;
    .questions__content {
      &-title {
        margin-bottom: 20px;
        h2 {
          font-size: $h1-font-size - 70px;
          line-height: $h1-line-height - 28px;
        }
        br {
          display: block;
        }
      }
      &__list {
        &__item {
          &__header {
            &-title {
              font-weight: 400;
              font-size: $small-font-size - 4px;
              line-height: $small-font-size;
            }
          }
          &-subtitle {
            span {
              font-size: 24px;
              line-height: 28px;
            }
          }
        }
      }
    }
  }
}
@media (max-width: 1024px) {
  .questions__wrapper {
    max-width: 768px;
    .questions__content {
      padding: 24px 22px 38px 22px;
      &-title {
        margin-bottom: 20px;
        h2 {
          font-weight: 800;
          font-size: $h1-font-size - 90px;
          line-height: $h1-line-height - 55px;
        }
      }
      &__list {
        &__item {
          &__header {
            &-title {
              font-weight: 400;
              font-size: $small-font-size - 12px;
              line-height: $small-font-size;
            }
          }
          &-subtitle {
            span {
              font-size: 16px;
              line-height: 20px;
            }
          }
        }
      }
    }
  }
}
@media (max-width: 768px) {
  .questions__wrapper {
    .questions__content {
      display: flex;
      flex-direction: column;
      justify-content: center;
      &-title {
        display: flex;
        justify-content: center;
        align-items: center;
      }
      &__list {
        &__item {
          &__header {
            &-title {
              font-weight: 500;
              font-size: $small-font-size - 18px;
              line-height: $small-font-size;
            }
          }
          &-subtitle {
            span {
              font-size: 14px;
              line-height: 20px;
            }
          }
        }
      }
    }
  }
}
@media (max-width: 512px) {
  .questions__wrapper {
    max-width: 512px;
    border-radius: 32px;
    .questions__content {
      padding-top: 30px;
      &-title {
        margin-bottom: 33px;
        h2 {
          font-weight: 800;
          font-size: 38px;
          line-height: 36px;
        }
      }
      &__list {
        padding: 39px 16px 10px 16px;
        border-radius: 24px;
        margin: 0;
        &__item {
          margin-bottom: 25px;
          &__header {
            margin-bottom: 24px;
            &-title {
              span:nth-child(1) {
                display: none;
              }
              span:nth-child(2) {
                display: block;
                font-weight: 400;
                font-size: 21px;
                line-height: 25px;
              }
            }
            br {
              display: block;
            }
            &-btn {
              button {
                display: flex;
                justify-content: center;
                align-items: center;
                width: 36px;
                height: 36px;
                img {
                  width: 20px;
                  height: 20px;
                }
              }
            }
          }
          &-subtitle {
            span {
              font-size: 16px;
              line-height: 20px;
            }
          }
        }
      }
    }
  }
}
@media (max-width: 359px) {
  .questions__wrapper {
    max-width: 280px;
    .questions__content {
      padding: 24px 12px;
      &-title {
        h2 {
          font-weight: 800;
          font-size: $h1-font-size - 90px;
          line-height: $h1-line-height - 55px;
        }
      }
      &__list {
        padding: 36px 20px 10px 20px;
        &__item {
          &__header {
            &-title {
              font-weight: 400;
              font-size: $small-font-size - 14px;
              line-height: $small-font-size;
            }
            &-btn {
              button {
                width: 44px;
                height: 44px;
                img {
                  width: 20px;
                  height: 20px;
                }
              }
            }
          }
          &-subtitle {
            font-weight: 400;
            font-size: 16px;
            line-height: 20px;
          }
        }
      }
    }
  }
}
</style>
