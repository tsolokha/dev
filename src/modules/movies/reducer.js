import { STATUSES } from '../../data';
import { SET_RESPONSE_MOVIES, SET_RESPONSE_STATUS_MOVIES } from './actions';

export const initialState = {
  data: [],
  total: 0,
  requestStatus: STATUSES.NOT_STARTED,
};

export default function moviesModule(state = initialState, action) {
  switch (action.type) {
    case SET_RESPONSE_STATUS_MOVIES: {
      const { payload } = action;
      return { ...state, requestStatus: payload };
    }
    case SET_RESPONSE_MOVIES: {
      const { payload: { data, total } } = action;
      return { ...state, data, total };
    }
    default:
      return state;
  }
}
