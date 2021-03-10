import React from 'react';
import Sidebar from '../components/sidebar';
import Carousel from '../components/carousel';
import MovieList from '../components/movieList';

import { getMovies, getCategories } from '../actions/index';

const Home = (props) => {
 const { movies, images, categories } = props;

 const changeCategory = (category) => {
  alert(`change : ${category}`);
 };

 return (
  <div>
   <div className='container'>
    <div className='row'>
     <Sidebar categories={categories} changeCategory={changeCategory} />
     <div className='col-lg-9'>
      <Carousel images={images} />
      <MovieList movies={movies || []} />
     </div>
    </div>
   </div>
  </div>
 );
};

Home.getInitialProps = async () => {
 const movies = await getMovies();
 const categories = await getCategories();
 const images = movies.map((i) => {
  return {
   id: `image-${i.id}`,
   image: i.image,
   title: i.title,
  };
 });
 return { movies, images, categories };
};

// class Home extends Component {
//  static async getInitialProps() {
//   const movies = await getMovies();
//   return { movies };
//  }

//  // constructor(props) {
//  //  super(props);
//  //  this.state = {
//  //   movies: [],
//  //   error: '',
//  //  };
//  // }

//  // it's only called in client browser
//  // componentDidMount() {
//  //  getMovies()
//  //   .then((movies) => {
//  //    this.setState({ movies });
//  //   })
//  //   .catch((error) => {
//  //    this.setState({ error });
//  //   });
//  // }

//  // state = {
//  //  movies: [],
//  // };

//  // called only once when component is mounted!
//  // async componentDidMount() {
//  //  const movies = await getMovies();
//  //  this.setState({ movies });
//  // }

//  render() {
//   const { movies } = this.props;
//   return (
//    <div>
//     <Head>
//      <title>Home</title>
//      <link
//       rel='stylesheet'
//       href='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css'
//       integrity='sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T'
//       crossOrigin='anonymous'
//      />
//      <script
//       src='https://code.jquery.com/jquery-3.3.1.slim.min.js'
//       integrity='sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo'
//       crossOrigin='anonymous'
//      ></script>
//      <script
//       src='https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js'
//       integrity='sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1'
//       crossOrigin='anonymous'
//      ></script>
//      <script
//       src='https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js'
//       integrity='sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM'
//       crossOrigin='anonymous'
//      ></script>
//     </Head>

//     <Navbar />
//     <div className='container'>
//      <div className='row'>
//       <Sidebar />
//       <div className='col-lg-9'>
//        <Carousel />
//        <MovieList movies={movies} />
//       </div>
//      </div>
//     </div>
//     <Footer />
//    </div>
//   );
//  }
// }

export default Home;
