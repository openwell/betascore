'use client';
import { useState } from 'react';
import Image from 'next/image';
import Footer from '@/src/components/Footer';
import NavBar from '@/src/components/NavBar';
import WaitList from '@/src/components/WaitList';
import StoreIcons from '@/src/components/StoreIcons';
import StoreButtonsGroup from '@/src/components/StoreButtonsGroup';
import LargeHandWithPhone from '@/src/components/LargeHandWithPhone';

const HorizontalSpacing = (props: { children: React.ReactNode }) => (
  <div className="px-5 xl:px-0">{props.children}</div>
);

export default function Individual() {
  const [showModal, setShowModal] = useState(false);

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const openModalHandler = () => {
    // setShowModal(true);
  };

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
        <NavBar openModalHandler={openModalHandler} />
        {/*  */}
        <WaitList showModal={showModal} closeHandler={closeModalHandler} />
        {/*  */}
        {/* <!-- Main --> */}
        <main className="text-center my-10 md:my-20 lg:mb-16 lg:mt-44">
          <div className="p-5 py-0 xl:p-0 max-w-[1520px] mx-auto">
            <h1 className="text-[32px] lg:text-5xl xl:text-7xl leading-none font-semibold text-b-black-200">
              Financial Freedom Starts Here: All-in-One App Empowers You
            </h1>
            <p className="mt-4 text-base lg:text-lg xl:text-xl">
              Breakthrough financial barriers! Our All-in-One App leverages your
              unique financial data, empowering you to build credit, access
              essential services, and achieve financial security, regardless of
              traditional credit history. Simplify your life, unlock
              opportunities, and take control of your financial future.
            </p>
            <StoreButtonsGroup />
          </div>

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
        <div className="flex flex-col items-center justify-center mx-auto text-center max-w-[1520px]">
          <h1 className="text-white font-semibold text-[32px] lg:text-5xl xl:text-7xl xl:leading-[80px]">
            Move with Your Credit History, Anywhere You Go
          </h1>
          <div className="mx-auto text-center max-w-[1370px] mb-14 xl:mb-20">
            <p className="lg:text-xl text-b-grey py-4">
              Starting fresh in a new country shouldn&apos;t mean starting from
              scratch financially. Ndewo bridges the gap, leveraging your
              existing credit history from home to empower your financial
              journey in your new location.
            </p>
          </div>
          <div className="my-20 xl:mb-40 xl:mt-32 m-auto">
            <Image
              src="/images/map_globe_2.png"
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
          <h1 className="text-[32px] lg:text-5xl xl:text-7xl leading-none font-medium text-b-black-200">
            One platform,
          </h1>
          <h1 className="text-[32px] lg:text-5xl xl:text-7xl leading-none font-medium text-b-purple-light">
            {' '}
            Limitless Opportunities
          </h1>
        </div>
      </section>
      {/* section 3 */}
      <HorizontalSpacing>
        <section className="bg-b-sand max-w-[1450px] h-[715px] md:h-[598px] xl:h-[798px] lg:pt-[80px] mx-auto rounded-[20px] xl:rounded-[40px] overflow-hidden">
          <div className="h-full px-5 pt-5 lg:pl-[40px] lg:pr-0 xl:pl-[80px] flex flex-col justify-between">
            <div className="w-full xl:w-[56%]">
              <h1 className="text-b-purple-light xl:text-2xl">
                EVERYWHERE AND ANYWHERE
              </h1>
              <p className="text-2xl lg:text-4xl xl:text-5xl font-medium mt-10 mb-6">
                Credit and Financial Access Anywhere You Go: Unlock a World of
                Possibilities with Ndewo
              </p>
              <p className="text-base xl:text-2xl text-b-black-grey mb-6 font-light">
                Move freely, build your future. No matter where life takes you,
                Ndewo empowers you with fair and accurate credit assessments
                based on your unique financial profile. Access essential
                services like housing and loans, regardless of traditional
                credit history.
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
                className="h-auto w-[287px] md:w-[498px] lg:w-[699px] xl:w-[899px]"
                width={899}
                height={299}
              />
            </div>
          </div>
        </section>
      </HorizontalSpacing>
      {/* section 4 */}
      <HorizontalSpacing>
        <section className="flex my-12 lg:my-[100px] max-w-[1450px] mx-auto lg:gap-5 xl:gap-10">
          <div className="flex-1 bg-b-primary-700 rounded-[40px] relative">
            <Image src="/images/meditation.png" alt="" fill />
          </div>
          <div className="lg:w-[57%] rounded-[20px] xl:rounded-[40px] p-4 xl:p-10 lg:pb-0 bg-black">
            <div className="xl:w-[95%] pb-20">
              <h1 className="text-b-purple-dark xl:text-2xl">LIFESTYLE</h1>
              <h3 className="text-white text-2xl xl:text-5xl leading-none mt-10 mb-6 font-medium">
                Enjoy the Same Lifestyle Anywhere: Unlock Financial Freedom with
                Ndewo
              </h3>
              <p className="text-b-black-grey-200 font-light xl:text-2xl">
                Move across borders, not limitations. Ndewo empowers individuals
                like you to maintain your financial standing and enjoy the same
                lifestyle you&apos;ve built, wherever life takes you.
              </p>
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
                  width={605}
                  height={440}
                />
              </div>
            </div>
          </div>
        </section>
      </HorizontalSpacing>
      {/* section 5 */}
      <HorizontalSpacing>
        <section className="max-w-[1450px] mx-auto grid grid-cols-2 lg:grid-cols-3 gap-7 mb-32 xl:my-0">
          {items.map((item, index) => (
            <div
              key={index}
              className="py-5 xl:py-14 rounded-full text-sm xl:text-base border bg-b-grey-400 border-b-border-grey text-center"
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
