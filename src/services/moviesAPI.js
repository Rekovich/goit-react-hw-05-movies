import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY = 'bf1b18a8f71345d05dd12a0ab0ee762f';



export const getMoviesTrending = async () => {
  const options = {
    params: {
        api_key: API_KEY,
    }
}

const response = await axios.get('/trending/movie/day', options);
return response.data.results;
};

export const getMoviesSearch = async query => {
  const options = {
    params: {
        api_key: API_KEY,
        query,
    }
}

const response = await axios.get('/search/movie', options)
return response.data.results;
};

export const getMovieDetails = async id => {
  const options = {
    params: {
        api_key: API_KEY,
    }
}

const response = await axios.get(`/movie/${id}`, options)
return response.data;
};

export const getMovieCredits = async movieId => {
  const options = {
    params: {
        api_key:API_KEY,
    }
}

const response = await axios.get(`/movie/${movieId}/credits`, options);
return response.data.cast;
};

export const getMovieReviews = async id => {
  const options = {
    params: {
        api_key: API_KEY,
    }
}

const response = await axios.get(`/movie/${id}/reviews`, options);
return response.data.results;
};
