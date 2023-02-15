import { createApp, defineComponent } from './vendor/vue.esm-browser.js';


const App = defineComponent({
  name: 'App',
  data() {
    return {
        mathOperation : {
            operation: ""
        },

        inpValue : {
            firstInp: 0,
            secondInp: 0,
        },

        answer:{
            value: 0,
        }
    };
  },

  computed: {
    recalculationValue(){
        if(this.mathOperation.operation === 'sum'){
            return this.answer.value = this.inpValue.firstInp + this.inpValue.secondInp
        }else if(this.mathOperation.operation === 'subtract'){
            return this.answer.value = this.inpValue.firstInp - this.inpValue.secondInp
        }else if(this.mathOperation.operation === 'multiply'){
            return this.answer.value = this.inpValue.firstInp * this.inpValue.secondInp
        }else if(this.mathOperation.operation === 'divide'){
            return this.answer.value =  this.inpValue.firstInp / this.inpValue.secondInp
        }else{
            return this.answer.value = NaN
        }
    }
  },

  methods: {
  },
});
const app = createApp(App);
const vm = app.mount('#app');

