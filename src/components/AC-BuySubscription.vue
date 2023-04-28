<template>
  <section class="subscription__wrapper">
    <div class="subscription__content">
      <div class="subscription__content__column">
        <div class="subscription__content__column__left">
          <div class="subscription__content__column__left-title">
            <span>2000₸</span>
            <span>в год</span>
          </div>
          <div class="subscription__content__column__left__price">
            <div class="subscription__content__column__left__price-disc">
              <span>-83%</span>
            </div>
            <div class="subscription__content__column__left__price-full">
              <span>12 000₸/в год</span>
              <span>Акция до 10 апреля</span>
            </div>
          </div>
          <div class="subscription__content__column__left__price-btn">
            <ac-button id="green-button"><span>Купить</span></ac-button>
          </div>
        </div>
        <div class="subscription__content__column__right">
          <img src="@/assets/images/Device.png" alt="" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: "ac-buy-subscription",
};
</script>

<style lang="scss">
.subscription__wrapper {
  max-width: 1360px;
  width: 100%;
  margin: 0 auto;
  .subscription__content {
    margin-bottom: 16px;
    &__column {
      position: relative;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      padding: 98px 45px 65px 78px;
      &__left {
        padding: 48px 58.5px;
        &-title {
          display: grid;
          font-weight: 900;
          font-size: 164px;
          line-height: 136px;
          margin-bottom: 36px;
          span:nth-child(2) {
            font-weight: 800;
            font-size: 56px;
            line-height: 65px;
          }
        }
        &__price {
          display: flex;
          column-gap: 32px;
          margin-bottom: 36px;
          &-disc {
            background: #292929;
            border-radius: 60px;
            color: #fff;
            padding: 12px;
            font-weight: 500;
            font-size: $base-font-size + 4px;
            line-height: $base-line-height + 8px;
          }
          &-full {
            span:nth-child(1) {
              font-weight: 500;
              font-size: $base-font-size + 4px;
              line-height: $base-line-height + 8px;
              text-decoration-line: line-through;
            }
            span:nth-child(2) {
              font-weight: 500;
              font-size: $small-font-size - 4px;
              line-height: $small-line-height - 6px;
              color: #6c6c6c;
            }
          }
          &-btn {
            #green-button {
              padding: 52px 252px;
            }
          }
        }
      }
      &__right {
        transform: rotate(6.04deg);
        position: absolute;
        right: 80px;
        bottom: 30px;
      }
    }
  }
}
@media (max-width: 1360px) {
  .subscription__wrapper {
    max-width: 786px;
    width: 100%;
    margin: 0 auto;
    .subscription__content {
      &__column {
        &__left {
          padding: 0;
        }
        &__right {
          display: none;
        }
      }
    }
  }
}
@media (max-width: 768px) {
  .subscription__wrapper {
    max-width: 360px;
    margin: 0 auto;
    .subscription__content {
      &__column {
        padding: 20px;
        &__left {
          padding: 0;
          &-title {
            font-size: 90px;
            line-height: 80px;
            margin-bottom: 29px;
            span:nth-child(2) {
              font-size: 22px;
              line-height: 32px;
            }
          }
          &__price {
            &-disc {
              padding: 5px 20px;
              font-size: $base-font-size - 20px;
              line-height: $base-line-height - 12px;
            }
            &-full {
              display: grid;
              grid-template-columns: 1fr;
              span:nth-child(1) {
                font-weight: 500;
                font-size: $base-font-size - 20px;
                line-height: $base-line-height - 20px;
                text-decoration-line: line-through;
              }
              span:nth-child(2) {
                font-weight: 500;
                font-size: $small-font-size - 16px;
                line-height: $small-line-height - 16px;
                color: #6c6c6c;
              }
            }
            &-btn {
              #green-button {
                padding: 21px 117px;
              }
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
