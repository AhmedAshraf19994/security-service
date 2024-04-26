// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";

import "./hero.css";

// import required modules
import { Autoplay, EffectCoverflow, EffectFade } from "swiper/modules";

// /import pictures

import img1 from "../../../public/assets/images/pexels-scott-webb-430208.jpg";
import img2 from "../../../public/assets/images/security-woman.jpg";
import img3 from "../../../public/assets/images/img7.jpg";
import img11 from "../../../public/assets/images/img11.avif";
import img from "../../../public/assets/images/img.jpg";
import img10 from "../../../public/assets/images/img10.jpg";
import HeroSlide from "../HeroSlide/HeroSlide";

const Hero = () => {
  return (
    <section className="bg-primary_bg w-[100vw] h-[100dvh]" id="hero">
      <Swiper
        modules={[Autoplay, EffectFade, EffectCoverflow]}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
          waitForTransition: true,
        }}
        speed={4000}
        effect={"fade"}
        className="w-full h-full"
      >
        <SwiperSlide>
          <HeroSlide img={img} direction="left" />
        </SwiperSlide>
        <SwiperSlide>
          <HeroSlide img={img11} direction="left " />
        </SwiperSlide>
        {/* <SwiperSlide>
          <HeroSlide img={img10} />
        </SwiperSlide> */}
      </Swiper>
    </section>
  );
};

export default Hero;
