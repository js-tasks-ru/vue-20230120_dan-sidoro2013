import { createApp, defineComponent } from './vendor/vue.esm-browser.js';

const API_URL = 'https://course-vue.javascript.ru/api';

function fetchMeetupById(meetupId) {
  return fetch(`${API_URL}/meetups/${meetupId}`).then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      return response.json().then((error) => {
        throw error;
      });
    }
  });
}

const App = defineComponent({
  name: 'App',
  data() {
    return {
        titles: null, 
        meetupId: '1',
    };
  },

  computed: {
    changeMeetupId(){
      return fetchMeetupById(this.meetupId).then((meetups) => {
        this.titles = meetups.title;
      });
    }
  },

  mounted() {
    fetchMeetupById(this.meetupId).then((meetups) => {
      this.titles = meetups.title;
    });
  },

  methods: {
  },
});
const app = createApp(App);
const vm = app.mount('#app');

