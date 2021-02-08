<template>
  <div class="home">
    <TvShow category="on_the_air" />
  </div>
</template>

<script lang="ts">
import TvShow from '../components/TvShow.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'OnTheAir',
  components: {
    TvShow,
  },
});
</script>
