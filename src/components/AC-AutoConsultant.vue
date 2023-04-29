<template>
  <section class="consultant__wrapper">
    <div class="consultant__content">
      <div class="consultant__content-title">
        <h2>Ваш персональный АвтоКонсультант в кармане</h2>
      </div>
      <div class="consultant__content-subtitle">
        <span>Максимально комфортная и безопасная эксплуатация автомобиля</span>
      </div>
      <div class="consultant__content-btn">
        <ac-button id="green-button"><span>Купить</span></ac-button>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ac-auto-consultant",
};
</script>

<style lang="scss">
@import "@/assets/scss/variables.css";
.consultant__wrapper {
  max-width: 1360px;
  width: 100%;
  margin: 0 auto;
  background: url("@/assets/images/AutoConsultant.png") no-repeat;
  background-size: 100% 100%;
  text-align: center;
  margin-bottom: 16px;
  .consultant__content {
    padding: 100px 82px 92px 83px;
    &-title {
      font-weight: 800;
      font-size: $h2-font-size - 8px;
      line-height: $h2-line-height - 8px;
      color: #fff;
      margin-bottom: 20px;
    }
    &-subtitle {
      font-size: $base-font-size - 4px;
      line-height: $base-line-height - 4px;
      color: #fff;
      margin-bottom: 60px;
    }
  }
}
@media (max-width: 1360px) {
  .consultant__wrapper {
    max-width: 1240px;
    .consultant__content {
      margin-bottom: 16px;
      &-title {
        font-weight: 800;
        font-size: $h2-font-size - 16px;
        line-height: $h2-line-height - 16px;
        color: #fff;
        margin-bottom: 20px;
      }
      &-subtitle {
        font-size: $base-font-size - 10px;
        line-height: $base-line-height - 10px;
        color: #fff;
        margin-bottom: 60px;
      }
    }
  }
}
@media (max-width: 1240px) {
  .consultant__wrapper {
    max-width: 1024px;
    .consultant__content {
      &-title {
        font-weight: 800;
        font-size: $h2-font-size - 32px;
        line-height: $h2-line-height - 32px;
        color: #fff;
      }
      &-subtitle {
        font-size: $base-font-size - 15px;
        line-height: $base-line-height - 15px;
        color: #fff;
      }
    }
  }
}
@media (max-width: 1024px) {
  .consultant__wrapper {
    max-width: 768px;
    .consultant__content {
      &-title {
        h2 {
          font-weight: 800;
          font-size: $h2-font-size - 50px;
          line-height: $h2-line-height - 50px;
          color: #fff;
        }
      }
      &-subtitle {
        span {
          font-size: $base-font-size - 18px;
          line-height: $base-line-height - 18px;
          color: #fff;
        }
      }
    }
  }
}
@media (max-width: 768px) {
  .consultant__wrapper {
    max-width: 768px;
    .consultant__content {
      padding: 40px;
      &-title {
        h2 {
          font-size: $h2-font-size - 53px;
          line-height: $h2-line-height - 53px;
        }
      }
      &-subtitle {
        span {
          font-size: $base-font-size - 20px;
          line-height: $base-line-height - 25px;
        }
      }
    }
  }
}
@media (max-width: 512px) {
  .consultant__wrapper {
    max-width: 512px;
    .consultant__content {
      padding: 10px;
      &-title {
        h2 {
          font-size: $h2-font-size - 57px;
          line-height: $h2-line-height - 57px;
        }
      }
      &-subtitle {
        margin-bottom: 30px;
        span {
          font-size: $base-font-size - 25px;
          line-height: $base-line-height - 25px;
        }
      }
    }
  }
}
</style>
