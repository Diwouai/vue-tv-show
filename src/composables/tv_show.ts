import { AXIOS_API, API_KEY } from '../service/api';
import { ref } from 'vue';

export default function useTvShow() {
  let tv_shows = ref<any[]>([]);
  let currentPage = ref(1);

  const IMG_URL = 'https://image.tmdb.org/t/p/w370_and_h556_bestv2/';

  function fetchTvShow(category: string, initial: string = 'INITIAL') {
    if (initial != 'INITIAL') {
      currentPage.value++;
    }
    AXIOS_API.get(`tv/${category}?api_key=${API_KEY}&page=${currentPage.value}`)
      .then((response) => {
        tv_shows.value = [...tv_shows.value, ...response.data.results];
        console.log('Category : ' + category);
        console.log(currentPage.value);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return {
    IMG_URL,
    tv_shows,
    fetchTvShow,
  };
}
