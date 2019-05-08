import { requestGetMovieById } from '../../api';
import { STATUSES } from '../../data';

export const SET_RESPONSE_MOVIE_BY_ID = 'SET_RESPONSE_MOVIE_BY_ID';
export const SET_RESPONSE_STATUS_MOVIE_BY_ID = 'SET_RESPONSE_STATUS_MOVIE_BY_ID';

export const setResponseMovieById = (payload) => ({
  type: SET_RESPONSE_MOVIE_BY_ID,
  payload,
});

export const setResponseStatusMovieById = (payload) => ({
  type: SET_RESPONSE_STATUS_MOVIE_BY_ID,
  payload,
});

export const fetchMovieById = (id) => (dispatch) => {
  dispatch(setResponseMovieById({ data: [], total: 0 }));
  dispatch(setResponseStatusMovieById(STATUSES.PENDING));
  return requestGetMovieById(id)
    .then(res => dispatch(setResponseMovieById(res)))
    .catch(err => {
      dispatch(setResponseStatusMovieById(STATUSES.ERROR));
      console.log('ERROR!!! ', err);
    });
};
