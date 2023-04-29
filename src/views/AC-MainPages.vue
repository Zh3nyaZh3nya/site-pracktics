<template>
  <ac-header :scrollToJob="scrollToJob" />
  <div class="main__pages">
    <ac-description-bot />
    <ac-manual-bot />
    <ac-auto-consultant />
    <ac-questions />
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
};
</script>

<style lang="scss">
#app {
  background: #d9d9d9;
}
.main__pages {
  padding: 0 40px;
}
@media (max-width: 512px) {
  .main__pages {
    padding: 0;
  }
}
</style>
