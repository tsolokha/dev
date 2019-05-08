import { SEARCH_BY, SORT_BY, SORT_ORDER } from '../../data';
import { SET_SEARCH, SET_SEARCH_BY, SET_SORT_BY } from './actions';

export const initialState = {
  search: '',
  searchBy: SEARCH_BY.TITLE,
  sortBy: SORT_BY.DATE,
  sortOrder: SORT_ORDER.ASC,
};

export default function controls(state = initialState, action) {
  switch (action.type) {
    case SET_SEARCH: {
      const { payload } = action;
      return { ...state, search: payload };
    }
    case SET_SEARCH_BY: {
      const { payload } = action;
      return { ...state, searchBy: payload };
    }
    case SET_SORT_BY: {
      const { payload } = action;
      return { ...state, sortBy: payload };
    }

    default:
      return state;
  }
}
