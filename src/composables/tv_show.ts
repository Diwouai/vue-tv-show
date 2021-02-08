import { AXIOS_API, API_KEY } from '../service/api';
import { ref } from 'vue';

export default function useTvShow() {
  let tv_shows = ref<any[]>([]);
  let currentPage = ref(1);
  let loading = ref(true);

  const IMG_URL = 'https://image.tmdb.org/t/p/w370_and_h556_bestv2/';

  const fetchTvShow = (category: String, initial: string = 'INITIAL') => {
    if (initial === 'LOAD_MORE') {
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
      })
      .finally(() => {
        loading.value = false;
      });
  };

  return {
    IMG_URL,
    tv_shows,
    fetchTvShow,
    loading,
  };
}
