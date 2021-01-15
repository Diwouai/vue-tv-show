<template>
  <div class="flex flex-wrap -mx-1 lg:-mx-4">
    <div
      class="my-1 px-1 w-full md:w-1/3 lg:my-4 lg:px-4 lg:w-1/4"
      v-for="tv in tv_shows"
      :key="tv.id"
    >
      <section class="overflow-hidden rounded-lg shadow-lg dark:bg-gray-600">
        <!-- <router-link :to="`/movie/${movie.id}`">
          <img
            class="block h-auto w-full"
            :src="IMG_URL + movie.poster_path"
            :alt="movie.title"
          />
        </router-link> -->
        <img
          class="block h-auto w-full"
          :src="IMG_URL + tv.poster_path"
          :alt="tv.name"
        />

        <header
          class="flex items-center justify-between leading-tight p-2 md:p-4"
        >
          <h2 class="text-base font-bold text-black dark:text-white">
            <!-- <router-link
              :to="`/movie/${movie.id}`"
              class="text-black dark:text-white hover:text-teal-400"
              style="text-decoration: none"
              >{{ movie.title }}</router-link
            > -->
            {{ tv.name }}
          </h2>
        </header>
        <header
          class="flex items-center justify-between leading-tight p-2 md:p-4"
        >
          <p class="text-black dark:text-white">
            {{ formatDate(tv.first_air_date) }}
          </p>
        </header>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import useTvShow from '../composables/tv_show';
import useUtils from '../composables/utils';
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
  name: 'Popular',
  setup() {
    const { tv_shows, fetchPopularTvShow, IMG_URL } = useTvShow();
    const { formatDate } = useUtils();

    onMounted(() => fetchPopularTvShow());

    return {
      tv_shows,
      IMG_URL,
      formatDate,
    };
  },
});
</script>
