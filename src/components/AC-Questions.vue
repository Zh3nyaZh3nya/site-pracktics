<template>
  <section class="questions__wrapper">
    <div class="questions__content">
      <div class="questions__content-title">
        <h2>Вопросы и ответы</h2>
      </div>
      <div class="questions__content__list">
        <div
          class="questions__content__list__item"
          v-for="question in questions"
          :key="question.id"
        >
          <div class="questions__content__list__item__header">
            <div class="questions__content__list__item__header-title">
              <span>{{ question.titleQuestions }}</span>
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
          subtitleQuestions: "нельзя",
          isOpen: false,
        },
        {
          id: 2,
          titleQuestions: "Какие дополнительные функции планируете добавить?",
          subtitleQuestions: "не важно",
          isOpen: false,
        },
        {
          id: 3,
          titleQuestions: "Как работает бот?",
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
  .questions__content {
    padding: 100px 82px 48px 82px;
    margin-bottom: 16px;
    &-title {
      font-weight: 800;
      font-size: $h1-font-size;
      line-height: $h1-line-height + 8px;
      text-align: center;
      margin-bottom: 60px;
    }
    &__list {
      padding: 48px 40px;
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
            font-size: $small-font-size;
            line-height: $small-font-size;
          }
        }
        &-subtitle {
          font-weight: 400;
          font-size: 24px;
          line-height: 28px;
        }
      }
    }
  }
  button {
    background: $green-color;
    padding: 12px;
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
    .questions__content {
      &-title {
        font-size: $h1-font-size - 36px;
        line-height: $h1-line-height - 8px;
        margin-bottom: 40px;
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
            font-weight: 400;
            font-size: 24px;
            line-height: 28px;
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
      &-title {
        font-size: $h1-font-size - 70px;
        line-height: $h1-line-height - 28px;
        margin-bottom: 20px;
      }
      &__list {
        padding: 0;
        &__item {
          &__header {
            &-title {
              font-weight: 400;
              font-size: $small-font-size - 4px;
              line-height: $small-font-size;
            }
          }
          &-subtitle {
            font-weight: 400;
            font-size: 24px;
            line-height: 28px;
          }
        }
      }
    }
  }
}
@media (max-width: 768px) {
  .questions__wrapper {
    max-width: 360px;
    margin-bottom: 48px;
    .questions__content {
      padding: 0;
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
