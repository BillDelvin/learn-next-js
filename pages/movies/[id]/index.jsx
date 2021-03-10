import { useRouter } from 'next/router';
import Link from 'next/link';
import { getMovieById, deleteMovie } from '../../../actions/index';

const Movie = (props) => {
 const router = useRouter();
 const { id } = router.query;
 const { movie } = props;

 const handleDeleteMovie = (id) => {
  deleteMovie(id).then(() => {
   router.push('/');
  });
 };

 return (
  <div className='container mt-3'>
   <div className='jumbotron'>
    <h1 className='display-4'>{movie.name}</h1>
    <p className='lead'>{movie.description}</p>
    <hr className='my-4' />
    <p>{movie.genre}</p>
    <button className='btn btn-primary mr-2'>Learn More</button>
    <button className='btn btn-danger mr-2' onClick={() => handleDeleteMovie(movie.id)}>
     Delete
    </button>
    <Link href={`${id}/edit`} as={`${id}/edit`}>
     <a className='btn btn-warning'>Edit</a>
    </Link>
   </div>
   <p>{movie.longDesc}</p>
  </div>
 );
};

Movie.getInitialProps = async ({ query }) => {
 const movie = await getMovieById(query.id);
 return { movie };
};

export default Movie;
