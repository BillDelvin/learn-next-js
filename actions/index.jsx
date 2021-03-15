import axios from 'axios';

const http = 'http://localhost:3000';
const MOVIE_DATA = [];

const CATEGORY_DATA = [
 { id: '0', name: 'all' },
 { id: '1', name: 'drama' },
 { id: '2', name: 'action' },
 { id: '3', name: 'adventure' },
 { id: '4', name: 'historical' },
];

export const getMovies = async () => {
 return await axios.get(`${http}/api/v1/movies`).then((response) => response.data);
};

export const getMovieById = async (id) => {
 const getMovieById = await axios
  .get(`${http}/api/v1/movies/${id}`)
  .then((response) => response.data);
 return getMovieById;
};

export const getCategories = () => {
 return new Promise((resolve, reject) => {
  setTimeout(() => {
   resolve(CATEGORY_DATA);
   // reject("can't fetch data");
  }, 50);
 });
};

export const createMovies = async (movie) => {
 movie.id = Math.random().toString(36).substr(2, 5);
 return await axios.post(`${http}/api/v1/movies`, movie).then((res) => res.data);
};

export const deleteMovie = async (id) => {
 return await axios.delete(`${http}/api/v1/movies/${id}`);
};

export const updateMovie = async (movie) => {
 return await axios.patch(`${http}/api/v1/movies/${movie.id}`, movie).then((res) => res.data);
};

export const getPosts = async () => {
 return await axios.get(`${http}/api/v1/posts`).then((res) => res.data);
};
