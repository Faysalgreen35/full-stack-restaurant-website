 
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'; 
import 'swiper/css/pagination';
import {  Pagination } from 'swiper/modules';
import slide1 from'../../../assets/home/slide1.jpg'
import slide2 from'../../../assets/home/slide2.jpg'
import slide3 from'../../../assets/home/slide3.jpg'
import slide4 from'../../../assets/home/slide4.jpg'
import slide5 from'../../../assets/home/slide5.jpg' 
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';


const Category = () => {
    return (
        <section>
            <SectionTitle
            subHeading={"From 11.00am to 10.00pm"}
            heading={"Order Online"}
            >


            </SectionTitle>
     
       
      <Swiper
        slidesPerView={3}
        spaceBetween={8}
        freeMode={true}
        pagination={{
          clickable: true,
        }}
        modules={[ Pagination]}
        className="mySwiper mb-4"
      >
        <SwiperSlide><div className='  '>
        <img className='text-center items-center justify-center mx-auto' src={slide1} alt="" />
        <h1 className='text-white    font-bold text-3xl -mt-12 mx-auto  uppercase text-center '>Salads</h1>
        </div>
        </SwiperSlide>
        <SwiperSlide><div className='  '>
        <img className='text-center items-center justify-center mx-auto' src={slide2} alt="" />
        <h1 className='text-white    font-bold text-3xl -mt-12 mx-auto  uppercase text-center '> Pizzas</h1>
        </div>
        </SwiperSlide>
        <SwiperSlide><div className='  '>
        <img className='text-center items-center justify-center mx-auto' src={slide3} alt="" />
        <h1 className='text-white    font-bold text-3xl -mt-12 mx-auto  uppercase text-center '>Soups</h1>
        </div>
        </SwiperSlide>
        <SwiperSlide><div className='  '>
        <img className='text-center items-center justify-center mx-auto' src={slide4} alt="" />
        <h1 className='text-white    font-bold text-3xl -mt-12 mx-auto  uppercase text-center '>Deserts</h1>
        </div>
        </SwiperSlide>
        <SwiperSlide><div className='  '>
        <img className='text-center items-center justify-center mx-auto' src={slide5} alt="" />
        <h1 className='text-white    font-bold text-3xl -mt-12 mx-auto  uppercase text-center  '>Salads</h1>
        </div>
        </SwiperSlide>
       
         
      </Swiper>
      </section>
    
    );
};

export default Category;