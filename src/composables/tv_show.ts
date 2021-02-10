import { AXIOS_API, API_KEY } from '../service/api';
import { ref } from 'vue';

export default function useTvShow() {
  let tv_shows = ref<any[]>([]);
  let currentPage = ref(1);
  let loading = ref(true);
  let show_detail = ref([]);

  const IMG_URL = 'https://image.tmdb.org/t/p/w370_and_h556_bestv2/';

  const fetchTvShow = (category: string, datas: string = 'INITIAL') => {
    if (datas === 'LOAD_MORE') {
      currentPage.value++;
    }
    AXIOS_API.get(`tv/${category}?api_key=${API_KEY}&page=${currentPage.value}`)
      .then((response) => {
        tv_shows.value = [...tv_shows.value, ...response.data.results];
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        loading.value = false;
      });
  };

  const fetchShowDetail = (showID: number) => {
    AXIOS_API.get(`tv/${showID}?api_key=${API_KEY}&language=en-US`)
      .then((response) => {
        show_detail.value = response.data;
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return {
    IMG_URL,
    tv_shows,
    fetchTvShow,
    loading,
    show_detail,
    fetchShowDetail,
  };
}
