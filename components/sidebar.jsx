import { useRouter } from 'next/router';

import Modal from './modal';
import Form from './form';
import { createMovies } from '../actions/index';

const Sidebar = (props) => {
 const { categories } = props;
 const router = useRouter();
 let closeModal = null;

 const handlerCreateMovie = (movie) => {
  createMovies(movie).then((m) => {
   closeModal.closeModal();
   router.push('/');
  });
 };

 return (
  <div className='col-lg-3 mt-3'>
   <Modal ref={(el) => (closeModal = el)} submitButton={false}>
    <Form handleFormSubmit={handlerCreateMovie} />
   </Modal>
   <h1 className='my-4'>Shop Name</h1>
   <div className='list-group'>
    {categories.map((c) => (
     <a href='#' className='list-group-item' key={c.id}>
      {c.name}
     </a>
    ))}
   </div>
  </div>
 );
};

export default Sidebar;
