 import React from 'react'
 import './testimonial.css'
 import AVTR1 from '../../Assets/avatar1.jpg'
 import AVTR2 from '../../Assets/avatar2.jpg'
 import AVTR3 from '../../Assets/avatar3.jpg'
 import AVTR4 from '../../Assets/avatar4.jpg'
 
 import { Pagination } from 'swiper';

 import { Swiper, SwiperSlide } from 'swiper/react';
 
 // Import Swiper styles
 import 'swiper/css';
 import 'swiper/css/pagination';

 const Testimonial = () => {
   return (
     <section id = 'testimonial'>
        <h5>Review from clients</h5>
        <h2>Testimonials</h2>
        
        <Swiper className="container testimonial__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}>
          <SwiperSlide className ="testimonial">
            <div className="client__avatar">
              <img src={AVTR1} alt="Avtar One" />
            </div>
            <h5 className='client__name'>Ernest Achiever</h5>
              <small className='client__review'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum temporibus ullam tenetur, perspiciatis, consectetur, sequi a voluptas deleniti quae commodi quibusdam? Facilis, enim atque iste consequatur nesciunt dicta corporis.
              </small>
          </SwiperSlide>
          <SwiperSlide className ="testimonial">
            <div className="client__avatar">
              <img src={AVTR2} alt="Avtar One" />
            </div>
            <h5 className='client__name'>Ernest Achiever</h5>
              <small className='client__review'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum temporibus ullam tenetur, perspiciatis, consectetur, sequi a voluptas deleniti quae commodi quibusdam? Facilis, enim atque iste consequatur nesciunt dicta corporis.
              </small>
          </SwiperSlide>
          <SwiperSlide className ="testimonial">
            <div className="client__avatar">
              <img src={AVTR3} alt="Avtar One" />
            </div>
            <h5 className='client__name'>Ernest Achiever</h5>
              <small className='client__review'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum temporibus ullam tenetur, perspiciatis, consectetur, sequi a voluptas deleniti quae commodi quibusdam? Facilis, enim atque iste consequatur nesciunt dicta corporis.
              </small>
          </SwiperSlide>
          <SwiperSlide className ="testimonial">
            <div className="client__avatar">
              <img src={AVTR4} alt="Avtar One" />
            </div>
            <h5 className='client__name'>Ernest Achiever</h5>
              <small className='client__review'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe dolorum temporibus ullam tenetur, perspiciatis, consectetur, sequi a voluptas deleniti quae commodi quibusdam? Facilis, enim atque iste consequatur nesciunt dicta corporis.
              </small>
          </SwiperSlide>
        </Swiper>
     </section>
   )
 }
 
 export default Testimonial
 