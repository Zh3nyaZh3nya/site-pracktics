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
  text-align: center;
  .consultant__content {
    padding: 100px 82px 92px 83px;
    margin-bottom: 16px;
    &-title {
      font-weight: 800;
      font-size: $h2-font-size - 8px;
      line-height: $h2-line-height - 8px;
      color: #fff;
      margin-bottom: 20px;
    }
    &-subtitle {
      font-size: $base-font-size;
      line-height: $base-font-size;
      color: #fff;
      margin-bottom: 60px;
    }
  }
}
</style>
