'use client';
import React from 'react';
import { useState } from 'react';
import Footer from '@/src/components/Footer';
import WaitList from '@/src/components/WaitList';

interface WaitListBtnProps {
  openModalHandler: () => void;
}

const WaitListBtn: React.FC<WaitListBtnProps> = ({ openModalHandler }) => {
  return (
    <button
      onClick={openModalHandler}
      className="text-white text-base text-center font-medium whitespace-nowrap bg-black w-[292px] mt-6 py-4 px-3 md:p-5 rounded-xl"
    >
      Join the waitlist
    </button>
  );
};

export default function Page() {
  const [showModal, setShowModal] = useState(false);

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const openModalHandler = () => {
    // setShowModal(true);
  };
  return (
    <main className="bg-white">
      {/*  */}
      <WaitList showModal={showModal} closeHandler={closeModalHandler} />
      {/*  */}
      <div className="self-center flex w-full max-w-[1240px] px-5 md:px-0 mx-auto pb-[100px] flex-col md:pt-12 pt-10">
        <div className="items-stretch flex w-[104px] max-w-full gap-1">
          <img alt="icon" loading="lazy" src="/svgs/logo-black.svg" />
        </div>
        <div className="self-stretch mt-16 max-md:max-w-full max-md:mt-10">
          <div className="flex justify-between max-md:flex-col max-md:items-stretch">
            <div className="flex flex-col items-stretch md:w-[55%] lg:w-[52%] w-full">
              <div className="items-start flex flex-col my-auto max-md:max-w-full max-md:mt-10">
                <div className="items-stretch self-stretch flex flex-col -mr-5">
                  <p className="text-black text-5xl font-bold leading-[60px] max-md:max-w-full max-md:text-4xl font-clashDisplay hidden lg:block">
                    Transfer Your Credit <br /> from Your Home Country to the UK
                  </p>
                  <p className="text-black text-5xl font-bold leading-[60px] max-md:max-w-full max-md:text-4xl font-clashDisplay block lg:hidden">
                    Transfer Your Credit from Your Home Country to the UK
                  </p>
                  <p className="text-black text-xl leading-6 mt-6 max-md:max-w-full">
                    Are you tired of being told either that you do not have
                    enough information for credit opportunities or being asked
                    for three (3) years address in the UK before being able to
                    apply for certain opportunities?
                    <br />
                    <br />
                    Betascore has been designed for migrants, enabling you
                    access opportunities that you might not have been able to,
                    because you just moved to the UK.
                  </p>
                </div>
                <div className="flex justify-center md:block w-full">
                  <WaitListBtn openModalHandler={openModalHandler} />
                </div>
                <p className="text-b-tertiary text-base font-medium self-stretch -mr-5 mt-10">
                  We offer lot’s of services but the underlying plan is to help
                  you get access to opportunities.
                </p>
                <div className="flex fle gap-2 -mr-5 mt-4 max-md:max-w-full flex-wrap max-md:justify-center">
                  <div className="justify-center bg-blue-800 flex flex-col px-3 py-2 rounded-[200px]">
                    <div className="flex gap-2">
                      <img
                        alt="icon"
                        loading="lazy"
                        src="/svgs/cards.svg"
                        className="aspect-square object-contain object-center w-4 justify-center items-center overflow-hidden shrink-0 max-w-full"
                      />
                      <p className="text-white text-sm whitespace-nowrap">
                        Credit Card
                      </p>
                    </div>
                  </div>

                  <div className="justify-center  bg-gray-200 flex flex-col px-3 py-2 rounded-[200px]">
                    <div className="flex gap-2">
                      <img
                        alt="icon"
                        loading="lazy"
                        src="/svgs/house-small.svg"
                        className="aspect-square object-contain object-center w-4 justify-center items-center overflow-hidden shrink-0 max-w-full"
                      />
                      <p className="text-black text-sm whitespace-nowrap">
                        Mortgages
                      </p>
                    </div>
                  </div>

                  <div className="justify-center  bg-indigo-500 flex flex-col px-3 py-2 rounded-[200px]">
                    <div className="flex gap-2">
                      <img
                        alt="icon"
                        loading="lazy"
                        src="/svgs/note.svg"
                        className="aspect-square object-contain object-center w-4 justify-center items-center overflow-hidden shrink-0 max-w-full"
                      />
                      <p className="text-white text-sm whitespace-nowrap">
                        Rent Guarantor
                      </p>
                    </div>
                  </div>

                  <div className="justify-center  bg-gray-200 flex flex-col px-3 py-2 rounded-[200px]">
                    <div className="flex gap-2">
                      <img
                        alt="icon"
                        loading="lazy"
                        src="svgs/graduation-cap-small.svg"
                        className="aspect-square object-contain object-center w-4 justify-center items-center overflow-hidden shrink-0 max-w-full"
                      />
                      <p className="text-black text-sm whitespace-nowrap">
                        Student Loan
                      </p>
                    </div>
                  </div>

                  <div className="justify-center bg-black flex flex-col px-3 py-2 rounded-[200px]">
                    <div className="flex gap-2">
                      <img
                        alt="icon"
                        loading="lazy"
                        src="svgs/car.svg"
                        className="aspect-square object-contain object-center w-4 justify-center items-center overflow-hidden shrink-0 max-w-full"
                      />
                      <p className="text-white text-sm whitespace-nowrap">
                        Car loan
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col items-stretch w-full md:w-[35%] lg:w-[31%] md:ml-5 ">
              <img
                alt="icon"
                loading="lazy"
                srcSet="/images/waitlist-hero.png"
                className="aspect-[0.47] object-contain object-center w-full overflow-hidden max-md:mt-10"
              />
            </div>
          </div>
        </div>
      </div>
      {/* section 2 */}
      <section className="bg-b-salty-ice py-[52px]">
        <div className="text-b-primary-900 px-5 md:px-0 text-3xl md:text-4xl font-semibold max-w-[970px] mx-auto text-center font-clashDisplay">
          Migration is Hard. Betascore is here to make your journey so much
          easier than you imagined.
        </div>
      </section>
      {/* section 2 */}
      <div className="justify-center self-center w-full max-w-[1240px] m-auto my-14 sm:my-36 px-5 max-md:max-w-full max-md:mt-10">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-[102px]">
          <div className="flex flex-col items-center">
            <img
              alt="icon"
              loading="lazy"
              src="/svgs/revenue-isometric.svg"
              className="aspect-[1.33] object-contain object-center w-[228px] h-[118px]"
            />
            <p className="text-black text-center text-base font-semibold self-stretch mt-2 font-clashDisplay">
              Learn How to Access Opportunities
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              alt="icon"
              loading="lazy"
              src="/svgs/philadelphia-isometric.svg"
              className="aspect-[1.33] object-contain object-center w-[228px] h-[118px]"
            />
            <p className="text-black text-center text-base font-semibold mt-2 font-clashDisplay">
              Get a Rental Guarantee to Enable you Rent a Space of Your Dreams
              Without Hassles
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              alt="icon"
              loading="lazy"
              src="/svgs/credit-card-isometric.svg"
              className="aspect-[1.33] object-contain object-center w-[228px] h-[118px]"
            />
            <p className="text-black text-center text-base font-semibold mt-2 font-clashDisplay">
              Find Lenders Willing to Work with You
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              alt="icon"
              loading="lazy"
              src="/svgs/graduation-isometric.svg"
              className="aspect-[1.33] object-contain object-center w-[228px] h-[118px]"
            />
            <p className="text-black text-center text-base font-semibold mt-2 font-clashDisplay">
              Find Student Loan Opportunities that Suit Your Programme and
              Lifestyle
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              alt="icon"
              loading="lazy"
              src="/svgs/files-and-folder-isometric.svg"
              className="aspect-[1.33] object-contain object-center w-[228px] h-[118px]"
            />
            <p className="text-black text-center text-base font-semibold mt-2 font-clashDisplay">
              Build a Credit Portfolio that Serves Your Needs
            </p>
          </div>
          <div className="flex flex-col items-center">
            <img
              alt="icon"
              loading="lazy"
              src="/svgs/boston-isometric.svg"
              className="aspect-[1.33] object-contain object-center w-[228px] h-[118px]"
            />
            <p className="text-black text-center text-base font-semibold mt-2 font-clashDisplay">
              Find Mortgage Brokers and Opportunities to Purchase Your First
              House
            </p>
          </div>
        </div>
        <div className="flex justify-center">
          <WaitListBtn openModalHandler={openModalHandler} />
        </div>
      </div>
      {/* section */}
      <section className="bg-b-purple py-[52px]">
        <div className="text-white text-4xl font-semibold max-w-[970px] mx-auto text-center font-clashDisplay">
          Improve Your Credit scores and Start Getting the Advantages for
          Migrants
        </div>
      </section>
      {/* section */}
      <div className="self-center w-full max-w-[1240px] m-auto my-[50px] md:my-[100px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-10">
          <div className="flex flex-col">
            <div className="justify-end items-stretch border border-[#ECEFEC] shadow-sm bg-white flex grow flex-col w-full mx-auto pt-44 pb-16 px-10 rounded-3xl max-lg:pt-28 border-solid max-md:max-w-full max-md:mt-5 max-md:pt-20 max-md:px-5">
              <div className="text-black text-4xl font-semibold whitespace-nowrap max-md:max-w-full font-clashDisplay">
                Credit Services
              </div>
              <div className=" mt-6 max-md:max-w-full">
                <p className="text-b-tertiary text-xl leading-7">
                  Our offering to enable you to get the best credit card
                  available on the market is being developed. Not having a long
                  history in the UK will not be a factor that will work against
                  you in our credit assessment. We are not only going to
                  calculate your credit score differently, but also offer you
                  the right opportunities that you deserve.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className=" border border-[#ECEFEC] shadow-sm bg-white flex grow flex-col w-full mx-auto pt-44 pb-32 px-10 rounded-3xl border-solid max-lg:pt-28 max-md:max-w-full max-md:mt-5 max-md:px-5 max-md:py-24">
              <div className="text-black text-4xl font-semibold whitespace-nowrap max-md:max-w-full font-clashDisplay">
                Rent Guarantor
              </div>
              <div className=" mt-6 -mb-6 max-md:max-w-full max-md:mb-2.5">
                <p className="text-b-tertiary text-xl leading-7">
                  You never have to seek out a guarantor or lose a house because
                  you just moved to the UK. Rent Guarantor by Betascore is a
                  solution that solves your problem while helping you build your
                  credit history and score.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="justify-end items-stretch border border-[#ECEFEC] shadow-sm bg-white flex grow flex-col w-full mx-auto pt-44 pb-32 px-10 rounded-3xl max-lg:pt-28 border-solid max-md:max-w-full max-md:mt-5 max-md:px-5 max-md:py-24">
              <div className="text-black text-4xl font-semibold whitespace-nowrap max-md:max-w-full font-clashDisplay">
                Student Loan
              </div>
              <div className="mt-6 -mb-6 max-md:max-w-full max-md:mb-2.5">
                <p className="text-b-tertiary text-xl leading-7">
                  Getting better educated is a right that everyone should enjoy.
                  A better education is a solution to a lot of problems. At
                  Betascore we are dedicated to helping you secure that degree
                  and building your credit worthiness and score while at it.
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="border border-[#ECEFEC] shadow-sm bg-white flex grow flex-col w-full mx-auto pt-44 pb-32 px-10 rounded-3xl border-solid max-lg:pt-28 max-md:max-w-full max-md:mt-5 max-md:px-5 max-md:py-24">
              <div className="text-black text-4xl font-semibold whitespace-nowrap max-md:max-w-full font-clashDisplay">
                Car Loan
              </div>
              <div className=" mt-6 -mb-6 max-md:max-w-full max-md:mb-2.5">
                <p className="text-b-tertiary text-xl leading-7">
                  A car can be an asset when it supports your lifestyle and
                  enhances your goals. At Betascore, we facilitate the process
                  of securing your dream car, while chasing your dreams.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* large */}
      <div className="border border-[#ECEFEC] shadow-sm bg-white self-center flex w-full max-w-[1240px] m-auto flex-col mt-5 pt-44 pb-10 px-10 rounded-3xl border-solid max-lg:pt-28 max-md:max-w-full max-md:pt-20 max-md:px-5">
        <div className="text-black text-4xl font-semibold self-stretch whitespace-nowrap max-md:max-w-full font-clashDisplay">
          Student Loan
        </div>
        <div className=" self-stretch mt-6 max-md:max-w-full">
          <p className="text-b-tertiary text-xl leading-7">
            Getting access to the best mortgage deals. That is something we have
            been working on. Your great credit history from your home country
            should count towards your ability to access financial services in
            the UK. Our goal is simple, ‘to get you the opportunities that you
            deserve”
          </p>
        </div>
        <div className="items-center flex w-44 max-w-full gap-4 mt-4 md:mt-6 self-start">
          <img
            alt="icon"
            loading="lazy"
            src="/svgs/check.svg"
            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto"
          />
          <div className="text-b-primary-900 text-xl leading-7 self-stretch whitespace-nowrap">
            Rent Guarantor
          </div>
        </div>
        <div className="items-center flex w-44 max-w-full gap-4 mt-4 md:mt-6 self-start">
          <img
            alt="icon"
            loading="lazy"
            src="/svgs/check.svg"
            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto"
          />
          <div className="text-b-primary-900 text-xl leading-7 self-stretch whitespace-nowrap">
            Student Loan
          </div>
        </div>
        <div className="items-center flex w-44 max-w-full gap-4 mt-4 md:mt-6 self-start">
          <img
            alt="icon"
            loading="lazy"
            src="/svgs/check.svg"
            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto"
          />
          <div className="text-b-primary-900 text-xl leading-7 self-stretch whitespace-nowrap">
            Car Loan
          </div>
        </div>
        <div className="items-center flex w-44 max-w-full gap-4 mt-4 md:mt-6 self-start">
          <img
            alt="icon"
            loading="lazy"
            src="/svgs/check.svg"
            className="aspect-square object-contain object-center w-6 overflow-hidden shrink-0 max-w-full my-auto"
          />
          <div className="text-b-primary-900 text-xl leading-7 self-stretch whitespace-nowrap">
            Others
          </div>
        </div>
      </div>

      <div className="flex justify-center pt-10 lg:pt-24">
        <WaitListBtn openModalHandler={openModalHandler} />
      </div>
      <div className="bg-blue-100 mt-32 pt-28 pb-24 px-20 max-md:max-w-full max-lg:mt-10 max-lg:pt-20 max-lg:px-5">
        <div className="max-w-[1240px] m-auto">
          <div className="text-black text-4xl font-semibold whitespace-nowrap ml-5 mr-4 max-md:max-w-full max-md:mr-2.5 font-clashDisplay">
            Testimonials
          </div>
          <div className="mt-12 max-md:max-w-full max-md:mt-10">
            <div className="gap-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
              <div className="relative border justify-end  bg-b-primary-900 flex grow flex-col w-full mx-auto px-4 pb-4 pt-20 rounded-xl border-solid max-md:mt-5">
                <div className="absolute bg-b-primary-600 p-5 right-0 top-0 rounded-tr-xl">
                  <img
                    alt="icon"
                    loading="lazy"
                    src="/svgs/format_quote.svg"
                    className=""
                  />
                </div>
                <div className="self-stretch flex flex-col items-stretch mt-6">
                  <p className="text-white text-base italic">
                    Having Betascore is a game changer for a migrant that needs
                    to build their credit score.
                  </p>
                  <p className="text-[#D4E0FF] text-base font-semibold whitespace-nowrap mt-32 max-md:mt-10">
                    - Wale Bayo
                  </p>
                </div>
              </div>

              <div className="relative border justify-end  bg-b-primary-900 flex grow flex-col w-full mx-auto px-4 pb-4 pt-20 rounded-xl border-solid max-md:mt-5">
                <div className="absolute bg-b-primary-600 p-5 right-0 top-0 rounded-tr-xl">
                  <img
                    alt="icon"
                    loading="lazy"
                    src="/svgs/format_quote.svg"
                    className=""
                  />
                </div>
                <div className="self-stretch flex flex-col items-stretch mt-6">
                  <p className="text-white text-base italic">
                    Choosing the right credit card is critical to building
                    wealth and leveraging opportunities in the UK. With
                    Betascore, I can now choose the right credit cards for me to
                    help me achieve my financial goals
                  </p>
                  <p className="text-[#D4E0FF] text-base font-semibold whitespace-nowrap mt-16 max-md:mt-10">
                    - Chukwumah Okoro
                  </p>
                </div>
              </div>

              <div className="relative border justify-end  bg-b-primary-900 flex grow flex-col w-full mx-auto px-4 pb-4 pt-20 rounded-xl border-solid max-md:mt-5">
                <div className="absolute bg-b-primary-600 p-5 right-0 top-0 rounded-tr-xl">
                  <img
                    alt="icon"
                    loading="lazy"
                    src="/svgs/format_quote.svg"
                    className=""
                  />
                </div>
                <div className="self-stretch flex flex-col items-stretch mt-6">
                  <p className="text-white text-base italic">
                    As a student, knowing that I have the opportunity to get
                    some funds to help support me, complete my fees and then
                    start building my credit score is music to my ears. With
                    Betascore, I can live the life of my dreams
                  </p>
                  <p className="text-[#D4E0FF] text-base font-semibold whitespace-nowrap mt-16 max-md:mt-10">
                    - Hannatu Abubakar
                  </p>
                </div>
              </div>

              <div className="relative border justify-end  bg-b-primary-900 flex grow flex-col w-full mx-auto px-4 pb-4 pt-20 rounded-xl border-solid max-md:mt-5">
                <div className="absolute bg-b-primary-600 p-5 right-0 top-0 rounded-tr-xl">
                  <img
                    alt="icon"
                    loading="lazy"
                    src="/svgs/format_quote.svg"
                    className=""
                  />
                </div>
                <div className="self-stretch flex flex-col items-stretch mt-6">
                  <p className="text-white text-base italic">
                    Getting a mortgage can be tricky. It is important that you
                    get the right deals and the right packages. Betascore is
                    designed to help you get the best deals. Every migrant
                    should have Betascore on their phones as a companion for
                    financial and credit help.
                  </p>
                  <div className="text-[#D4E0FF] text-base font-semibold whitespace-nowrap mt-6">
                    - Marcus Dipriye
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center pt-10 lg:pt-24">
            <WaitListBtn openModalHandler={openModalHandler} />
          </div>
        </div>
      </div>
      <section className="px-5 md:px-0">
        <div className="text-center  mt-10 lg:mt-40 md:mt-20">
          <h4 className="text-black font-clashDisplay text-4xl md:text-5xl font-semibold leading-[60px]">
            <span className="text-b-primary-600">10 reasons </span>
            why you should choose Betascore
          </h4>
        </div>
        <div className="self-center flex max-w-[969px] m-auto w-full gap-3 md:gap-5 mt-24 max-md:mt-10">
          <div className="relative">
            <div className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] p-1 text-blue-700 text-center text-2xl md:text-3xl font-semibold whitespace-nowrap  border border-b-primary-600 aspect-square rounded-[200px] border-solid">
              1
            </div>
            <div className="h-[70%] md:h-[95%] w-[1px] bg-blue-700 absolute top-16 left-2/4" />
          </div>
          <div className=" ">
            <div className="text-b-primary-900 text-2xl md:text-3xl font-semibold">
              Credit Score Monitoring
            </div>
            <div className="text-b-tertiary text-base md:text-2xl leading-8 mt-3">
              We will provide access to free credit scores from one or more
              credit bureaus, and allow users to track changes in their scores
              over time.
            </div>
          </div>
        </div>
        <div className="self-center flex max-w-[969px] m-auto w-full gap-3 md:gap-5 mt-24 max-md:mt-10">
          <div className="relative">
            <div className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] p-1 text-blue-700 text-center text-2xl md:text-3xl font-semibold whitespace-nowrap  border border-b-primary-600 aspect-square rounded-[200px] border-solid">
              2
            </div>
            <div className="h-[70%] md:h-[95%] w-[1px] bg-blue-700 absolute top-16 left-2/4" />
          </div>
          <div className="">
            <div className="text-b-primary-900 text-2xl md:text-3xl font-semibold">
              Credit Reports
            </div>
            <p className="text-b-tertiary text-base md:text-2xl leading-8 mt-3">
              We offer access to credit reports, which provide detailed
              information about a person&apos;s credit history, including open
              accounts, payment history, and credit inquiries.
            </p>
          </div>
        </div>
        <div className="self-center flex max-w-[969px] m-auto w-full gap-3 md:gap-5 mt-24  max-md:mt-10">
          <div className="relative">
            <div className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] p-1 text-blue-700 text-center text-2xl md:text-3xl font-semibold whitespace-nowrap  border border-b-primary-600 aspect-square rounded-[200px] border-solid">
              3
            </div>
            <div className="h-[70%] md:h-[95%] w-[1px] bg-blue-700 absolute top-16 left-2/4" />
          </div>
          <div className=" ">
            <div className="text-b-primary-900 text-2xl md:text-3xl font-semibold">
              Credit Score Analysis
            </div>
            <p className="text-b-tertiary text-base md:text-2xl leading-8 mt-3">
              We provide insights into the factors influencing an
              individual&apos;s credit score and offering tips on how to improve
              it.
            </p>
          </div>
        </div>
        <div className="self-center flex max-w-[969px] m-auto w-full gap-3  mt-24  max-md:mt-10">
          <div className="relative">
            <div className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] p-1 text-blue-700 text-center text-2xl md:text-3xl font-semibold whitespace-nowrap  border border-b-primary-600 aspect-square rounded-[200px] border-solid">
              4
            </div>
            <div className="h-[70%] md:h-[95%] w-[1px] bg-blue-700 absolute top-16 left-2/4" />
          </div>
          <div className=" ">
            <div className="text-b-primary-900 text-2xl md:text-3xl font-semibold">
              Credit Score Simulator
            </div>
            <p className="text-b-tertiary text-base md:text-2xl leading-8 mt-3">
              We allow users to simulate the impact of various financial actions
              on their credit scores, such as paying off debt or opening new
              credit accounts.
            </p>
          </div>
        </div>
        <div className="self-center flex max-w-[969px] m-auto w-full gap-3 md:gap-5 mt-24  max-md:mt-10">
          <div className="relative">
            <div className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] p-1 text-blue-700 text-center text-2xl md:text-3xl font-semibold whitespace-nowrap  border border-b-primary-600 aspect-square rounded-[200px] border-solid">
              5
            </div>
            <div className="h-[70%] md:h-[95%] w-[1px] bg-blue-700 absolute top-16 left-2/4" />
          </div>
          <div className=" ">
            <div className="text-b-primary-900 text-2xl md:text-3xl font-semibold">
              Credit Monitoring and Alerts
            </div>
            <p className="text-b-tertiary text-base md:text-2xl leading-8 mt-3">
              We monitor users&apos; credit reports for changes and send alerts
              for significant events like new accounts being opened or late
              payments.
            </p>
          </div>
        </div>
        <div className="self-center flex max-w-[969px] m-auto w-full gap-3 md:gap-5 mt-24  max-md:mt-10">
          <div className="relative">
            <div className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] p-1 text-blue-700 text-center text-2xl md:text-3xl font-semibold whitespace-nowrap  border border-b-primary-600 aspect-square rounded-[200px] border-solid">
              6
            </div>
            <div className="h-[70%] md:h-[95%] w-[1px] bg-blue-700 absolute top-16 left-2/4" />
          </div>
          <div className=" ">
            <div className="text-b-primary-900 text-2xl md:text-3xl font-semibold">
              Credit Card Recommendations
            </div>
            <p className="text-b-tertiary text-base md:text-2xl leading-8 mt-3">
              We provide personalised credit card recommendations based on a
              user&apos;s credit profile and financial goals.
            </p>
          </div>
        </div>
        <div className="self-center flex max-w-[969px] m-auto w-full gap-3 md:gap-5 mt-24  max-md:mt-10">
          <div className="relative">
            <div className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] p-1 text-blue-700 text-center text-2xl md:text-3xl font-semibold whitespace-nowrap  border border-b-primary-600 aspect-square rounded-[200px] border-solid">
              7
            </div>
            <div className="h-[70%] md:h-[95%] w-[1px] bg-blue-700 absolute top-16 left-2/4" />
          </div>
          <div className=" ">
            <div className="text-b-primary-900 text-2xl md:text-3xl font-semibold">
              Loan Recommendations
            </div>
            <p className="text-b-tertiary text-base md:text-2xl leading-8 mt-3">
              We recommend loans and other financial products based on a
              user&apos;s creditworthiness and financial needs.
            </p>
          </div>
        </div>
        <div className="self-center flex max-w-[969px] m-auto w-full gap-3 md:gap-5 mt-24  max-md:mt-10">
          <div className="relative">
            <div className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] p-1 text-blue-700 text-center text-2xl md:text-3xl font-semibold whitespace-nowrap  border border-b-primary-600 aspect-square rounded-[200px] border-solid">
              8
            </div>
            <div className="h-[70%] md:h-[95%] w-[1px] bg-blue-700 absolute top-16 left-2/4" />
          </div>
          <div className=" ">
            <div className="text-b-primary-900 text-2xl md:text-3xl font-semibold">
              Credit Building Products
            </div>
            <p className="text-b-tertiary text-base md:text-2xl leading-8 mt-3">
              We recommend credit-building products such as secured credit cards
              or credit builder loans for individuals looking to establish or
              improve their credit history.
            </p>
          </div>
        </div>
        <div className="self-center flex max-w-[969px] m-auto w-full gap-3 md:gap-5 mt-24  max-md:mt-10">
          <div className="relative">
            <div className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] p-1 text-blue-700 text-center text-2xl md:text-3xl font-semibold whitespace-nowrap  border border-b-primary-600 aspect-square rounded-[200px] border-solid">
              9
            </div>
            <div className="h-[70%] md:h-[95%] w-[1px] bg-blue-700 absolute top-16 left-2/4" />
          </div>
          <div className=" ">
            <div className="text-b-primary-900 text-2xl md:text-3xl font-semibold">
              Mortgage and Home Buying Tools
            </div>
            <p className="text-b-tertiary text-base md:text-2xl leading-8 mt-3">
              We provide information and tools to help users with mortgage
              research, affordability calculations, and home buying.
            </p>
          </div>
        </div>
        <div className="self-center flex max-w-[969px] m-auto w-full gap-3 md:gap-5 mt-24 max-md:mt-10">
          <div className="relative">
            <div className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] p-1 text-blue-700 text-center text-2xl md:text-3xl font-semibold whitespace-nowrap  border border-b-primary-600 aspect-square rounded-[200px] border-solid">
              10
            </div>
          </div>
          <div className=" ">
            <div className="text-b-primary-900 text-2xl md:text-3xl font-semibold">
              Financial Calculators
            </div>
            <p className="text-b-tertiary text-base md:text-2xl leading-8 mt-3">
              We provide various financial calculators, such as loan
              calculators, mortgage calculators, and retirement savings
              calculators.
            </p>
          </div>
        </div>
      </section>
      <div className="flex justify-center py-10 md:py-24">
        <WaitListBtn openModalHandler={openModalHandler} />
      </div>
      <Footer />
    </main>
  );
}
