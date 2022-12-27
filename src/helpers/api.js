import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/';

export const getMovies = async () => {
  const response = await axios.get(
    `3/trending/all/day?api_key=0b525a53cb370404cdd4aabe5119e729
`
  );
  console.log(response.data.results);
  return response.data.results;
};

export const getMoviesbyQuery = async query => {
  const response = await axios.get(
    `3/search/movie?api_key=0b525a53cb370404cdd4aabe5119e729&query=${query}&language=en-US&page=1&include_adult=false
`
  );
  console.log(response.data.results);
  return response.data.results;
};

export const getMoviesbyId = async id => {
  const response = await axios.get(
    `3/movie/${id}?api_key=0b525a53cb370404cdd4aabe5119e729&language=en-US
`
  );
  console.log(response.data);
  return response.data;
};

export const getCast = async id => {
  const response = await axios.get(
    `3/movie/${id}/credits?api_key=0b525a53cb370404cdd4aabe5119e729&language=en-US
`
  );
  console.log(response.data);
  return response.data.cast;
};

export const getReviews = async id => {
  const response = await axios.get(
    `3/movie/${id}/reviews?api_key=0b525a53cb370404cdd4aabe5119e729&language=en-US&page=1
`
  );
  console.log(response.data.results);
  return response.data.results;
};
