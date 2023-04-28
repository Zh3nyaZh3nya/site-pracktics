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
            <span
              >Бот помогает следить за техническим состоянием вашего автомобиля
              <br />
              и сообщит о необходимости<br />
              сервисного обслуживания</span
            >
          </div>
          <div class="description__content__column__left-message">
            <img src="@/assets/images/message.png" alt="и не только об этом" />
          </div>
          <div class="description__content__column__left-btn">
            <ac-button id="green-button"><span>Хочу купить</span></ac-button>
          </div>
        </div>
        <div class="description__content__column__right">
          <div class="description__content__column__right-message">
            <span>телеграм-бот</span>
          </div>
          <div class="description__content__column__right-img">
            <img src="@/assets/images/Device.png" alt="phone" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ac-description-bot",
};
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";
.description__wrapper {
  max-width: 1360px;
  width: 100%;
  margin: 0 auto;
  .description__content {
    margin-bottom: 225px;
    &-title {
      font-weight: 800;
      font-size: $h1-font-size;
      line-height: $h1-line-height;
      margin-bottom: 40px;
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
            line-height: $base-font-size;
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
        }
      }
      &__right {
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
        }
      }
    }
  }
}
</style>
