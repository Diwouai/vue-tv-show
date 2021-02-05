<template>
  <div class="home">
    <Tv />
  </div>
</template>

<script lang="ts">
import Tv from '../components/Tv.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  components: {
    Tv
  }
});
</script>