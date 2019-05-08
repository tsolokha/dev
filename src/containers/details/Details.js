import React from 'react';
import { Link } from 'react-router-dom';
import { STATUSES } from '../../data';


const Details = ({
  budget,
  genres,
  overview,
  poster_path,
  release_date,
  revenue,
  runtime,
  tagline,
  title,
  vote_average,
  vote_count,
  movieByIdRequestStatus,
}) => movieByIdRequestStatus === STATUSES.SUCCESS
  ? (
    <div className="row mb-4 poster text-white">
      <div className="col-12 col-sm-6 col-lg-4 col-xl-3 mb-3">
        <img src={poster_path} className="rounded w-100" alt={title} />
      </div>
      <div className="col-12 col-sm-6 col-lg-8 col-xl-9 mb-3">
        {!!title &&
        <div className="row mb-1">
          <div className="col-8 col-md-9 font-weight-bold">
            <h2>{title}</h2>
          </div>
          <div className="col-4 col-md-3 d-flex justify-content-md-end">
            <Link className="btn btn-secondary" to="/">Search</Link>
          </div>
        </div>}
        {!!tagline &&
        <div className="row mb-1">
          <div className="col-12">
            <h5>{tagline}</h5>
          </div>
        </div>}
        {!!genres && genres.length &&
        <div className="row mb-1">
          <div className="col-12">
            <b>Genres:</b> {genres.join(', ')}
          </div>
        </div>}
        {!!runtime &&
        <div className="row mb-1">
          <div className="col-12">
            <b>Runtime:</b> {runtime} min
          </div>
        </div>}
        {!!budget &&
        <div className="row mb-1">
          <div className="col-12">
            <b>Budget:</b> {budget} $
          </div>
        </div>}
        {!!release_date &&
        <div className="row mb-1">
          <div className="col-12">
            <b>Release date:</b> {release_date}
          </div>
        </div>}
        {!!revenue &&
        <div className="row mb-1">
          <div className="col-12">
            <b>Revenue:</b> {revenue}
          </div>
        </div>}
        {!!vote_average &&
        <div className="row mb-1">
          <div className="col-12">
            <b>Vote average:</b> {vote_average}
          </div>
        </div>}
        {!!vote_count &&
        <div className="row mb-1">
          <div className="col-12">
            <b>Vote count:</b> {vote_count}
          </div>
        </div>}
        {!!overview &&
        <div className="row">
          <div className="col-12">
            <b>Overview:</b>
            <p>{overview}</p>
          </div>
        </div>}
      </div>
      <div className="col-12 bg-secondary p-2 pl-4">
        <h6 className="d-inline-block text-light">
          Films by genres {genres.join(', ')}
        </h6>
      </div>
    </div>
  )
  : (
    <div className="row vh-100 w-100 d-flex justify-content-center align-items-center">
      <div className="spinner-border text-primary" />
    </div>
  );

export default Details;
