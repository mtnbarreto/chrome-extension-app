import { createApp } from 'vue'
import Actions from '../../components/Actions.vue'

const _article = document.querySelector('article')

const MOUNT_EL_ID = 'gmail-actions-extension'

let mountEl = document.getElementById(MOUNT_EL_ID)
if (mountEl) {
  mountEl.innerHTML = ''
}
mountEl = document.createElement('div')
mountEl.setAttribute('id', MOUNT_EL_ID)
document.body.appendChild(mountEl)

const _vm = createApp(Actions).mount(mountEl)

// chrome.runtime.onMessage.addListener(message => {
//   if (message.toggleVisible) {
//     vm.visible = !vm.visible;
//   }
// });
