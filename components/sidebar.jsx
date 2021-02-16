import React from 'react';

const Sidebar = (props) => {
 const { categories } = props;
 return (
  <div className='col-lg-3'>
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
