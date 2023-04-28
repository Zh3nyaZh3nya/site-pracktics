import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import globalComponents from "@/components/UI/global-components";

import "@/assets/scss/global.css";
const app = createApp(App);

globalComponents.forEach((component) => {
  app.component(component.name, component);
});

app.use(store).use(router).mount("#app");
