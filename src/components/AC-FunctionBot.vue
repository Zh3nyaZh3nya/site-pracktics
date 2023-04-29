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
          <div class="function__content__reminders__option-img">
            <img
              :src="require('@/assets/images/' + reminder.imgFunc)"
              alt="#"
            />
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
          descFunc: "и о многом другом",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";
.function__wrapper {
  display: block;
  max-width: 1360px;
  width: 100%;
  margin: 0 auto;
  padding-top: 84px;
  .function__content {
    &-title {
      text-align: center;
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
      &__option {
        &-img {
          display: flex;
          align-items: center;
          justify-content: center;
          min-height: 268px;
          text-align: center;
          background: #d9d9d9;
          border-radius: 52px;
          margin-bottom: 20px;
        }
        &-subtitle {
          font-weight: 500;
          font-size: $small-font-size;
          line-height: $small-line-height + 2px;
          text-align: center;
        }
      }
    }
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
        h2 {
          font-weight: 800;
        }
      }
      &__reminders {
        grid-template-columns: 1fr;
        &__option {
          &-img {
            background: #e5dfdf;
          }
        }
      }
    }
  }
}
</style>
