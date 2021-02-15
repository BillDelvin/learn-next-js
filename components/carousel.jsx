const Banner = (props) => {
 const { images } = props;
 return (
  <div id='carouselExampleIndicators' className='carousel slide my-4' data-ride='carousel'>
   <ol className='carousel-indicators'>
    {images.map((image, index) => (
     <li
      data-target='#carouselExampleIndicators'
      data-slide-to={index}
      className={index === 0 ? 'active' : ''}
      key={image.id}
     ></li>
    ))}
   </ol>
   <div className='carousel-inner' role='listbox'>
    {images.map((image, index) => (
     <div className={index === 0 ? 'carousel-item active' : 'carousel-item'} key={image.id}>
      <img className='d-block w-100' src={image.image} alt={image.title} height='350px' />
     </div>
    ))}
   </div>
   <a
    className='carousel-control-prev'
    href='#carouselExampleIndicators'
    role='button'
    data-slide='prev'
   >
    <span className='carousel-control-prev-icon' aria-hidden='true'></span>
    <span className='sr-only'>Previous</span>
   </a>
   <a
    className='carousel-control-next'
    href='#carouselExampleIndicators'
    role='button'
    data-slide='next'
   >
    <span className='carousel-control-next-icon' aria-hidden='true'></span>
    <span className='sr-only'>Next</span>
   </a>
  </div>
 );
};

export default Banner;
