import classNames from 'classnames';
import React, { useState } from 'react';
import Image from 'next/image';
import { howItWorksIndividual, howItWorksBusiness } from './data';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';

import 'swiper/css';
import 'swiper/element/css/autoplay';

export default function Index() {
  const [activeTab, setActiveTab] = useState('individual');
  const [activeRole, setActiveRole] = useState(0);
  const [howItWorks, setHowItWorks] = useState(howItWorksIndividual);
  const setActiveHandler = (type: string) => {
    setActiveTab(type);
    if (type === 'individual') {
      setHowItWorks(howItWorksIndividual);
    } else {
      setHowItWorks(howItWorksBusiness);
    }
  };

  const slideImage = [
    '/images/how_it_works_1.png',
    '/images/how_it_works_2.png',
    '/images/how_it_works_3.png',
    '/images/how_it_works_4.png',
  ];

  return (
    <div className="px-5 2xl:p-0">
      <div className="max-w-[1170px] m-auto">
        <p className="text-[32px] xl:text-[44px] mb-4 xl:mb-10">How it works</p>
        <div className="flex bg-[#E6E6E6] w-fit rounded-full cursor-pointer mb-[40px] xl:mb-24">
          <div
            role="tab"
            className={classNames('py-4 xl:py-6 px-10 xl:px-[52px] rounded-full', {
              ['bg-b-black-200 text-white']: activeTab === 'individual',
            })}
            onClick={() => setActiveHandler('individual')}
          >
            <p className="text-base xl:text-lg">Individuals</p>
          </div>
          <div
            role="tab"
            className={classNames(
              'py-4 xl:py-6 px-10 xl:px-[52px] rounded-full text-b-black-200',
              {
                ['bg-b-black-200 !text-white']: activeTab === 'business',
              }
            )}
            onClick={() => setActiveHandler('business')}
          >
            <p className="text-base xl:text-lg">Businesses</p>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <div className="flex gap-10">
            {activeTab === 'individual' ? (
              <div className="w-[10px] bg-b-grey-300">
                <div
                  className={classNames('w-full h-[20%]', {
                    ['bg-b-light-green']: activeRole === 0,
                  })}
                />
                <div className="w-full h-[5%]" />
                <div
                  className={classNames('w-full h-[20%]', {
                    ['bg-b-light-green']: activeRole === 1,
                  })}
                />
                <div className="w-full h-[10%]" />
                <div
                  className={classNames('w-full h-[20%]', {
                    ['bg-b-light-green']: activeRole === 2,
                  })}
                />
                <div className="w-full h-[5%]" />
                <div
                  className={classNames('w-full h-[20%]', {
                    ['bg-b-light-green']: activeRole === 3,
                  })}
                />
              </div>
            ) : (
              <div className="w-[10px] bg-b-grey-300">
                <div
                  className={classNames('w-full h-[20%] bg-b-light-green')}
                />
                <div className="w-full h-[5%]" />
                <div className={classNames('w-full h-[20%]')} />
                <div className="w-full h-[10%]" />
                <div className={classNames('w-full h-[20%]')} />
                <div className="w-full h-[5%]" />
                <div className={classNames('w-full h-[20%]')} />
              </div>
            )}
            <div className="[&>*:nth-child(4)]:mb-0 flex-1">
              {howItWorks.map((e, index) => (
                <div key={e.id} className="mb-[91px] cursor-pointer">
                  <Image
                    src={e.img}
                    alt=""
                    className="w-[30px] mb-4"
                    width={40}
                    height={40}
                  />
                  <p className="text-2xl text-b-black-200">
                    {e.title}
                  </p>
                  <p className="text-base  text-b-black-grey">
                    {e.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <aside className="max-w-[450px] xl:max-w-[700px] hidden lg:block">
            <div>
              {activeTab === 'individual' ? (
                <Swiper
                  className="mySwiper"
                  onSlideChange={(e) => setActiveRole(e.activeIndex)}
                  autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                  }}
                  modules={[Autoplay]}
                >
                  {slideImage.map((e, index) => (
                    <SwiperSlide key={index}>
                      <div key={index}>
                        <Image
                          alt=""
                          src={e}
                          className="w-[400px] h-auto xl:w-[620px] xl:h-[490px]"
                          width={446}
                          height={818}
                        />
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              ) : (
                <Image
                  src="/images/macbook_pro_ndewo.png"
                  alt="macbook_pro_ndewo"
                  className="w-[446px] xl:w-[585px]"
                  width={585}
                  height={329}
                />
              )}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
