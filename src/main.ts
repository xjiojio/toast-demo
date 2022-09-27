import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { createPinia } from 'pinia';
import VConsole from 'vconsole';

import { Toast, Button } from '@nutui/nutui';

if (import.meta.env.VITE_API_ENV !== 'prod') {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const vConsole = new VConsole();
}

createApp(App).use(router).use(createPinia()).use(Toast).use(Button).mount('#app');

let toast = Toast.loading('登录成功', {
  duration: 0,
});
console.log('toast', toast);
setTimeout(() => {
  toast.hide();
}, 3000);
