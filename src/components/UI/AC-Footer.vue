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
  background: #fff;
  border-radius: 60px 60px 0 0;
  &__nav {
    display: flex;
    justify-content: space-between;
    padding: 101px 55px 94px 66px;
    span {
      font-weight: 400;
      font-size: 25px;
      line-height: 28px;
    }
    &__company {
      display: grid;
      span {
        color: #a9abaa;
        margin-bottom: 16px;
      }
      img {
        margin-left: 112px;
        width: 142px;
      }
    }
  }
}
@media (max-width: 1360px) {
  .footer {
    max-width: 1240px;
    &__nav {
      padding: 40px 40px;
      span {
        font-size: 24px;
        line-height: 26px;
      }
    }
  }
}
@media (max-width: 1240px) {
  .footer {
    max-width: 1024px;
    &__nav {
      span {
        font-size: 16px;
      }
      &__company {
        text-align: end;
      }
    }
  }
}
@media (max-width: 1024px) {
  .footer {
    max-width: 768px;
  }
}
@media (max-width: 768px) {
  .footer {
    max-width: 768px;
    border-radius: 32px 32px 0 0;
    &__nav {
      display: grid;
      grid-template-columns: 1fr;
      row-gap: 20px;
      padding: 26px 20px;
      span {
        font-size: 18px;
        line-height: 20px;
      }
      &__company {
        text-align: start;
        span {
          color: #a9abaa;
        }
        img {
          margin-left: 0px;
          width: 134px;
        }
      }
    }
  }
}
</style>
