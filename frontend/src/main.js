import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';
import 'vuetify/dist/vuetify.min.css';
import '@mdi/font/css/materialdesignicons.css'
import { createVuetify } from 'vuetify';
import * as components from 'vuetify/components';
import * as directives from 'vuetify/directives';
import moment from 'moment';

const currentTime = moment().format('YYYY-MM-DD HH:mm:ss');
console.log(currentTime);

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);

app.config.globalProperties.$http = axios;

app.use(vuetify).mount('#app');
