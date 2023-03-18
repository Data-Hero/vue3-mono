import { App, Component, createApp } from 'vue';
import VueHello from './components/VueHello.vue';

const app: App<Component> = createApp(VueHello);

app.mount('#app');
