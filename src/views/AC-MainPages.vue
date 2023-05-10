<template>
  <ac-header
    @scrollToJob="scrollToJob"
    @scrollToQuestions="scrollToQuestions"
  />
  <div class="main__pages">
    <ac-description-bot />
    <ac-manual-bot ref="Job" />
    <ac-auto-consultant />
    <ac-questions ref="Questions" />
    <a-c-buy-subscription />
  </div>
  <ac-footer />
</template>

<script>
import AcDescriptionBot from "@/components/AC-DescriptionBot";
import AcManualBot from "@/components/AC-ManualBot";
import AcAutoConsultant from "@/components/AC-AutoConsultant";
import AcQuestions from "@/components/AC-Questions";
import ACBuySubscription from "@/components/AC-BuySubscription";
export default {
  name: "ac-main-pages",
  components: {
    AcQuestions,
    AcAutoConsultant,
    AcManualBot,
    AcDescriptionBot,
    ACBuySubscription,
  },
  data() {
    return {
      scrollPosition: 0,
    };
  },
  methods: {
    scrollToJob() {
      this.scrollPosition = this.$refs.Job.$el.offsetTop - 90;
      window.scrollTo({
        top: this.scrollPosition,
        behavior: "smooth",
      });
    },
    scrollToQuestions() {
      this.scrollPosition = this.$refs.Questions.$el.offsetTop - 110;
      window.scrollTo({
        top: this.scrollPosition,
        behavior: "smooth",
      });
    },
  },
};
</script>

<style lang="scss">
#app {
  background: #b5b5b5;
}
.main__pages {
  padding: 0 40px;
}
@media (max-width: 512px) {
  .main__pages {
    padding: 1px;
  }
}
@media (max-width: 360px) {
  .main__pages {
    padding: 1px;
  }
}
</style>
