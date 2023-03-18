import { App, createApp } from 'vue';
import VueHello from './components/VueHello.vue';

const app: App<Element> = createApp(VueHello);

app.mount('#app');