<template>
  <div>
    <!--- Matriculation number(s): 801040, 800999 -->
    <!--- It took me ? hours to solve the tasks in this file -->
    <!--- It took me 1 hours to set up the Vue application -->
    <div class="container">
      <h2>API "Content" - Page {{ currentPage }}</h2>

      <!-- TODO second pagination like pagination below table here (1 Point) -->

      <!-- Bonus points for a loading screen appearing when loading new entries -->
      <b-card-group columns class="mb-4">
        <b-card v-bind:key="entry['id']"
                v-for="entry in pageEntries"
                :header="entry['category']"
                :img-src="getImageSrc(entry)"
                img-fluid
                img-alt="Image described by captions"
                img-top>
          <ul>
            <!-- TODO insert list of captions here, consider caption['text'] as a unique value, use v-for to accomplish this (3 Points) -->
          </ul>
        </b-card>
      </b-card-group>

      <b-pagination align="center" size="md" :total-rows="totalCount" v-model="currentPage" :per-page="itemsPerPage"></b-pagination>
    </div>
  </div>
</template>

<script>
import { ITEMS_PER_PAGE } from '../constants'

export default {
  name: 'API',
  data () {
    return {
      'currentPage': 1,
      'itemsPerPage': ITEMS_PER_PAGE,
      'pageEntries': [
      ],
      'totalCount': 0
    }
  },
  watch: {
    currentPage: function () {
      // trigger loading new items here (we do not care about race conditions here, but if you want to prevent them, you probably get some bonus points ;) )
      this.loadActualPageEntries()
    }
  },
  methods: {
    loadActualPageEntries: function () {
      //console.log(this.currentPage)
      let offset = 0;
      offset = ITEMS_PER_PAGE * (this.currentPage -1);
      fetch('https://flask-training-api.www-technologien.marschke.me/v1/images?limit=' + ITEMS_PER_PAGE + '&offset=' + offset).then(response => {
          console.log(response);
          response.json().then(json => {
          console.log(json);
          this.pageEntries = json.images;
          this.totalCount = json.count;
        });
        
      });
      
      
      // TODO load up to date page entries and store them in pageEntries (this.pageEntries) (3 Points)
      // TODO Don't forget to update totalCount by request information! (1 Point)
    },
    getImageSrc: function (entry) {
      // TODO get real address (1 Point)
      return 'https://flask-training-api.www-technologien.marschke.me/v1/images/' + entry.id + '/bitmap'
    }
  },
  // TODO ensure loadActualPageEntries() gets called when the component gets displayed. Take a look at https://vuejs.org/v2/guide/instance.html#Lifecycle-Diagram (2 Points)
  mounted: function () {
  this.loadActualPageEntries();
    // Code that will run only after the
    // entire view has been rendered
  
}
  

}
</script>

<style lang="scss" scoped>
  @import '../style/bootstrap-component-include';
  .question {
    color: $gray-700;
  }

  // TODO What does it do? Explain especially the @include command (1 Point class explanation, 2 Points include explanation)
  // Mit "." wird die Klasse angesprochen (in diesem Fall die Klasse "card-columns"). Alle Elemente, die diese Klasse erhalten, werden dann mit den Formatierungsbefehlen in den geschweiften Klammern dahinter formatiert
  // Die includes legen die breakpoins für verschiedene Bildschirmauflösungen fest. Bei Bootstrap teilt man in der Regel den verfügbaren Screen in vier Klassen ein (sm, md, lg und xl). In diesem Fall wird cards auf Displays
  // mit kleineren Auflösungen (md = Tablets, 768px und mehr) in zwei Spalten angezeigt, bei größeren Screens (lg = Desktops, 992px und mehr) mit 3 Spalten und bei richtig großem verfügbarem Screen (xl = große Desktops,
  // 1200px und mehr) dargestellt.
  .card-columns {
    @include media-breakpoint-only(md) {
      column-count: 2;
    }
    @include media-breakpoint-only(lg) {
      column-count: 3;
    }
    @include media-breakpoint-only(xl) {
      column-count: 4;
    }
  }
</style>
