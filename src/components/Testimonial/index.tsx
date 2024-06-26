import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { userReviews } from './data';
import { FreeMode, Pagination } from 'swiper/modules';

const StarReview = ({ rating }: { rating: number }) => {
  // Calculate the number of yellow stars
  const yellowStars = Math.min(Math.max(rating, 0.5), 5);

  // Generate an array of stars based on the rating
  const stars = Array.from({ length: 5 }, (_, index) => {
    if (index + 1 <= yellowStars) {
      return (
        <span key={index} className="text-b-orange-200">
          ★
        </span>
      );
    } else {
      return <span key={index}>★</span>;
    }
  });

  return <div>{stars}</div>;
};

// breakpoints: {
//   // when window width is >= 320px
//   320: {
//     slidesPerView: 2,
//     spaceBetween: 20
//   },
//   // when window width is >= 480px
//   480: {
//     slidesPerView: 3,
//     spaceBetween: 30
//   },
//   // when window width is >= 640px
//   640: {
//     slidesPerView: 4,
//     spaceBetween: 40
//   }
// }

export default function Index() {
  return (
    <div className="max-w-[960px] mx-auto my-10 xl:my-20">
      <Swiper
        className="mySwiper"
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        slideActiveClass="activeSwipe"
        modules={[FreeMode, Pagination]}
        breakpoints={{
          320: {
            slidesPerView: 1.5,
            spaceBetween: 10,
            centeredSlides: true,
            // watchSlidesVisibility: true
          },
          640: {
            slidesPerView: 3,
            spaceBetween: 30,
          },
        }}
      >
        {userReviews.map((e, index) => (
          <SwiperSlide key={index}>
            <div className="max-w-[280px] px-4 h-[366px] xl:max-w-[302px] xl:h-[432px] text-center flex flex-col justify-between items-center">
              <div className='py-12 flex flex-col items-center justify-center'>
                <StarReview rating={e.star} />
                <p className="text-b-black-grey">{e.review}</p>
              </div>
              <div className='pb-12 flex flex-col items-center justify-center'>
                <Image
                  alt=""
                  src={e.avatar}
                  width={40}
                  height={40}
                  className="mt-6 xl:mt-12 mb-4"
                />
                <p className="text-b-black-200 uppercase">{e.name}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
