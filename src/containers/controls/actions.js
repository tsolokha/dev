export const SET_SEARCH = 'SET_SEARCH';
export const SET_SEARCH_BY = 'SET_SEARCH_BY';
export const SET_SORT_BY = 'SET_SORT_BY';

export const setSearch = (payload) => ({ type: SET_SEARCH, payload });
export const setSearchBy = (payload) => ({ type: SET_SEARCH_BY, payload });
export const setSortBy = (payload) => ({ type: SET_SORT_BY, payload });
