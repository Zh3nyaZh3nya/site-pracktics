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
            line-height: $base-font-size;
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
  }
}
</style>
