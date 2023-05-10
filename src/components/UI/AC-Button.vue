<template>
  <button class="custom__button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "ac-button",
};
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";
.custom__button {
  padding: 14px 32px;
  border-radius: 16px;
  color: #fff;
  background: black;
  span {
    font-weight: 600;
    font-size: 28px;
    line-height: 100%;
  }
}
#black-button {
  border-radius: 16px;
  padding: 14px 37px;
  span {
    font-size: 20px;
  }
}
#green-button {
  padding: 32px 80px;
  color: #000;
  background: $green-color;
  border-radius: 48px;
}
@media (max-width: 512px) {
  #green-button {
    border-radius: 20px;
  }
}
</style>
