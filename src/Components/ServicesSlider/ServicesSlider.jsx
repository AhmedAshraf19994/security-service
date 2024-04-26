// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import ServiceCard from "../ServiceCrad/ServiceCard";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/navigation";

import "./style.css";

// import required modules
import {
  Pagination,
  EffectCoverflow,
  Autoplay,
  Navigation,
} from "swiper/modules";
import { services } from "../../utils/services";

export default function App() {
  return (
    <>
      <Swiper
        modules={[EffectCoverflow, Pagination, Autoplay, Navigation]}
        speed={4000}
        navigation={true}
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={2}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          waitForTransition: true,
        }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        className="mySwiper"
      >
        {services &&
          services.map((service) => (
            <SwiperSlide key={service.title}>
              <ServiceCard
                title={service.title}
                src={service.src}
                text={service.text}
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </>
  );
}
