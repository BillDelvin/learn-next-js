import React, { Component, Fragment } from 'react';

class MovieList extends Component {
 shortText = (text) => {
  if (text && text.length > 200) {
   return text.substr(0, 200) + '....';
  } else {
   return text;
  }
 };

 renderMovies = () => {
  const { movies } = this.props;
  return movies.map((movie) => (
   <div className='col-lg-4 col-md-6 mb-4' key={movie.id}>
    <div className='card h-100'>
     <a href='#'>
      <img className='card-img-top' src={movie.image} alt={movie.name} />
     </a>
     <div className='card-body'>
      <h4 className='card-title'>
       <a href='#'>{movie.name}</a>
      </h4>
      <p className='card-text'>{this.shortText(movie.description)}</p>
     </div>
     <div className='card-footer'>
      <small className='text-muted'>{movie.rating}</small>
     </div>
    </div>
   </div>
  ));
 };
 render() {
  return (
   <Fragment>
    <div className='row'>{this.renderMovies()}</div>
   </Fragment>
  );
 }
}

export default MovieList;
