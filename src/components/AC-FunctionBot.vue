<template>
  <section class="function__wrapper">
    <div class="function__content">
      <div class="function__content-title">
        <h2>Бот напомнит когда</h2>
      </div>
      <div class="function__content__reminders">
        <div
          class="function__content__reminders__option"
          v-for="reminder in functionBot"
          :key="reminder.id"
        >
          <div
            class="function__content__reminders__option-img"
            :class="reminder.class"
          >
            <img
              :src="require('@/assets/images/' + reminder.imgFunc)"
              alt="#"
            />
            <div
              class="function__content__reminders__option-img-text"
              v-if="reminder.othersFunc"
            >
              <span v-for="text in reminder.othersFunc" :key="text.id">
                {{ text.text }}
              </span>
            </div>
          </div>
          <div class="function__content__reminders__option-subtitle">
            {{ reminder.descFunc }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ac-function-bot",
  data() {
    return {
      functionBot: [
        {
          id: 1,
          imgFunc: "butter.png",
          descFunc: "необходимо заменить масло",
        },
        {
          id: 2,
          imgFunc: "inspection.png",
          descFunc: "пройти техосмотр",
        },
        {
          id: 3,
          imgFunc: "insurance.png",
          descFunc: "продлить страховку",
        },
        {
          id: 4,
          imgFunc: "phone.png",
          othersFunc: [
            {
              id: 1,
              text: "Антифриз",
            },
            {
              id: 2,
              text: "Ремень ГРМ",
            },
            {
              id: 3,
              text: "Дворники",
            },
            {
              id: 4,
              text: "Аккумулятор",
            },
            {
              id: 5,
              text: "Тормозная жидкость",
            },
            {
              id: 6,
              text: "Салонный фильтр",
            },
          ],
          descFunc: "и о многом другом",
          class: "offsetImg",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";
.function__wrapper {
  padding-top: 144px;
  .function__content {
    &-title {
      text-align: center;
      padding-left: 20px;
      font-weight: 700;
      font-size: $h2-font-size;
      line-height: $h2-line-height;
      margin-bottom: 40px;
    }
    &__reminders {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      column-gap: 36px;
      row-gap: 36px;
      overflow: hidden;
      &__option {
        &-img {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 268px;
          background: #d9d9d9;
          border-radius: 52px;
          margin-bottom: 18px;
          padding-left: 12px;
          overflow: hidden;
          position: relative;
          img {
            position: relative;
            z-index: 1;
          }
          &-text {
            position: absolute;
            display: flex;
            justify-content: end;
            flex-wrap: wrap;
            gap: 15px;
            z-index: 1;
            right: -136px;
            span {
              font-weight: 500;
              display: flex;
              text-align: center;
              font-size: 22px;
              line-height: 30px;
              background: #fff;
              padding: 12px 20px;
              border-radius: 12px;
            }
            span:nth-child(3) {
              flex-basis: 248px;
            }
          }
        }
        .offsetImg {
          display: flex;
          align-items: center;
          justify-content: start;
          padding-left: 126px;
        }
        &-subtitle {
          font-weight: 500;
          font-size: $small-font-size;
          line-height: $small-line-height + 2px;
          text-align: center;
          padding-top: 2px;
          padding-left: 8px;
        }
      }
    }
  }
}
@media (max-width: 1240px) {
  .function__wrapper {
    padding: 0;
  }
}
@media (max-width: 1024px) {
  .function__wrapper {
    max-width: 768px;
    .function__content {
      &-title {
        font-weight: 700;
        font-size: $h2-font-size - 28px;
        line-height: $h2-line-height - 28px;
      }
      &__reminders {
        column-gap: 24px;
        row-gap: 24px;
        &__option {
          &-subtitle {
            font-size: $small-font-size - 14px;
            line-height: $small-line-height - 14px;
          }
        }
      }
    }
  }
}
@media (max-width: 768px) {
  .function__wrapper {
    max-width: 360px;
    .function__content {
      &-title {
        padding-left: 0;
        margin-bottom: 32px;
        h2 {
          font-weight: 800;
          font-size: 37px;
          line-height: 35px;
        }
      }
      &__reminders {
        grid-template-columns: 1fr;
        &__option {
          &-img {
            min-height: 157px;
            padding-left: 10px;
            img {
              min-width: 45px;
              max-height: 90px;
            }
            &-text {
              right: -282px;
            }
            span {
              font-size: 11px;
              line-height: 17px;
              padding: 6px 8px;
            }
            span:nth-child(3) {
              flex-basis: 306px;
            }
            span:nth-child(6) {
              flex-basis: 53%;
            }
          }
          &-subtitle {
            font-size: 19px;
          }
        }
      }
    }
  }
}
@media (max-width: 359px) {
  .function__wrapper {
    max-width: 270px;
    padding-top: 50px;
    margin-bottom: 30px;
    .function__content {
      &-title {
        h2 {
          font-weight: 800;
          font-size: $h2-font-size - 33px;
          line-height: $h2-line-height - 38px;
        }
      }
      &__reminders {
        grid-template-columns: 1fr;
        &__option {
          max-width: 270px;
        }
      }
    }
  }
}
</style>
