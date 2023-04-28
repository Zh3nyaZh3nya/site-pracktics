<template>
  <ac-header />
  <div class="main__pages">
    <ac-description-bot />
    <ac-function-bot />
    <ac-manual-bot />
    <ac-video-the-bot />
    <ac-auto-consultant />
    <ac-questions />
    <a-c-buy-subscription />
  </div>
  <ac-footer />
</template>

<script>
import AcDescriptionBot from "@/components/AC-DescriptionBot";
import AcFunctionBot from "@/components/AC-FunctionBot";
import AcManualBot from "@/components/AC-ManualBot";
import AcVideoTheBot from "@/components/AC-VideoTheBot";
import AcAutoConsultant from "@/components/AC-AutoConsultant";
import AcQuestions from "@/components/AC-Questions";
import ACBuySubscription from "@/components/AC-BuySubscription";
export default {
  name: "ac-main-pages",
  components: {
    AcQuestions,
    AcAutoConsultant,
    AcVideoTheBot,
    AcManualBot,
    AcFunctionBot,
    AcDescriptionBot,
    ACBuySubscription,
  },
};
</script>
