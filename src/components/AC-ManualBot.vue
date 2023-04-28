<template>
  <section class="manual__wrapper">
    <div class="manual__content">
      <div class="manual__content-title">
        <h1>Как работает АвтоКонсультант?</h1>
      </div>
      <div
        class="manual__content__desc"
        v-for="manual in descManual"
        :key="manual.id"
      >
        <div class="manual__content__desc__column">
          <div class="manual__content__desc__column__text">
            <div class="manual__content__desc__column__text-number">
              <span>0{{ manual.id }}</span>
            </div>
            <div class="manual__content__desc__column__text-description">
              <span>{{ manual.textDesc }}</span>
            </div>
          </div>
          <div class="manual__content__desc__column-img">
            <img :src="require('@/assets/images/' + manual.imgDesc)" alt="" />
          </div>
        </div>
      </div>
      <div
        class="adaptive__manual__content__desc"
        v-for="manual in adaptiveDescManual"
        :key="manual.id"
      >
        <div class="adaptive__manual__content__desc__column">
          <div class="adaptive__manual__content__desc__column__text">
            <div class="adaptive__manual__content__desc__column__text-number">
              <span>0{{ manual.id }}</span>
            </div>
            <div
              class="adaptive__manual__content__desc__column__text-description"
            >
              <span>{{ manual.textDesc }}</span>
            </div>
          </div>
          <div class="adaptive__manual__content__desc__column-img">
            <img
              :src="
                require('@/assets/images/adaptive/' + manual.adaptiveImgDesc)
              "
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ac-manual-bot",
  data() {
    return {
      descManual: [
        {
          id: 1,
          textDesc:
            "Добавляете ваш автомобиль в “Мой гараж” заполнив сервисные данные",
          imgDesc: "button.png",
        },
        {
          id: 2,
          textDesc: "Ездите на машине как обычно это делаете",
          imgDesc: "car.png",
        },
        {
          id: 3,
          textDesc:
            "Бот подскажет когда надо будет заменить масло, пройти техосмотр и т.д.",
          imgDesc: "hand.png",
        },
      ],
      adaptiveDescManual: [
        {
          id: 1,
          textDesc: "Вводишь сервисные данные своего автомобиля",
          adaptiveImgDesc: "adaptiveButton.png",
        },
        {
          id: 2,
          textDesc: "Ездите на машине как обычно это делаете",
          adaptiveImgDesc: "adaptiveCar.png",
        },
        {
          id: 3,
          textDesc:
            "Подсказывает какие действия надо сделать: обслуживание, техосмотр, страховка и т.д",
          adaptiveImgDesc: "adaptiveHand.png",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/variables.css";
.manual__wrapper {
  max-width: 1360px;
  width: 100%;
  margin: 0 auto;
  .manual__content {
    &-title {
      font-weight: 800;
      font-size: $h1-font-size;
      line-height: $h1-line-height;
      margin-bottom: 60px;
    }
    &__desc {
      display: grid;
      grid-template-columns: 1fr;
      margin-bottom: 25px;
      &__column {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        padding: 40px;
        &__text {
          &-number {
            max-width: 72px;
            padding: 16px 13px;
            text-align: center;
            background: $green-color;
            border-radius: 100px;
            margin-bottom: 38px;
            span {
              font-weight: 500;
              font-size: $small-font-size;
            }
          }
          &-description {
            font-weight: 500;
            font-size: $base-font-size;
            line-height: $base-line-height;
            color: #565656;
          }
        }
        &-img {
          display: flex;
          align-items: center;
          justify-content: center;
        }
      }
    }
    .adaptive__manual__content__desc {
      display: none;
    }
  }
}
@media (max-width: 1240px) {
  .manual__wrapper {
    max-width: 1024px;
    margin: 0 auto;
    .manual__content {
      &-title {
        font-size: $h1-font-size - 28px;
      }
      &__desc {
        &__column {
          padding: 0;
          grid-template-columns: 1fr;
          row-gap: 28px;
          &__text {
            &-number {
              max-width: 62px;
              padding: 13px 10px;
              span {
                font-size: $small-font-size - 3px;
              }
            }
            &-description {
              font-size: $base-font-size - 7px;
              line-height: $base-line-height - 6px;
              color: #565656;
            }
          }
        }
      }
    }
  }
}
@media (max-width: 1024px) {
  .manual__wrapper {
    max-width: 768px;
    padding: 12px 24px;
    margin: 0;
    .manual__content {
      &-title {
        h1 {
          font-weight: 800;
          font-size: $h1-font-size - 56px;
        }
      }
      &__desc {
        &__text {
          &-number {
            max-width: 52px;
            padding: 10px 7px;
            span {
              font-size: $small-font-size - 7px;
            }
          }
          &-description {
            font-size: $base-font-size - 10px;
            line-height: $base-line-height -6px;
            color: #565656;
          }
        }
      }
    }
  }
}
@media (max-width: 768px) {
  .manual__wrapper {
    max-width: 512px;
    margin: 0;
    .manual__content {
      &-title {
        h1 {
          font-weight: 800;
          font-size: $h1-font-size - 74px;
          line-height: $h1-line-height - 44px;
        }
      }
    }
  }
}
@media (max-width: 623px) {
  .manual__wrapper {
    max-width: 360px;
    margin: 0;
    display: flex;
    .manual__content {
      &-title {
        h1 {
          font-weight: 800;
          font-size: $h1-font-size - 94px;
          line-height: $h1-line-height - 64px;
        }
      }
      &__desc {
        display: none;
      }
      .adaptive__manual__content__desc {
        display: block;
        margin-bottom: 60px;
        &__column {
          display: grid;
          grid-template-columns: 1fr;
          padding: 24px;
          &__text {
            &-number {
              max-width: 52px;
              background: $green-color;
              padding: 14px 10px;
              text-align: center;
              border-radius: 100px;
              margin-bottom: 20px;
              span {
                font-size: $small-font-size - 7px;
              }
            }
            &-description {
              font-size: 20px;
              line-height: 24px;
              color: #565656;
              margin-bottom: 20px;
            }
          }
          &-img {
            display: flex;
            align-items: center;
            justify-content: center;
          }
        }
      }
    }
  }
}
</style>
