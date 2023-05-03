<template>
  <section class="description__wrapper">
    <div class="description__content">
      <div class="description__content-title">
        <h1>
          Автоконсультант<br />
          в вашем<br />
          смартфоне
        </h1>
      </div>
      <div class="description__content__column">
        <div class="description__content__column__left">
          <div class="description__content__column__left-subtitle">
            <span>
              Бот помогает следить за техническим <br />
              состоянием вашего автомобиля <br />
              и сообщит о необходимости<br />
              сервисного обслуживания
            </span>
            <p>
              <img
                src="@/assets/images/message.png"
                alt="и не только об этом"
              />
            </p>
            <p>
              <img
                src="@/assets/images/adaptive/AdaptivMessage.png"
                alt="и не только об этом"
              />
            </p>
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
  background: #fff;
  z-index: 1;
  padding: 56px;
  border-radius: 60px;
  margin-bottom: 16px;
  .description__content {
    margin-bottom: 84px;
    &-title {
      margin-bottom: 40px;
      h1 {
        font-weight: 800;
        font-size: $h1-font-size;
        line-height: $h1-line-height;
      }
      &-message {
        display: none;
      }
    }
    &__column {
      display: flex;
      flex-wrap: wrap;
      &__left {
        position: relative;
        flex-basis: 770px;
        &-subtitle {
          span {
            font-weight: 500;
            font-size: $base-font-size;
            line-height: $base-line-height;
            color: #565656;
          }
          p {
            text-align: right;
          }
          p:nth-child(3) {
            display: none;
          }
        }
        &-btn {
          #green-button {
            padding: 52px 108px;
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
        &-img {
          display: block;
          position: absolute;
          top: -250px;
          left: 55px;
        }
      }
    }
  }
}
@media (max-width: 1360px) {
  .description__wrapper {
    max-width: 1360px;
    .description__content {
      margin-bottom: 200px;
      &__column {
        &__left {
          flex-basis: 690px;
          &-subtitle {
            span {
              font-size: $base-font-size - 3px;
              line-height: $base-line-height;
            }
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
@media (max-width: 1240px) {
  .description__wrapper {
    max-width: 1024px;
    .description__content {
      &-title {
        h1 {
          font-size: $h1-font-size - 50px;
          line-height: $h1-line-height - 15px;
        }
      }
      &__column {
        display: flex;
        flex-wrap: wrap;
        &__left {
          position: relative;
          flex-basis: 450px;
          &-subtitle {
            margin-bottom: 60px;
            span {
              font-weight: 500;
              font-size: $base-font-size - 15px;
              line-height: $base-line-height;
              color: #565656;
            }
            p {
              text-align: right;
              padding-right: 0px;
            }
            p:nth-child(3) {
              display: none;
            }
          }
          &-btn {
            #green-button {
              padding: 36px 150px;
              margin-bottom: 32px;
            }
          }
        }
        &__right {
          position: relative;
          :before {
            left: -140px;
          }
          :after {
            position: absolute;
            left: 30px;
          }
        }
      }
    }
  }
}
@media (max-width: 1024px) {
  .description__wrapper {
    max-width: 767px;
    .description__content {
      margin-bottom: 0;
      &-title {
        position: relative;
        :after {
          display: block;
          content: "";
          background: url("@/assets/images/telegramBot.png") no-repeat;
          width: 220px;
          height: 108px;
          position: absolute;
          top: 125px;
          right: 0px;
        }
        h1 {
          font-size: 68px;
        }
      }
      &__column {
        display: flex;
        flex-direction: column;
        &__left {
          flex-basis: 400px;
          &-btn {
            display: flex;
            justify-content: center;
            align-items: center;
            #green-button {
              padding: 16px 130px;
            }
          }
          &-subtitle {
            margin-bottom: 50px;
            span {
              font-size: $base-font-size - 7px;
            }
          }
        }
        &__right {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 60px;
          &-img {
            position: static;
          }
          :after {
            position: static;
          }
          :before {
            display: none;
          }
        }
      }
    }
  }
}
@media (max-width: 767px) {
  .description__wrapper {
    padding: 32px 20px;
    .description__content {
      &-title {
        position: relative;
        display: flex;
        justify-content: center;
        align-items: center;
        :after {
          top: 80px;
          right: -15px;
        }
        h1 {
          font-weight: 800;
          font-size: $h2-font-size - 43px;
          line-height: 80px;
        }
      }
      &__column {
        display: flex;
        flex-direction: column;
        &__left {
          flex-basis: 400px;
          &-btn {
            #green-button {
              padding: 16px 130px;
            }
          }
          &-subtitle {
            margin-bottom: 50px;
            span {
              display: flex;
              justify-content: center;
              align-items: center;
              font-size: $small-font-size - 10px;
            }
            p {
              text-align: center;
              margin-right: 0;
            }
          }
        }
        &__right {
          :before {
            display: none;
          }
        }
      }
    }
  }
}
@media (max-width: 512px) {
  .description__wrapper {
    max-width: 512px;
    border-radius: 32px;
    .description__content {
      &-title {
        display: block;
        margin-bottom: 0;
        :after {
          background: url("@/assets/images/adaptive/adaptivTelegramBot.png")
            no-repeat;
          top: 55px;
          left: 200px;
          width: 120px;
          height: 50px;
        }
        h1 {
          font-weight: 800;
          font-size: $h2-font-size - 49px;
          line-height: 50px;
        }
      }
      &__column {
        display: flex;
        flex-direction: column;
        &__left {
          max-width: 320px;
          flex-basis: 100px;
          &-btn {
            #green-button {
              padding: 16px 78px;
            }
          }
          &-subtitle {
            margin-bottom: 52px;
            position: relative;
            span {
              display: block;
              font-size: $small-font-size - 14px;
              line-height: 28px;
            }
            p:nth-child(2) {
              display: none;
            }
            p:nth-child(3) {
              display: block;
              position: absolute;
              right: -5px;
              bottom: -14px;
            }
          }
        }
        &__right {
          &-img {
            :before {
              display: none;
            }
          }
          :after {
            content: "";
            background: url("@/assets/images/adaptive/adaptivDevice.png")
              no-repeat;
            width: 270px;
            height: 536px;
            z-index: 2;
          }
        }
      }
    }
  }
}
@media (max-width: 359px) {
  .description__wrapper {
    max-width: 279px;
    padding: 20px 1px 1px 5px;
    .description__content {
      &-title {
        margin-bottom: 10px;
        :after {
          background: url("@/assets/images/adaptive/adaptivTelegramBot.png")
            no-repeat;
          top: 40px;
          left: 120px;
        }
        h1 {
          font-weight: 800;
          font-size: $h2-font-size - 60px;
          line-height: 40px;
        }
      }
      &__column {
        &__left {
          &-subtitle {
            p:nth-child(3) {
              bottom: -30px;
            }
          }
          &-btn {
            #green-button {
              padding: 16px 50px;
            }
          }
        }
      }
    }
  }
}
</style>
