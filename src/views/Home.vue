<template>
  <div class="home">
    <TvShow category="popular" />
  </div>
</template>

<script lang="ts">
import TvShow from '../components/TvShow.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  components: {
    TvShow,
  },
});
</script>
