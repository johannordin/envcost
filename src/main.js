import App from "./App.html";
import { data as categories } from "./data";

const app = new App({
  target: document.body,
  data: {
    name: "world",
    categories
  }
});

window.app = app;

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () =>
    navigator.serviceWorker.register("/sw.js")
  );
}

export default app;
