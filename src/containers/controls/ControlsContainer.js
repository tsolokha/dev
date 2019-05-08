import React, { Component } from 'react';
import { connect } from 'react-redux';
import { MIN_SEARCH_LENGTH } from '../../data';
import { fetchMovies } from '../../modules/movies/actions';
import { setSearch, setSearchBy, setSortBy } from './actions';
import MoviesListContainer from '../moviesList/MoviesListContainer';
import Controls from './Controls';

class ControlsContainer extends Component {
  searchMovies = () => {
    const { search, searchBy, sortBy, sortOrder, fetchMovies } = this.props;
    const requestParams = search.length > MIN_SEARCH_LENGTH
      ? { search, searchBy, sortBy, sortOrder }
      : { sortBy, sortOrder };
    fetchMovies(requestParams);
  };

  componentDidUpdate(prevProps) {
    const isSortByChange = prevProps.sortBy !== this.props.sortBy;
    const isSearchChange = prevProps.search !== this.props.search
      && this.props.search.length > MIN_SEARCH_LENGTH;
    const isSearchReset = prevProps.search.length && !this.props.search;

    if (isSortByChange || isSearchChange || isSearchReset) {
      this.searchMovies();
    }
  }

  render() {
    return (
      <>
        <Controls
          {...this.props}
          searchMovies={this.searchMovies}
        />
        <MoviesListContainer />
      </>
    );
  }
}

export default connect((state) => ({
  search: state.controls.search,
  searchBy: state.controls.searchBy,
  sortBy: state.controls.sortBy,
  sortOrder: state.controls.sortOrder,
  total: state.moviesModule.total,
}), {
  setSearch,
  setSearchBy,
  setSortBy,
  fetchMovies,
})(ControlsContainer);
