<template>
  <div>
    <nav class="flex items-center justify-between flex-wrap bg-black p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <svg
          class="fill-current h-8 w-8 mr-2"
          width="54"
          height="54"
          viewBox="0 0 54 54"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"
          />
        </svg>
        <span class="font-semibold text-xl tracking-tight">
          <router-link to="/" class="text-white" style="text-decoration: none"
            >TV Show App Demo</router-link
          >
        </span>
      </div>
      <div class="block lg:hidden">
        <button
          class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
          @click="toogle_menu"
        >
          <svg
            class="fill-current h-3 w-3 text-black dark:text-white"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div
        class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden pt-6 lg:pt-0"
        id="nav-content"
      >
        <div class="text-sm lg:flex-grow">
          <router-link
            class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-green-100 mr-4"
            to="/"
            style="text-decoration: none"
            >Home
          </router-link>
          <!-- <router-link
            class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-green-100 mr-4"
            to="/upcoming"
            style="text-decoration: none"
            >Upcoming
          </router-link> -->
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Header',
  methods: {
    toogle_menu(): void {
      const nav = <HTMLElement>document.getElementById('nav-content');
      nav.classList.toggle('hidden');
    },
  },
});
</script>
