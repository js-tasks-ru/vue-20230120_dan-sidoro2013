import { createApp, defineComponent } from './vendor/vue.esm-browser.js';


const App = defineComponent({
  name: 'App',
  data() {
    return {
        counter: 0, 
    };
  },
  methods: {
    changeCounter(){
        this.counter += 1
    }
  },
});
const app = createApp(App);
const vm = app.mount('#app');

