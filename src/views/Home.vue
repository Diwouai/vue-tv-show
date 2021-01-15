<template>
  <div class="home">
    <Popular />
  </div>
</template>

<script lang="ts">
import Popular from '../components/Popular.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  components: {
    Popular
  }
});
</script>