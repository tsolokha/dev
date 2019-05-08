import React from 'react';

const MoviesList = ({ movies }) => (
  <div className="row">
    {movies.map(({ id, poster_path, title, genres }) => (
      <a
        href={`/details/${id}`}
        key={id}
        className="col-sm-6 col-md-4 col-lg-3 col-xl-2"
      >
        <div className="card">
          <img className="card-img-top" src={poster_path} alt=""/>
          <div className="card-body">
            <h4 className="card-title">{title}</h4>
            <p className="card-text">{genres.join(', ')}</p>
          </div>
        </div>
      </a>
    ))}
  </div>
);

// function MoviesList ({ movies }) {
//   return (
//     <div className="row">
//       {movies.map(({ id, poster_path, title, genres }) => (
//         <a
//           href={`/details/${id}`}
//           key={id}
//           className="col-sm-6 col-md-4 col-lg-3 col-xl-2"
//         >
//           <div className="card">
//             <img className="card-img-top" src={poster_path} alt=""/>
//             <div className="card-body">
//               <h4 className="card-title">{title}</h4>
//               <p className="card-text">{genres.join(', ')}</p>
//             </div>
//           </div>
//         </a>
//       ))}
//     </div>
//   );
// }


export default MoviesList;
