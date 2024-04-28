import { createApp } from 'vue'
import App from './App.vue'
import axios from 'axios'
import Vuetify from 'vuetify';
import 'vuetify/dist/vuetify.min.css';

const app = createApp(App)
app.config.productionTip = false
app.config.globalProperties.$http = axios;

// Use Vuetify
app.use(Vuetify);

app.mount('#app');

const env = dotenv.config().parsed;

module.exports = {
  // Your webpack configuration
  plugins: [
    new webpack.DefinePlugin({
      'process.env': JSON.stringify(env)
    })
  ]
};
const tomorrowApiKey = process.env.TOMORROW_API_KEY;
const googleApiKey = process.env.GOOGLE_API_KEY;