import { defineComponent } from '../vendor/vue.esm-browser.js';
import UiContainer from './UiContainer.js';
import UiAlert from './UiAlert.js';
import MeetupView from '../../06-MeetupView/components/MeetupView.js';
import { fetchMeetupById } from '../meetupService';

export default defineComponent({
  name: 'PageMeetup',

  data(){
    return{
      meetup: null,
      state: 'loading',
    }
  },

  props: {
    meetupId : {
      type: Number,
      required: true,
    }
  },

  components: {
    UiAlert,
    UiContainer,
    MeetupView,
  },

  computed: {
    checkMeetupId(){
      this.state = "loading"
      fetchMeetupById(this.meetupId)
        .then((meetups) => {
          this.meetup = meetups;
          this.state = "complite"
        });
    },
    
  },


  template: `
    <div class="page-meetup">
      <UiContainer v-if="this.state == 'loading'">
        <UiAlert>Загрузка...</UiAlert>
      </UiContainer>
      <UiContainer v-else-if="this.state == 'error'">
        <UiAlert>error</UiAlert>
      </UiContainer>
      <UiContainer v-else-if="this.state == 'complite'">
        <MeetupView :meetup="meetup" />
      </UiContainer>
    </div>`,
});
