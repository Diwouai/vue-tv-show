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
    <div class="flex items-center justify-center w-full px-8">
      <button
        class="font-bold-body-weight focus:outline-none border-2 border-transparent transition-colors duration-200 group w-auto sm:w-1/3 flex items-center justify-center h-10 text-base rounded-lg px-4 bg-black text-white hover:text-gray-300 text-dark focus:border-grey-700 dark:bg-white dark:text-black transform hover:scale-110 motion-reduce:transform-none"
        @click="fetchTvShow(categoryName, 'LOAD_MORE')"
      >
        <div
          class="transition duration-200 transform ease-in-out opacity-100 scale-100"
        >
          Load More
        </div>
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import useTvShow from '../composables/tv_show';
import useUtils from '../composables/utils';
import { defineComponent, onMounted } from 'vue';

export default defineComponent({
  name: 'TvShow',
  props: {
    category: String,
  },
  setup(props) {
    const { tv_shows, fetchTvShow, IMG_URL } = useTvShow();
    const { formatDate } = useUtils();
    const categoryName = props.category || '';

    onMounted(() => fetchTvShow(categoryName));

    return {
      tv_shows,
      IMG_URL,
      formatDate,
      fetchTvShow,
      categoryName,
    };
  },
});
</script>
