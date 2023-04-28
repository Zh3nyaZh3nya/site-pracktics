<template>
  <footer class="footer">
    <div class="footer__nav">
      <span>Пользовательское соглашение</span>
      <span>Техническая поддержка</span>
      <div class="footer__nav__company">
        <span>Разработано командой</span>
        <img src="@/assets/images/nameCompany.png" alt="" />
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "ac-footer",
};
</script>

<style lang="scss">
.footer {
  max-width: 1360px;
  width: 100%;
  margin: 0 auto;
  &__nav {
    display: flex;
    justify-content: space-between;
    padding: 94px 56px;
    span {
      font-weight: 400;
      font-size: 24px;
      line-height: 28px;
    }
    &__company {
      display: grid;
      span {
        color: #a9abaa;
      }
      img {
        margin-left: 120px;
        width: 134px;
      }
    }
  }
}
</style>
