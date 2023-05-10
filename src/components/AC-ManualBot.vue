<template>
  <section class="manual__wrapper" ref="Job">
    <div class="manual__content">
      <div class="manual__content-title">
        <h1>Как работает АвтоКонсультант?</h1>
      </div>
      <div
        class="manual__content__desc"
        v-for="manual in descManual"
        :key="manual.id"
      >
        <div class="manual__content__desc__column" :class="manual.class">
          <div class="manual__content__desc__column__text">
            <div class="manual__content__desc__column__text-number">
              <span>0{{ manual.id }}</span>
            </div>
            <div class="manual__content__desc__column__text-description">
              <span v-html="manual.textDesc"></span>
            </div>
          </div>
          <div class="manual__content__desc__column-img" :class="manual.class">
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
              <span v-html="manual.textDesc"></span>
            </div>
          </div>
          <div
            class="adaptive__manual__content__desc__column-img"
            :class="manual.class"
          >
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
    <ac-video-the-bot />
  </section>
</template>

<script>
import AcVideoTheBot from "@/components/AC-VideoTheBot";
export default {
  name: "ac-manual-bot",
  components: { AcVideoTheBot },
  data() {
    return {
      descManual: [
        {
          id: 1,
          textDesc:
            "Добавляете ваш<br/> автомобиль в “Мой гараж” заполнив сервисные данные",
          imgDesc: "button.png",
          class: "imgButton",
        },
        {
          id: 2,
          textDesc: "Ездите на машине<br/> как обычно это делаете",
          imgDesc: "car.png",
          class: "imgCar",
        },
        {
          id: 3,
          textDesc:
            "Бот подскажет когда надо будет заменить масло,<br/> пройти техосмотр и т.д.",
          imgDesc: "hand.png",
          class: "imgPhone",
        },
      ],
      adaptiveDescManual: [
        {
          id: 1,
          textDesc: "Вводишь сервисные данные своего автомобиля",
          adaptiveImgDesc: "adaptiveButton.png",
          class: "imgButtonAdaptive",
        },
        {
          id: 2,
          textDesc: "Ездите на машине<br/> как обычно это делаете",
          adaptiveImgDesc: "adaptiveCar.png",
          class: "imgCarAdaptive",
        },
        {
          id: 3,
          textDesc:
            "Подсказывает какие<br /> действия надо сделать: обслуживание, техосмотр, страховка и т.д",
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
  background: #fff;
  border-radius: 60px;
  padding: 82px 56px 56px 66px;
  margin-bottom: 16px;
  .manual__content {
    margin-bottom: 60px;
    &-title {
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
        padding: 40px 0 40px 41px;
        background: #d9d9d9;
        border-radius: 48px;
        &__text {
          &-number {
            max-width: 72px;
            padding: 19px 0;
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
            font-size: $base-font-size + 1px;
            line-height: $base-line-height;
            color: #565656;
          }
        }
        &-img {
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .imgButton {
          padding-left: 19px;
        }
        .imgCar {
          margin: 29px 59px;
        }
        .imgPhone {
          margin-right: 35px;
        }
      }
    }
    .adaptive__manual__content__desc {
      display: none;
    }
  }
}
@media (max-width: 1360px) {
  .manual__wrapper {
    max-width: 1240px;
    margin-bottom: 16px;
    .manual__content {
      &-title {
        font-size: $h1-font-size - 15px;
      }
    }
  }
}
@media (max-width: 1240px) {
  .manual__wrapper {
    max-width: 1024px;
    margin-bottom: 16px;
    .manual__content {
      &-title {
        font-size: $h1-font-size - 35px;
      }
      &__desc {
        &__column {
          padding: 20px 0 20px 20px;
          &__text {
            &-number {
              max-width: 62px;
              padding: 13px 10px;
              span {
                font-size: $small-font-size - 3px;
              }
            }
            &-description {
              font-size: $base-font-size - 14px;
              line-height: $base-line-height - 12px;
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
    .manual__content {
      &-title {
        h1 {
          font-weight: 800;
          font-size: $h1-font-size - 56px;
          line-height: 78px;
        }
      }
      &__desc {
        &__column {
          padding: 20px 20px 10px 20px;
          grid-template-columns: 1fr;
          row-gap: 24px;
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
}
@media (max-width: 768px) {
  .manual__wrapper {
    max-width: 768px;
    .manual__content {
      &-title {
        h1 {
          font-weight: 800;
          font-size: $h1-font-size - 85px;
          line-height: $h1-line-height - 65px;
        }
      }
      &__desc {
        display: none;
      }
      .adaptive__manual__content__desc {
        display: block;
        margin-bottom: 60px;
        &__column {
          padding: 24px 30px;
          background: #d9d9d9;
          border-radius: 40px;
          &__text {
            &-number {
              max-width: 52px;
              background: $green-color;
              padding: 14px 13px;
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
@media (max-width: 512px) {
  .manual__wrapper {
    max-width: 512px;
    padding: 31px 22px;
    border-radius: 32px;
    .manual__content {
      margin-bottom: 40px;
      &-title {
        margin-bottom: 32px;
        h1 {
          font-weight: 800;
          font-size: 36px;
          line-height: 36px;
        }
      }
      .adaptive__manual__content__desc {
        display: block;
        margin-bottom: 32px;
        &__column {
          background: #d9d9d9;
          border-radius: 40px;
          padding: 24px 0 24px 24px;
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
              color: #565656;
              margin-bottom: 27px;
              span {
                font-size: 21px;
                line-height: 24px;
                font-weight: 500;
              }
            }
          }
          &-img {
            padding-right: 24px;
          }
          .imgButtonAdaptive {
            padding: 0;
            max-width: 500px;
            display: flex;
            justify-content: end;
            align-items: end;
          }
          .imgCarAdaptive {
            padding-bottom: 19px;
          }
        }
      }
    }
  }
}
@media (max-width: 359px) {
  .manual__wrapper {
    max-width: 512px;
    padding: 34px 0px;
    .manual__content {
      &-title {
        margin-left: 10px;
        margin-bottom: 30px;
        h1 {
          font-weight: 800;
          font-size: $h1-font-size - 100px;
          line-height: $h1-line-height - 80px;
        }
      }
      &__desc {
        &__column {
          padding: 18px 14px;
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
}
</style>
