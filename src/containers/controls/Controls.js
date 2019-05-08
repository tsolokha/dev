import React from 'react';
import CustomInput from '../../components/CustomInput';
import SearchBy from '../../components/SearchBy';
import SortBy from '../../components/SortBy';


const Controls = ({
  search,
  searchBy,
  sortBy,
  total,
  searchMovies,
  setSearch,
  setSearchBy,
  setSortBy,
}) => (
  <div className="poster pt-5">
    <div className="row pt-5 pb-2">
      <CustomInput
        setSearch={setSearch}
        search={search}
        searchMovies={searchMovies}
      />
    </div>
    <div className="row p-1 pb-5">
      <div className="col-8 offset-2">
        <SearchBy
          searchBy={searchBy}
          setSearchBy={setSearchBy}
        />
      </div>
    </div>
    <div className="row p-2 mb-3 bg-secondary">
      <div className="col-md-4 offset-md-2">
        <h6 className="d-inline-block text-light">
          Total {total} films
        </h6>
      </div>
      <div className="col-md-4 offset-md-2">
        <SortBy
          sortBy={sortBy}
          setSortBy={setSortBy}
        />
      </div>
    </div>
  </div>
);

export default Controls;
