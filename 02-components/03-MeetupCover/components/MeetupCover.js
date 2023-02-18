import { defineComponent } from '../vendor/vue.esm-browser.js';

export default defineComponent({
  name: 'MeetupCover',
  props: {
    title: String,
    image: String,
  },
  template: `
    <div class="meetup-cover" :style="image && \`--bg-url: url('\${image}')\`">
        <h1 class="meetup-cover__title">{{this.title}}</h1>
    </div>`,
});
