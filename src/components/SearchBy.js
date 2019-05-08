import React from 'react';
import { SEARCH_BY } from '../data';
import cn from 'classnames';


const SearchBy = ({ searchBy, setSearchBy }) => {
  const handlerSearchBy = (value) => () => setSearchBy(value);
  return (
    <>
      <h6 className="mr-2 d-inline-block text-light">
        Search by
      </h6>
      <div className="btn-group">
        <button
          onClick={handlerSearchBy(SEARCH_BY.TITLE)}
          type="button"
          className={cn('btn btn-sm text-light text-capitalize', {
            'btn-primary': searchBy === SEARCH_BY.TITLE
          })}
        >
          {SEARCH_BY.TITLE}
        </button>
        <button
          onClick={handlerSearchBy(SEARCH_BY.GENRES)}
          type="button"
          className={cn('btn btn-sm text-light text-capitalize', {
            'btn-primary': searchBy === SEARCH_BY.GENRES
          })}
        >
          {SEARCH_BY.GENRES}
        </button>
      </div>
    </>
  );
};

export default SearchBy;
