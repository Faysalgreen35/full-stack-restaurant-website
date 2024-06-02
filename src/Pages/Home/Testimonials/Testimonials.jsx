import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from "swiper/modules";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'

const Testimonials = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch('https://bistro-boss-restaurant-server-olive-alpha.vercel.app/reviews')
            .then(res => res.json())
            .then(data => {
                setReviews(data)
            })
    }, [])
    return (
        <section className="my-20">
            <SectionTitle
                subHeading={'What Our Client Say'}
                heading={'Testimonials'}
            ></SectionTitle>
            <Swiper  loop={true} navigation={true}  autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }} modules={[Navigation,Autoplay]} className="mySwiper">

                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}

                    >
                        <div className="flex flex-col items-center my-16 mx-24  ">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly
                            />
                            <p className="py-8 ">{review.details}</p>
                            <h3 className="text-2xl text-orange-400 ">{review.name}</h3>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;