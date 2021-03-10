import { Component } from 'react';
import Router from 'next/router';
import MovieCreatForm from '../../../components/form';

import { getMovieById, updateMovie } from '../../../actions/index';

class EditMovie extends Component {
 static async getInitialProps({ query }) {
  const movie = await getMovieById(query.id);
  return { movie };
 }

 handleUpdateMovie = (movie) => {
  updateMovie(movie).then((m) => {
   Router.push('/movies/[id]', `/movies/${m.id}`);
  });
 };

 render() {
  const { movie } = this.props;
  return (
   <div className='container'>
    <h1> Edit Movie </h1>
    <MovieCreatForm initialData={movie} handleSubmitForm={this.handleUpdateMovie} />
   </div>
  );
 }
}

export default EditMovie;
