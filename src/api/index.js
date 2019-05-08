import { stringify } from 'qs';
import { BASE_URL } from '../data';

export const requestGetMovies = (params) => {
  const paramsUrl = Object.keys(params).length
    ? `?${stringify(params)}`
    : ''
  return fetch(`${BASE_URL}movies${paramsUrl}`)
    .then(res => res.json());
};

export const requestGetMovieById = (id) => fetch(`${BASE_URL}movies/${id}`)
    .then(res => res.json());
