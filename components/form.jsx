import { useState } from 'react';

const Form = (props) => {
 const [form, setForm] = useState({
  name: '',
  description: '',
  rating: '',
  image: '',
  cover: '',
  longDesc: '',
 });

 const handleChange = (event) => {
  const { target } = event;
  const value = target.value;
  const name = target.name;
  setForm({ ...form, [name]: value });
 };

 const handleGenre = (event) => {
  const { options } = event.target;
  const optLength = options.length;
  let value = [];

  for (let i = 0; i < optLength; i++) {
   if (options[i].selected) {
    value.push(options[i].value);
   }
  }

  setForm({
   ...form,
   genre: value.toString(),
  });
 };

 const onSubmit = () => {
  props.handleFormSubmit({ ...form });
 };

 return (
  <form>
   <div className='form-group'>
    <label htmlFor='name'>Name</label>
    <input
     type='text'
     className='form-control'
     id='name'
     name='name'
     defaultValue={form.name}
     onChange={handleChange}
    />
   </div>
   <div className='form-group'>
    <label htmlFor='description'>Description</label>
    <input
     type='text'
     className='form-control'
     id='description'
     name='description'
     defaultValue={form.description}
     onChange={handleChange}
    />
   </div>
   <div className='form-group'>
    <label htmlFor='description'>Rating</label>
    <input
     type='number'
     max='5'
     min='0'
     className='form-control'
     id='rating'
     name='rating'
     placeholder='3'
     defaultValue={form.rating}
     onChange={handleChange}
    />
    <small id='emailHelp' className='form-text text-muted'>
     Max: 5, Min: 0{' '}
    </small>
   </div>
   <div className='form-group'>
    <label htmlFor='image'>Image</label>
    <input
     type='text'
     className='form-control'
     id='image'
     name='image'
     placeholder='http://.....'
     defaultValue={form.image}
     onChange={handleChange}
    />
   </div>
   <div className='form-group'>
    <label htmlFor='cover'>Cover</label>
    <input
     type='text'
     className='form-control'
     id='cover'
     name='cover'
     placeholder='http://......'
     defaultValue={form.cover}
     onChange={handleChange}
    />
   </div>
   <div className='form-group'>
    <label htmlFor='longDesc'>Long Description</label>
    <textarea
     className='form-control'
     id='longDesc'
     name='longDesc'
     rows='3'
     defaultValue={form.longDesc}
     onChange={handleChange}
    ></textarea>
   </div>
   <div className='form-group'>
    <label htmlFor='genre'>Genre</label>
    <select multiple className='form-control' id='genre' name='genre' onChange={handleGenre}>
     <option>drama</option>
     <option>music</option>
     <option>adventure</option>
     <option>historical</option>
     <option>action</option>
    </select>
   </div>
   <button type='button' onClick={onSubmit} className='btn btn-primary'>
    Create
   </button>
  </form>
 );
};

export default Form;
