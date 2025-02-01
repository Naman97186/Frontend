// Import React and necessary libraries
import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';
// Import Swiper core and modules
import SwiperCore, { Navigation, Autoplay } from 'swiper';
// Import custom css
import './Slider.css';
import { Link } from 'react-router-dom';
import { Images } from '../../Constants';

// Initialize Swiper modules
SwiperCore.use([Navigation, Autoplay]);  // Use Swiper modules

const Slider = () => {
  return (
    <>
      <div className="swiper-container">
        <Swiper
          navigation={true}
          className="mySwiper"
          autoplay={{ delay: 5000 }} // Set autoplay delay (in milliseconds)
          loop={true}
          spaceBetween={0}
          slidesPerView={1}
        >
          {/* Swiper slides */}
          <SwiperSlide>
            <div className="slide-content">
              <img src={Images.img1} alt="Banner 1" />
              <div className="overlay-text p-5 md:p-20">
                <h3 className="text-xl md:text-7xl font-bold md:mb-4 uppercase">This Summer join Us!</h3>
                <p className="hidden md:block">Get your performance journey started at Raisers Academy with a free sports class. We offer world-class training experiences. Reach your full potential at Raisers Academy.</p>
                <Link to='/classes'>
                  <button className="btn border-[#AC9C63] border-2 rounded-none bg-black text-white hover:bg-[#AC9C63] md:mt-4 bg-opacity-20 hover:opacity-100">
                    Start Your Free Trial
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide-content">
              <img src={Images.img2} alt="Banner 2" />
              <div className="overlay-text p-5 md:p-20">
                <h3 className="text-xl md:text-7xl font-bold md:mb-4 uppercase">Join a Membership Program!</h3>
                <p className="hidden md:block">Raisers Academy membership offers something for every athlete. We offer world-class training experiences. Reach your full potential at Raisers Academy.</p>
                <Link to='/classes'>
                  <button className="btn border-[#AC9C63] border-2 rounded-none bg-black text-white hover:bg-[#AC9C63] md:mt-4 bg-opacity-20 hover:opacity-100">
                    Join Today
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="slide-content">
              <img src={Images.img3} alt="Banner 3" />
              <div className="overlay-text p-5 md:p-20">
                <h3 className="text-xl md:text-7xl font-bold md:mb-4 uppercase">Try a Free Sports Class!</h3>
                <p className="hidden md:block">Get your performance journey started at Raisers Academy with a free sports class. We offer world-class training experiences. Reach your full potential at Raisers Academy.</p>
                <Link to='/classes'>
                  <button className="btn border-[#AC9C63] border-2 rounded-none bg-black text-white hover:bg-[#AC9C63] md:mt-4 bg-opacity-20 hover:opacity-100">
                    Start Your Free Trial
                  </button>
                </Link>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Slider;
