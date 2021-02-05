<template>
  <div class="home">
    <TvShow category="airing_today" />
  </div>
</template>

<script lang="ts">
import TvShow from '../components/TvShow.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AiringToday',
  components: {
    TvShow,
  },
});
</script>
