<template>
  <div>
    <nav class="flex items-center justify-between flex-wrap bg-black p-6">
      <div class="flex items-center flex-shrink-0 text-white mr-6">
        <svg
          class="fill-current h-8 w-8 mr-2 text-white"
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
          <router-link
            class="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-green-100 mr-4"
            to="/airing-today"
            style="text-decoration: none"
            >Airing Today
          </router-link>
        </div>
        <div class="text-sm lg:flex-grow text-right text-white">
          <button @click="toggleDark">
            <div v-if="isDark">
              <svg
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                ></path>
              </svg>
            </div>
            <div v-else>
              <svg
                fill="none"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
                ></path>
              </svg>
            </div>
          </button>
        </div>
      </div>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useDark, useToggle } from '@vueuse/core';

export default defineComponent({
  name: 'Header',
  setup() {
    const toogle_menu = () => {
      const nav = <HTMLElement>document.getElementById('nav-content');
      nav.classList.toggle('hidden');
    };

    const isDark = useDark();
    const toggleDark = useToggle(isDark);

    console.log(isDark);

    return {
      toogle_menu,
      toggleDark,
      isDark,
    };
  },
});
</script>
