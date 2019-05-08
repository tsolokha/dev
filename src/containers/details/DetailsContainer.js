import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchMovieById } from '../../modules/movieById/actions';
import Details from './Details';
import MoviesListContainer from '../moviesList/MoviesListContainer';


class DetailsContainer extends Component {
  componentDidMount() {
    const { match: { params: { id } } } = this.props;
    this.props.fetchMovieById(id);
  }

  render() {
    return (
      <>
        <Details { ...this.props } />
        {this.props.genres && this.props.genres.length &&
          <MoviesListContainer
            defaultParams={{ filter: this.props.genres.join(',') }}
          />}
      </>
    );
  }
}

export default connect((state) => ({
  budget: state.movieByIdModule.data.budget,
  genres: state.movieByIdModule.data.genres,
  id: state.movieByIdModule.data.id,
  overview: state.movieByIdModule.data.overview,
  poster_path: state.movieByIdModule.data.poster_path,
  release_date: state.movieByIdModule.data.release_date,
  revenue: state.movieByIdModule.data.revenue,
  runtime: state.movieByIdModule.data.runtime,
  tagline: state.movieByIdModule.data.tagline,
  title: state.movieByIdModule.data.title,
  vote_average: state.movieByIdModule.data.vote_average,
  vote_count: state.movieByIdModule.data.vote_count,
  movieByIdRequestStatus: state.movieByIdModule.requestStatus,
}), {
  fetchMovieById,
})(DetailsContainer);
