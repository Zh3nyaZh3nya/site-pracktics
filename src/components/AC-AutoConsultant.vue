<template>
  <section class="consultant__wrapper">
    <div class="consultant__content">
      <div class="consultant__content-title">
        <h2>
          Ваш персональный АвтоКонсультант <br />
          в кармане
        </h2>
      </div>
      <div class="consultant__content-subtitle">
        <span>
          Максимально комфортная и безопасная <br />
          эксплуатация автомобиля
        </span>
        <span>
          напомнит когда пора менять масло <br />
          или обновить срок действия автостраховки
        </span>
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
    padding: 111px 0px 92px 23px;
    &-title {
      color: #fff;
      margin-bottom: 22px;
      h2 {
        font-weight: 800;
        font-size: $h2-font-size - 8px;
        line-height: $h2-line-height - 7px;
      }
      br {
        display: none;
      }
    }
    &-subtitle {
      padding-left: 62px;
      color: #fff;
      margin-bottom: 58px;
      span {
        font-size: $base-font-size;
        line-height: $base-line-height;
      }
      span:nth-child(2) {
        display: none;
      }
    }
    &-btn {
      #green-button {
        border-radius: 28px;
      }
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
        margin-bottom: 60px;
        span {
          font-size: $base-font-size - 10px;
          line-height: $base-line-height - 10px;
        }
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
        color: #fff;
        span {
          font-size: $base-font-size - 15px;
          line-height: $base-line-height - 15px;
        }
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
    border-radius: 32px;
    .consultant__content {
      padding: 40px;
      &-title {
        margin-bottom: 16px;
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
      &-btn {
        margin-bottom: 52px;
        #green-button {
          padding: 21px 67px;
        }
      }
    }
  }
}
@media (max-width: 512px) {
  .consultant__wrapper {
    max-width: 512px;
    background-size: 150% 100%;
    .consultant__content {
      padding: 38px 9px 10px 10px;
      &-title {
        margin-bottom: 16px;
        h2 {
          font-size: 35px;
          line-height: 36px;
        }
        br {
          display: block;
        }
      }
      &-subtitle {
        padding-left: 0;
        margin-bottom: 42px;
        span:nth-child(1) {
          display: none;
        }
        span:nth-child(2) {
          display: block;
          font-size: 20px;
          line-height: 23px;
        }
      }
      &-btn {
        margin-bottom: 43px;
        #green-button {
          border-radius: 20px;
          span {
            font-size: 18px;
          }
        }
      }
    }
  }
}
@media (max-width: 359px) {
  .consultant__wrapper {
    max-width: 359px;
    .consultant__content {
      padding: 5px;
      &-title {
        margin-bottom: 20px;
        h2 {
          font-size: 25px;
        }
      }
      &-subtitle {
        margin-bottom: 20px;
        span {
          font-size: 16px;
        }
      }
      &-btn {
        margin-bottom: 20px;
        #green-button {
          padding: 15px 80px;
        }
      }
    }
  }
}
</style>
