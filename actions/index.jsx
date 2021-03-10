import axios from 'axios';

const http = 'http://localhost:3000';
const MOVIE_DATA = [];

const CATEGORY_DATA = [
 { id: '1', name: 'Drama' },
 { id: '2', name: 'Action' },
 { id: '3', name: 'Adventure' },
 { id: '4', name: 'Historical' },
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
 return axios.delete(`${http}/api/v1/movies/${id}`).then((res) => res.data);
};
