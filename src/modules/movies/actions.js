import { requestGetMovies } from '../../api';
import { STATUSES } from '../../data';

export const SET_RESPONSE_MOVIES = 'SET_RESPONSE_MOVIES';
export const SET_RESPONSE_STATUS_MOVIES = 'SET_RESPONSE_STATUS_MOVIES';

export const setResponse = (payload) => ({
  type: SET_RESPONSE_MOVIES,
  payload,
});

export const setResponseStatus = (payload) => ({
  type: SET_RESPONSE_STATUS_MOVIES,
  payload,
});


export const fetchMovies = (params = {}) => (dispatch) => {
  dispatch(setResponse({ data: [], total: 0 }));
  dispatch(setResponseStatus(STATUSES.PENDING));
  return requestGetMovies(params)
    .then(res => dispatch(setResponse(res)))
      .catch(err => {
        dispatch(setResponseStatus(STATUSES.ERROR));
        console.log('ERROR!!! ', err);
      });
};
