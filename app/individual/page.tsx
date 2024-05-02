'use client';
import React from 'react';
import Image from 'next/image';
import Footer from '@/src/components/Footer';
import NavBar from '@/src/components/NavBar';
import WaitList from '@/src/components/WaitList';
import StoreIcons from '@/src/components/StoreIcons';
import StoreButtonsGroup from '@/src/components/StoreButtonsGroup';
import LargeHandWithPhone from '@/src/components/LargeHandWithPhone';
import ZohoForm from '@/src/components/Modals/ZohoFormAuto';

const HorizontalSpacing = (props: { children: React.ReactNode }) => (
  <div className="px-5 xl:px-0">{props.children}</div>
);

export default function Individual() {

  const items = [
    'Rent',
    'Credit history',
    'Student loan',
    'Car finance',
    'Credit cards and loans',
    'Mortgage',
  ];
  return (
    <main className="">
      <header>
      <ZohoForm />
        <NavBar/>
        {/* <!-- Main --> */}
        <main className="text-center my-10 md:my-20 lg:mb-16 lg:mt-44">
          <div className="p-5 py-0 xl:p-0 max-w-[1040px] mx-auto">
            <h1 className="text-[32px] lg:text-5xl xl:text-7xl leading-none font-semibold text-b-black-200">
              Financial Freedom Starts Here
            </h1>
            <div className="max-w-[750px] mx-auto">
              <p className="mt-4 text-base lg:text-lg xl:text-xl">
                Break through financial barriers. With Ndewo, now you can 
                unlock opportunities and take control of your financial future.
              </p>
            </div>
          </div>
          <StoreButtonsGroup />

          <div className="flex xl:h-[800px] bg-contain xl:bg-auto justify-center bg-[url('/images/map_with_dots_orange.png')] bg-no-repeat bg-[center_bottom_1rem] xl:bg-[center_bottom_-1rem] relative overflow-hidden">
            <div className="xl:absolute -bottom-[146px] xl:-bottom-[146px]">
              <Image
                src="/images/hands_with_ndewo_app.png"
                alt=""
                className="w-full xl:w-[1050px]"
                width={1323}
                height={992}
              />
            </div>
          </div>
        </main>
      </header>
      {/* section 1 */}
      <section className="bg-b-black-200 px-4 lg:px-16 pt-[50px] xl:pt-20 overflow-hidden">
        <div className="flex flex-col items-center justify-center mx-auto text-center max-w-[840px]">
          <h1 className="text-white font-semibold text-[32px] lg:text-5xl xl:leading-[50px]">
            Move with Your Credit History, Anywhere You Go
          </h1>
          <div className="mx-auto text-center max-w-[1370px] mb-14 xl:mb-20">
            <p className="text-b-grey py-4">
              Ndewo leverages your existing credit history from home to empower
              your financial journey in a new country.
            </p>
          </div>
          {/* my-20 xl:mb-40 xl:mt-32 */}
          <div className="m-auto">
            {/* <video
              autoPlay
              playsInline
              loop
              width="924"
              src="/video/spinning_globe.mp4"
            >
              <track
                kind="captions"
                src="/video/spinning_globe_captions.vtt"
                label="English"
              />
            </video> */}
            <Image
              src="/video/globe.gif"
              alt=""
              className="w-full h-auto"
              width={658}
              height={606}
            />
          </div>
        </div>
      </section>

      {/* section 2 */}
      <section className="mb-10 xl:mb-16 mt-36 xl:mt-60 max-w-[1240px] mx-auto">
        <div className="text-center">
          <h1 className="text-[32px] lg:text-[40px] leading-none font-medium text-b-black-200">
            One platform,
          </h1>
          <h1 className="text-[32px] lg:text-[40px] leading-none font-medium text-b-purple-light">
            {' '}
            Limitless Opportunities
          </h1>
        </div>
      </section>
      {/* section 3 */}
      <HorizontalSpacing>
        <section className="bg-b-sand max-w-[1170px] h-[715px] md:h-[598px] xl:h-[620px] lg:pt-[80px] mx-auto rounded-[20px] xl:rounded-[40px] overflow-hidden">
          <div className="h-full px-5 pt-5 lg:pl-[40px] lg:pr-0 xl:pl-[80px] flex flex-col justify-between">
            <div className="w-full xl:w-[45%]">
              <h1 className="text-b-purple-light">
                FINANCIAL AND CREDIT FOOTPRINT
              </h1>
              <div className="max-w-[320px]">
                <p className="text-2xl font-medium my-4">
                  Credit and Financial Access Anywhere You Go
                </p>
              </div>
              <p className="text-base text-b-black-grey mb-6">
                No matter where life takes you, Ndewo empowers you with fair and
                accurate credit assessments based on your unique financial
                profile. Now you can access essential services like housing and
                loans, regardless of traditional credit history.
              </p>
              <div className="xl:self-end pt-6 sm:hidden">
                <StoreIcons />
              </div>
            </div>
            <div className="flex items-end justify-between">
              <div className="lg:self-end pb-6 xl:pb-10 hidden sm:block">
                <StoreIcons />
              </div>
              <Image
                src="/images/cities_silhouette.png"
                alt=""
                className="h-auto w-[287px] md:w-[498px] lg:w-[699px] xl:w-[799px]"
                width={899}
                height={299}
              />
            </div>
          </div>
        </section>
      </HorizontalSpacing>
      {/* section 4 */}
      <HorizontalSpacing>
        <section className="flex my-12 lg:my-[100px] max-w-[1170px] mx-auto lg:gap-5 xl:gap-10">
          <div className="flex-1 bg-b-primary-700 rounded-[40px] relative">
            <Image src="/images/meditation.png" alt="" fill />
          </div>
          <div className="lg:w-[57%] rounded-[20px] xl:rounded-[40px] p-4 xl:p-10 lg:pb-0 bg-black">
            <div className="xl:w-[95%] pb-20">
              <h1 className="text-b-purple-dark">LIFESTYLE</h1>
              <div className="w-[60%]">
                <h3 className="text-white text-2xl leading-none my-4 font-medium">
                  Enjoy the Same Lifestyle Everywhere You Go
                </h3>
              </div>
              <div className="w-[80%]">
                <p className="text-b-black-grey-200">
                  Ndewo empowers you to maintain your lifestyle even when you
                  move across borders and work remotely, globally.
                </p>
              </div>
            </div>
            <div className="flex flex-col xl:flex-row justify-between xl:align-bottom">
              <div className="xl:self-end lg:pb-10">
                <StoreIcons />
              </div>
              <div className="self-end overflow-hidden max-h-[340px]">
                <Image
                  src="/svgs/illustration-8.svg"
                  alt=""
                  className="h-[440px]"
                  width={450}
                  height={440}
                />
              </div>
            </div>
          </div>
        </section>
      </HorizontalSpacing>
      {/* section 5 */}
      <HorizontalSpacing>
        <section className="max-w-[1170px] mx-auto grid grid-cols-2 lg:grid-cols-3 gap-7 mb-32 xl:my-0">
          {items.map((item, index) => (
            <div
              key={index}
              className="py-5 xl:py-[34px] rounded-full text-sm xl:text-base border bg-b-grey-400 border-b-border-grey text-center"
            >
              {item}
            </div>
          ))}
        </section>
      </HorizontalSpacing>
      {/* section 6 */}
      <LargeHandWithPhone />
      <Footer />
    </main>
  );
}
