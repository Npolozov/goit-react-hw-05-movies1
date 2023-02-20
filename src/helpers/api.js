import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/';
// const TRENGING_PATH = '/trending/movie/day';
const API_KEY = '0b525a53cb370404cdd4aabe5119e729';

export const getMovies = async (page, genres) => {
  const { data } = await axios.get('3/trending/movie/day', {
    params: {
      api_key: API_KEY,
      page: `${page}`,
    },
  });
  console.log(data);
  return data;
};

export const getMoviesbyQuery = async query => {
  const response = await axios.get(`3/search/movie`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
      query,
      page: 1,
      include_adult: false,
    },
  });
  console.log(response.data.results);
  return response.data.results;
};

export const getMoviesbyId = async id => {
  const response = await axios.get(`3/movie/${id}`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });
  console.log(response.data);
  return response.data;
};

export const getCast = async id => {
  const response = await axios.get(`3/movie/${id}/credits`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });
  console.log(response.data);
  return response.data.cast;
};

export const getReviews = async id => {
  const response = await axios.get(`3/movie/${id}/reviews`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
      page: 1,
    },
  });
  console.log(response.data.results);
  return response.data.results;
};

export const getVideo = async id => {
  const { data } = await axios.get(`3/movie/${id}`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
      append_to_response: 'videos',
    },
  });
  console.log(data.videos.results);
  return data.videos.results;
};

export const byGenres = async () => {
  const { data } = await axios.get(`3/genre/movie/list`, {
    params: {
      api_key: API_KEY,
      language: 'en-US',
    },
  });
  console.log(data);
  return data.genres;
};

export const getGenres = async (page, genres) => {
  const { data } = await axios.get('3/discover/movie', {
    params: {
      api_key: API_KEY,
      page: `${page}`,
      with_genres: `${genres}`,
    },
  });
  console.log(data);
  return data;
};
