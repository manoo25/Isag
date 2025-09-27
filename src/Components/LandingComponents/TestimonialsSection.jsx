
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/autoplay";
import { Autoplay } from "swiper/modules";
import TestimonialCard from "./TestimonialCard";
// import { fetchTestimonials } from "./../../Redux/Slices/testimonialsSlice";
import "./testimonials.css"; 
function TestimonialsSection() {


  return (
    <div className="testimonials-section pt-5" id="testimonials-section">
      <h2 className="testimonials-title mt-5">آراء عملائنا</h2>
      <div className="swiper-container">
        <Swiper
          modules={[Autoplay]}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            320: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
        
            <SwiperSlide key={1}>
              <TestimonialCard />
            </SwiperSlide>
            <SwiperSlide key={2}>
              <TestimonialCard />
            </SwiperSlide>
            <SwiperSlide key={3}>
              <TestimonialCard />
            </SwiperSlide>
           
         
        </Swiper>
      </div>
    </div>
  );
}

export default TestimonialsSection;