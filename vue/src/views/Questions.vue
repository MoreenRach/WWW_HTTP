<template>
  <div>
    <!--- Matriculation number(s): 801040, 800999 -->
    <!--- It took me 2 hours to solve the tasks in this file -->
    <div class="container">
      <h2>Questions & Answers</h2>

      <b-card-group columns>
        <b-card v-bind:key="question.title" v-for="question in questions"
                :title="question.title">
          <div slot="header">
            <span v-if="question.points === 1">{{ question.points}} Point</span>
            <span v-else>{{ question.points }} Points</span>
          </div>

          <p class="question card-text">
            {{ question.question }}
          </p>

          <p class="answer card-text">
            {{ question.answer }}
          </p>
        </b-card>
      </b-card-group>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Questions',
  data () {
    return {
      questions: [
        {
          'title': 'SCSS',
          'question': 'Why is it preferable to use SCSS for large projects? What are the downsides of using it?',
          'points': 2,
          'answer': 'general specifications can be defined centrally, once entered properties can be used again and again, the compiler checks for correct syntax, detects typos, aborts the compilation process and writes the errors to the output file, Clear and uniform spelling (new employees can quickly familiarize themselves with existing code), the compiler optimizes the CSS file, automated creation of CSS sprites. Few disadvantages: difficult debugging when line comments are disabled and when using external plugins version conflicts may occur'
        },
        {
          'title': 'Vue Component',
          'question': 'What is a Vue Component?',
          'points': 1,
          'answer': 'Components in Vue can be reused over and over again in ower templates. This allows you to break your application and the templates in it into smaller, reusable pieces.'
        },
        {
          'title': 'Vue Router',
          'question': 'What is the responsibility of the Vue Router? (file src/router/index.js)',
          'points': 1,
          'answer': 'The Vue Router is the router for Vue.js. It makes it possible to built Single Page Applications with Vue.js. It allows the user to switch between pages without refreshing the page. You need a router when you need to sync URLs to views in your app.'
        },
        {
          'title': 'Vue Watcher',
          'question': 'When is a watcher like "currentPage" in src/components/API.vue called?',
          'points': 1,
          'answer': 'What is a watcher? Someone observing the current page and returns error if something went wrong.'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
  @import '../style/bootstrap-component-include';

  .question {
    color: $gray-700;
  }

  .card-columns {
    @include media-breakpoint-only(sm) {
      column-count: 2;
    }
    @include media-breakpoint-only(md) {
      column-count: 3;
    }
    @include media-breakpoint-only(lg) {
      column-count: 4;
    }
  }

</style>
