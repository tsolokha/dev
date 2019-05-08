import React from 'react';


const CustomInput = ({ search, setSearch, searchMovies}) => {

  const handlerChangeSearch = (event) => setSearch(event.target.value);

  return (
    <div className="input-group col-8 offset-2">
      <input
        value={search}
        onChange={handlerChangeSearch}
        type="text"
        className="form-control"
        placeholder="Start type..."
      />
      <div className="input-group-append" onClick={searchMovies}>
        <span className="input-group-text">Search</span>
      </div>
    </div>
  );
};

export default CustomInput;
