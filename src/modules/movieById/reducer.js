import { STATUSES } from '../../data';
import {
  SET_RESPONSE_MOVIE_BY_ID,
  SET_RESPONSE_STATUS_MOVIE_BY_ID,
} from './actions';

export const initialState = {
  data: {
    budget: 0,
    genres: [],
    id: 0,
    overview: '',
    poster_path: '',
    release_date: '',
    revenue: 0,
    runtime: 0,
    tagline: '',
    title: '',
    vote_average: 0,
    vote_count: 0,
  },
  requestStatus: STATUSES.NOT_STARTED,
}

export default function movieByIdModule(state = initialState, action) {
  switch (action.type) {
    case SET_RESPONSE_STATUS_MOVIE_BY_ID: {
      const { payload } = action;
      return { ...state, requestStatus: payload };
    }
    case SET_RESPONSE_MOVIE_BY_ID: {
      const { payload } = action;
      return {
        ...state,
        data: payload,
        requestStatus: STATUSES.SUCCESS,
      };
    }
    default:
      return state;
  }
}
