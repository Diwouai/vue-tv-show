<template>
  <div class="flex flex-col min-h-screen bg-white dark:bg-gray-900">
    <Header />
    <div class="container my-12 mx-auto px-4 md:px-12">
      <router-view :key="$route.fullPath" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/Header.vue';

export default defineComponent({
  name: 'App',
  components: {
    Header,
  },
});
</script>
