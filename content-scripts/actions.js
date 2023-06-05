import { createApp } from "vue";
import Actions from "../src/components/Actions.vue";
import '../src/style.css'

const article = document.querySelector('article');

const MOUNT_EL_ID = "gmail-actions-extension";

let mountEl = document.getElementById(MOUNT_EL_ID);
if (mountEl) {
  mountEl.innerHTML = "";
}
mountEl = document.createElement("div");
mountEl.setAttribute("id", MOUNT_EL_ID);
document.body.appendChild(mountEl);

const vm = createApp(Actions).mount(mountEl);

// chrome.runtime.onMessage.addListener(message => {
//   if (message.toggleVisible) {
//     vm.visible = !vm.visible;
//   }
// });