import { AXIOS_API, API_KEY } from '../service/api';
import { ref } from 'vue';

export default function useTvShow() {
  let tv_shows = ref([]);

  const IMG_URL = 'https://image.tmdb.org/t/p/w370_and_h556_bestv2/';

  function fetchPopularTvShow() {
    AXIOS_API.get(`tv/popular?api_key=${API_KEY}&page=1`)
      .then((response) => {
        tv_shows.value = response.data.results;
        console.log(response.data.results)
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return {
    IMG_URL,
    tv_shows,
    fetchPopularTvShow,
  };
}
