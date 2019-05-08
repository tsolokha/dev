import React, { Component } from 'react';
import { connect } from 'react-redux';
import { SORT_BY, SORT_ORDER } from '../../data';
import { fetchMovies } from '../../modules/movies/actions';
import MoviesList from './MoviesList';


class MoviesListContainer extends Component {
  static defaultProps = {
    defaultParams: { sortBy: SORT_BY.DATE, sortOrder: SORT_ORDER.ASC },
  }

  componentDidMount() {
    this.props.fetchMovies({
      sortBy: SORT_BY.DATE,
      sortOrder: SORT_ORDER.ASC,
      ...this.props.defaultParams });
  }

  render() {
    return (
      <MoviesList {...this.props} />
    );
  }
}

export default connect((state) => ({
  movies: state.moviesModule.data,
}), {
  fetchMovies,
})(MoviesListContainer);
