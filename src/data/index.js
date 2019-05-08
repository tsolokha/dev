export const STATUSES = {
  NOT_STARTED: 'NOT_STARTED',
  PENDING: 'PENDING',
  SUCCESS: 'SUCCESS',
  ERROR: 'ERROR',
};

export const BASE_URL = 'https://reactjs-cdp.herokuapp.com/';

export const SEARCH_BY = {
  TITLE: 'title',
  GENRES: 'genres',
};

export const SORT_BY_OPTIONS = {
  RATING: { value: 'vote_average_api_code', label: 'Vote average' },
  DATE: { value: 'release_date', label: 'Vote average' },
};

export const SORT_BY = {
  RATING: 'vote_average',
  DATE: 'release_date',
};

export const SORT_ORDER = {
  ASC: 'asc',
  DESC: 'desc',
};

export const MIN_SEARCH_LENGTH = 2;
