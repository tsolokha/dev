import React from 'react';
import { SORT_BY } from '../data';
import cn from 'classnames';


const SortBy =({ sortBy, setSortBy }) => {
  const handlerSortBy = (value) => () => setSortBy(value);
  return (
    <>
      <h6 className="mr-2 d-inline-block">
        Sort by
      </h6>
      <div className="btn-group">
        <button
          onClick={handlerSortBy(SORT_BY.DATE)}
          type="button"
          className={cn('btn btn-sm text-capitalize', {
            'btn-success': sortBy === SORT_BY.DATE
          })}
        >
          {SORT_BY.DATE}
        </button>
        <button
          onClick={handlerSortBy(SORT_BY.RATING)}
          type="button"
          className={cn('btn btn-sm text-capitalize', {
            'btn-success': sortBy === SORT_BY.RATING
          })}
        >
          {SORT_BY.RATING}
        </button>
      </div>
    </>
  );
};

export default SortBy;
