'use client';
import { useState } from 'react';
import Image from 'next/image';
import Footer from '@/src/components/Footer';
import NavBar from '@/src/components/NavBar';
import WaitList from '@/src/components/WaitList';
import StoreIcons from '@/src/components/StoreIcons';
import StoreButtonsGroup from '@/src/components/StoreButtonsGroup';

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

          <div className="flex xl:h-[800px] bg-contain xl:bg-auto justify-center bg-[url('/images/map_with_dots.png')] bg-no-repeat bg-[center_bottom_1rem] xl:bg-[center_bottom_-1rem] relative overflow-hidden">
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
      <section className="bg-b-black-200 px-4 lg:px-16 pt-[50px] xl:pt-20 max-h-[1209px] overflow-hidden">
        <div className="flex flex-col items-center justify-center mx-auto text-center max-w-[1520px]">
          <h1 className="text-white font-semibold text-[32px] lg:text-5xl xl:text-7xl xl:leading-[80px]">
            Move with Your Credit History, Anywhere You Go
          </h1>
          <div className="mx-auto text-center max-w-[1370px] mb-14 xl:mb-20">
            <p className="lg:text-xl text-b-outline py-4">
              Starting fresh in a new country shouldn&apos;t mean starting from
              scratch financially. Ndewo bridges the gap, leveraging your
              existing credit history from home to empower your financial
              journey in your new location.
            </p>
          </div>
          <div className="md:w-[70%] lg:w-[80%] xl:w-full m-auto flex justify-center">
            <Image
              src="/images/map_globe.png"
              alt=""
              className="w-ful"
              width={1075}
              height={890}
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
        <section className="bg-b-sand max-w-[1450px] xl:h-[798px] lg:py-[80px] mx-auto border-b-orange border rounded-[20px] xl:rounded-[40px] flex flex-col lg:flex-row gap-12 lg:gap-6 xl:gap-12 overflow-hidden">
          <div className="flex-[52%] px-5 pt-5 lg:pl-[40px] xl:pl-[80px] flex flex-col justify-between">
            <div className="">
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
            </div>
            <StoreIcons />
          </div>
          <div className="flex-[30%] self-center xl:self-end">
            <Image
              src="/svgs/illustration-10.svg"
              alt=""
              className="h-auto w-[287px] xl:w-[487px]"
              width={487}
              height={521}
            />
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
              <h3 className="text-white text-2xl xl:text-[32px] xl:text-5xl leading-none mt-10 mb-6 font-medium">
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
              className="py-5 xl:py-14 rounded-full text-sm xl:text-base border border-b-black-grey text-center"
            >
              {item}
            </div>
          ))}
        </section>
      </HorizontalSpacing>
       {/* section 6 */}
      <section className="my-8 xl:my-[100px] bg-black">
        <div className="max-w-[1450px] mx-auto gap-10 py-20">
          <div className="flex items-center px-20 md:w-[70%] lg:w-[46%] m-auto">
            <Image
              src="/images/free_hand_iphone.png"
              alt=""
              className="w-full"
              width={518}
              height={819}
            />
          </div>
          <div className="px-10 flex flex-col justify-center items-center mb-10 max-w-[550px] m-auto text-center">
            <p className="text-2xl xl:text-[40px] text-white font-medium pb-12 pt-10">
              Ready to experience awesome service with ndewo?
            </p>
            <button className="bg-b-light-green rounded-[40px] py-3 xl:py-4 px-[19px] flex items-center justify-center">
              <Image
                src="/images/ndewo_icon.png"
                alt="beta-score logo"
                width={32}
                height={32}
              />
              <span className="text-black ml-[12px] mr-[8px] xl:text-xl">
                Download app
              </span>
            </button>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
