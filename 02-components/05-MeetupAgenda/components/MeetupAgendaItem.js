import { defineComponent } from '../vendor/vue.esm-browser.js';
import { agendaItemIcons, agendaItemDefaultTitles } from '../meetupService.js';

export default defineComponent({
  name: 'MeetupAgendaItem',
  data() {
    return {
      icons : agendaItemIcons,
      titles : agendaItemDefaultTitles,
      path : "../../src/assets/icons/icon-",
      lastPathToImage : '',
    }
  },
  components: {
    agendaItemIcons,
    agendaItemDefaultTitles,
  },

  methods: {
    checkImage(){
      let substr = '';
      let res = '';
      let obj = this.icons;
      for(let key in obj){
        if(key === this.$attrs.agendaItem.type){
          substr = obj[key];
        }
      }
      res = `${this.path}${substr}.svg`;
      return res;
    },

    checkTitles(){
      let title = this.$attrs.agendaItem.title;
      let titles = this.titles
      if(title === null){
        let keys = Object.keys(titles)
        return titles[keys[keys.length * Math.random() << 0]]
      }else{
        return title
      }
    },
  },

  template: `
    <div class="agenda-item">
      <div class="agenda-item__col">
        <img :src="checkImage()" class="icon" alt="key" />
      </div>
      <div class="agenda-item__col">{{this.$attrs.agendaItem.startsAt}} - {{this.$attrs.agendaItem.endsAt}}</div>
      <div class="agenda-item__col">
        <h3 class="agenda-item__title">{{checkTitles()}}</h3>
        <p class="agenda-item__talk">
          <div v-if="this.$attrs.agendaItem.speaker != null">
            <span>{{this.$attrs.agendaItem.speaker}}</span>
            <span class="agenda-item__dot"></span>
            <span class="agenda-item__lang">{{this.$attrs.agendaItem.language}}</span>
          </div>
          <div v-else></div>
        </p>
        <p>{{this.$attrs.agendaItem.description}}</p>
      </div>
    </div>`,
});
