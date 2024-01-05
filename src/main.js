import { createApp } from "vue";
import "./css/main.css";
import App from "./App.vue";

const app = createApp(App);

// Vue Popper
import Popper from "vue3-popper";
app.component("Popper", Popper);

app.mount("#app");
