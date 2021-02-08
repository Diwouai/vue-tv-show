<template>
  <div class="home">
    <TvShow category="top_rated" />
  </div>
</template>

<script lang="ts">
import TvShow from '../components/TvShow.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TopRated',
  components: {
    TvShow,
  },
});
</script>
