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
          <img src="@/assets/images/rotateDevice.png" alt="" />
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
  background: #fff;
  border-radius: 60px;
  .subscription__content {
    margin-bottom: 16px;
    &__column {
      position: relative;
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      padding: 98px 45px 65px 78px;
      &__left {
        padding: 43px 0px;
        background: #d9d9d9;
        border-radius: 48px;
        &-title {
          padding-left: 68px;
          display: grid;
          font-weight: 900;
          font-size: 168px;
          line-height: 144px;
          margin-bottom: 55px;
          span:nth-child(2) {
            font-weight: 800;
            font-size: 56px;
            line-height: 65px;
          }
        }
        &__price {
          display: flex;
          align-items: center;
          column-gap: 32px;
          margin-bottom: 62px;
          padding-left: 68px;
          &-disc {
            margin-left: 13px;
            span {
              background: #292929;
              border-radius: 60px;
              color: #fff;
              font-weight: 500;
              font-size: 44px;
              line-height: 56px;
              padding: 13px;
            }
          }
          &-full {
            display: flex;
            flex-direction: column;
            span:nth-child(1) {
              font-weight: 500;
              font-size: 44px;
              line-height: 58px;
              text-decoration-line: line-through;
            }
            span:nth-child(2) {
              font-weight: 500;
              font-size: 28px;
              line-height: 32px;
              color: #6c6c6c;
            }
          }
          &-btn {
            padding: 0 60px;
            #green-button {
              padding: 52px 252px;
            }
          }
        }
      }
      &__right {
        position: absolute;
        right: 16px;
        bottom: -30px;
      }
    }
  }
}
@media (max-width: 1360px) {
  .subscription__wrapper {
    max-width: 1360px;
    .subscription__content {
      &__column {
        &__right {
          right: 0px;
        }
      }
    }
  }
}
@media (max-width: 1240px) {
  .subscription__wrapper {
    max-width: 1024px;
    .subscription__content {
      &__column {
        &__left {
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
              font-size: 20px;
              line-height: 36px;
            }
            &-full {
              display: grid;
              grid-template-columns: 1fr;
              span:nth-child(1) {
                font-weight: 500;
                font-size: 20px;
                line-height: 28px;
                text-decoration-line: line-through;
              }
              span:nth-child(2) {
                font-weight: 500;
                font-size: 16px;
                line-height: 22px;
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
          display: block;
          img {
            width: 430px;
          }
        }
      }
    }
  }
}
@media (max-width: 1024px) {
  .subscription__wrapper {
    max-width: 768px;
    .subscription__content {
      &__column {
        padding: 51px 0px 38px 22px;
        &__left {
          padding: 28px 34px;
          &__price {
            &-disc {
              padding: 0px 20px;
            }
          }
        }
        &__right {
          right: 0px;
          img {
            width: 370px;
          }
        }
      }
    }
  }
}
@media (max-width: 768px) {
  .subscription__wrapper {
    .subscription__content {
      &__column {
        padding: 22px 0px 22px 22px;
        &__left {
          padding: 25px 25px;
          &-title {
            font-size: 60px;
            line-height: 30px;
            span:nth-child(2) {
              font-size: 20px;
              line-height: 28px;
            }
          }
          &__price {
            &-disc {
              padding: 10px;
              font-size: 18px;
              line-height: 30px;
            }
            &-full {
              span:nth-child(1) {
                font-weight: 500;
                font-size: 13px;
                line-height: 21px;
                text-decoration-line: line-through;
              }
              span:nth-child(2) {
                font-weight: 500;
                font-size: 11px;
                line-height: 17px;
                color: #6c6c6c;
              }
            }
            &-btn {
              #green-button {
                padding: 21px 70px;
              }
            }
          }
        }
        &__right {
          img {
            width: 200px;
          }
        }
      }
    }
  }
}
@media (max-width: 512px) {
  .subscription__wrapper {
    max-width: 512px;
    border-radius: 32px;
    .subscription__content {
      &__column {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 41px 20px;
        &__left {
          border-radius: 24px;
          padding: 27px 20px;
          max-width: 335px;
          &-title {
            font-size: 83px;
            line-height: 76px;
            margin-bottom: 24px;
            padding-left: 8px;
            span:nth-child(2) {
              font-size: 28px;
              line-height: 32px;
            }
          }
          &__price {
            column-gap: 8px;
            margin-bottom: 28px;
            padding-left: 0;
            &-disc {
              margin-left: 6px;
              span {
                padding: 7px;
                font-size: 20px;
                line-height: 28px;
              }
            }
            &-full {
              span:nth-child(1) {
                font-size: 21px;
                line-height: 30px;
              }
              span:nth-child(2) {
                font-size: 13px;
                line-height: 18px;
              }
            }
            &-btn {
              padding: 0;
              #green-button {
                padding: 21px 120px;
                span {
                  font-size: 17px;
                }
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
@media (max-width: 359px) {
  .subscription__wrapper {
    max-width: 280px;
    .subscription__content {
      &__column {
        padding: 22px 0px;
        &__left {
          padding: 25px 15px;
          &-title {
            font-size: 60px;
            line-height: 30px;
            span:nth-child(2) {
              font-size: 20px;
              line-height: 28px;
            }
          }
          &__price {
            &-disc {
              padding: 10px 20px;
              font-size: 18px;
              line-height: 30px;
            }
            &-full {
              span:nth-child(1) {
                font-weight: 500;
                font-size: 13px;
                line-height: 21px;
                text-decoration-line: line-through;
              }
              span:nth-child(2) {
                font-weight: 500;
                font-size: 11px;
                line-height: 17px;
                color: #6c6c6c;
              }
            }
            &-btn {
              #green-button {
                padding: 21px 70px;
              }
            }
          }
        }
        &__right {
          img {
            width: 200px;
          }
        }
      }
    }
  }
}
</style>
