import { createApp } from "vue";

import App from "./App.vue";

import Particles from "@tsparticles/vue3";
import { loadSlim } from "@tsparticles/slim";

import "uno.css";

import "@/styles/index.css";

const app = createApp(App);

app.use(Particles, {
  init: async (engine) => await loadSlim(engine),
});

app.mount("#app");
