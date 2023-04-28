<template>
  <section class="description__wrapper">
    <div class="description__content">
      <div class="description__content-title">
        <h1>
          Автоконсультант<br />
          в вашем<br />
          смартфоне
        </h1>
        <div class="description__content-title-message">
          <span>телеграм-бот</span>
        </div>
      </div>
      <div class="description__content__column">
        <div class="description__content__column__left">
          <div class="description__content__column__left-subtitle">
            <span
              >Бот помогает следить за техническим состоянием вашего автомобиля
              <br />
              и сообщит о необходимости<br />
              сервисного обслуживания</span
            >
            <div class="description__content__column__left-message">
              <img
                src="@/assets/images/message.png"
                alt="и не только об этом"
              />
              <img
                src="@/assets/images/adaptive/AdaptivMessage.png"
                alt="и не только об этом"
              />
            </div>
          </div>
          <div class="description__content__column__left-btn">
            <ac-button id="green-button"><span>Хочу купить</span></ac-button>
          </div>
        </div>
        <div class="description__content__column__right">
          <div class="description__content__column__right-img"></div>
        </div>
      </div>
    </div>
    <ac-function-bot />
  </section>
</template>

<script>
import AcFunctionBot from "@/components/AC-FunctionBot";
export default {
  name: "ac-description-bot",
  components: { AcFunctionBot },
};
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";
.description__wrapper {
  max-width: 1360px;
  width: 100%;
  margin: 0 auto;
  position: relative;
  z-index: -1;
  .description__content {
    margin-bottom: 225px;
    padding: 56px;
    &-title {
      font-weight: 800;
      font-size: $h1-font-size;
      line-height: $h1-line-height;
      margin-bottom: 40px;
      &-message {
        display: none;
      }
    }
    &__column {
      display: grid;
      grid-template-columns: 2fr 1fr;
      &__left {
        position: relative;
        &-subtitle {
          margin-bottom: 60px;
          span {
            font-weight: 500;
            font-size: $base-font-size - 8px;
            line-height: $base-line-height;
            color: #565656;
          }
        }
        &-btn {
          #green-button {
            padding: 52px 108px;
          }
        }
        &-message {
          right: 50px;
          top: 175px;
          position: absolute;
          img:nth-child(2) {
            display: none;
          }
        }
      }
      &__right {
        position: relative;
        :before {
          content: "";
          background: url("@/assets/images/telegramBot.png") no-repeat;
          display: block;
          position: absolute;
          width: 300px;
          height: 150px;
          z-index: 3;
          top: 0;
          left: -170px;
        }
        :after {
          content: "";
          background: url("@/assets/images/Device.png") no-repeat;
          display: block;
          width: 394px;
          height: 790px;
          z-index: 2;
        }
        position: relative;
        &-message {
          position: absolute;
          z-index: 2;
          padding: 25px 22px;
          background: $blue-color;
          border-radius: 44px;
          transform: rotate(5.17deg);
          top: -240px;
          left: -130px;
          span {
            color: #ffffff;
          }
        }
        &-img {
          position: absolute;
          top: -250px;
          img:nth-child(2) {
            display: none;
          }
        }
      }
    }
  }
}
@media (max-width: 1124px) {
  .description__wrapper {
    max-width: 1024px;
    margin: 0;
    .description__content {
      padding: 56px;
      &-title {
        font-size: $h1-font-size - 38px;
      }
      &__column {
        grid-template-columns: 550px 400px;
        &__left {
          &-subtitle {
            span {
              font-size: $base-font-size - 12px;
              line-height: $base-line-height;
            }
          }
          &-message {
            top: 190px;
          }
          &-btn {
            #green-button {
              padding: 42px 88px;
            }
          }
        }
      }
    }
  }
}
@media (max-width: 952px) {
  .description__wrapper {
    max-width: 952px;
    .description__content {
      &-title {
        font-size: $h1-font-size - 58px;
        line-height: $h1-line-height - 20px;
      }
      &__column {
        grid-template-columns: 2fr 1fr;
        &__left {
          &-message {
            top: 170px;
          }
        }
        &__right {
          display: block;
          &-img img {
            width: 300px;
          }
        }
      }
    }
  }
}
@media (max-width: 864px) {
  .description__wrapper {
    .description__content {
      &__column {
        &__left {
          &-message {
            top: 200px;
          }
        }
      }
    }
  }
}
@media (max-width: 768px) {
  .description__wrapper {
    max-width: 768px;
    margin: 0;
    padding: 32px 20px;
    .description__content {
      &-title {
        position: relative;
        width: 500px;
        height: 210px;
        h1 {
          font-weight: 800;
          font-size: $h2-font-size - 28px;
          line-height: 70px;
        }
        &-message {
          display: block;
          position: absolute;
          z-index: 2;
          background: $blue-color;
          border-radius: 44px;
          transform: rotate(5.17deg);
          font-size: 28px;
          font-weight: 500;
          padding: 23px 23px;
          top: 80px;
          right: 0px;
          color: #fff;
          line-height: 100%;
        }
      }
      &__column {
        display: flex;
        flex-direction: column;
        &__left {
          max-width: 660px;
          height: 192px;
          &-btn {
            #green-button {
              padding: 16px 100px;
            }
          }
          &-subtitle {
            margin-bottom: 50px;
            span {
              font-size: $small-font-size - 4px;
            }
          }
          &-message {
            top: 110px;
            right: 0px;
          }
        }
        &__right {
          display: none;
        }
      }
    }
  }
}
@media (max-width: 536px) {
  .description__wrapper {
    max-width: 512px;
    margin: 0;
    .description__content {
      &-title {
        width: 300px;
        height: 150px;
        h1 {
          font-weight: 800;
          font-size: $base-font-size - 2px;
          line-height: $small-line-height + 8px;
        }
        &-message {
          font-size: 18px;
          padding: 14px 14px;
          top: 60px;
          right: -25px;
          line-height: 100%;
        }
      }
      &__column {
        &__left {
          &-subtitle {
            span {
              font-weight: 500;
              font-size: 19px;
              line-height: 24px;
            }
          }
          &-btn {
            display: flex;
            justify-content: center;
            align-items: center;
          }
          &-message {
            position: relative;
            top: 0;
            width: 360px;
            img:nth-child(1) {
              display: none;
            }
            img:nth-child(2) {
              position: absolute;
              right: 30px;
              display: block;
            }
          }
        }
        &__right {
          display: none;
        }
      }
    }
  }
}
</style>
