'use client';
import { useState } from 'react';
import Image from 'next/image';
import Footer from '@/src/components/Footer';
import NavBar from '@/src/components/NavBar';
import HowItWorks from '@/src/components/HowItWorks';
import WaitList from '@/src/components/WaitList';
import StoreIcons from '@/src/components/StoreIcons';
import Testimonial from '@/src/components/Testimonial';
import StoreButtonsGroup from '@/src/components/StoreButtonsGroup';

const HorizontalSpacing = (props) => (
  <div className="px-5 xl:px-0">{props.children}</div>
);

export default function Home() {
  const [showModal, setShowModal] = useState(false);

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const openModalHandler = () => {
    // setShowModal(true);
  };
  return (
    <main>
      <header className="bg-b-pale-green">
        <NavBar openModalHandler={openModalHandler} />
        {/* <!-- Main --> */}
        <main className="text-center my-10 md:my-20 xl:my-44">
          <div className="p-5 py-0 xl:p-0 max-w-[1520px] mx-auto">
            <h1 className="text-[32px] lg:text-5xl xl:text-7xl leading-none font-semibold text-b-black-200">
              Cross-Border Credit Opportunities for All
            </h1>
            <p className="text-b-black-grey text-base lg:text-lg xl:text-xl pt-4">
              Now, you can access financial opportunities irrespective of how
              you work, where you are from or how long you have lived in the UK.
            </p>
          </div>
          <StoreButtonsGroup />
          <div className="flex justify-center bg-contain xl:bg-auto bg-[url('/images/map_with_dots.png')] bg-no-repeat bg-bottom">
            <Image
              src="/images/hero_lady_with_wings.png"
              alt=""
              width={1280}
              height={402}
            />
          </div>
        </main>
      </header>
      {/*  */}
      <WaitList showModal={showModal} closeHandler={closeModalHandler} />
      {/*  */}
      {/* section 1 */}
      <section className="my-8 xl:my-[100px] max-w-[1240px] mx-auto">
        <div className="text-center">
          <h1 className="text-[28px] lg:text-4xl xl:text-7xl xl:leading-none font-medium text-b-black-200">
            Move with Confidence
          </h1>
          <h1 className="text-[28px] lg:text-4xl xl:text-7xl leading-none font-medium text-b-dark-green">
            {' '}
            Do more with Ndewo
          </h1>
        </div>
      </section>
      {/* section 2 */}
      <HorizontalSpacing>
        <section className="bg-b-sand max-w-[1450px] xl:h-[798px] mx-auto border-b-orange border rounded-[20px] xl:rounded-[40px] flex flex-col lg:flex-row overflow-hidden">
          <div className="flex-1 px-5 pt-5 xl:pl-[80px] xl:py-[80px] flex flex-col xl:justify-between">
            <div>
              <h1 className="text-b-purple-light xl:text-2xl">
                FINANCIAL AND CREDIT FOOTPRINT
              </h1>
              <p className="text-2xl xl:text-5xl font-semibold my-6 xl:mt-10 xl:mb-6">
                Generate your financial report and leverage it to unlock
                opportunities tailored for you
              </p>
              <p className="text-base xl:text-2xl text-b-black-grey mb-6 font-light">
                Unlock new opportunities tailored to your unique situation. 
                Financial freedom and access to essential services, starting
                with your personalised financial report.
              </p>
            </div>
            <StoreIcons />
          </div>
          <div className="flex-1 self-end pt-8 lg:pt-20">
            <Image
              src="/images/ndewo_mobile_app_iphone.png"
              alt=""
              className="h-auto w-[450px] xl:w-[725px]"
              width={1049}
              height={699}
            />
          </div>
        </section>
      </HorizontalSpacing>
      {/* section 3*/}
      <HorizontalSpacing>
        <section className="flex flex-col lg:flex-row my-8 xl:my-[100px] max-w-[1450px] mx-auto gap-5 xl:gap-10">
          <div className="flex-1 bg-b-primary-700 rounded-[20px] xl:rounded-[40px] relative">
            <Image src="/images/lady_looking_up.png" alt="" fill />
          </div>
          <div className="lg:w-[57%] rounded-[20px] xl:rounded-[40px] p-6 xl:px-10 xl:pt-20 xl:pb-10 bg-black">
            <div className="xl:w-[90%]">
              <h1 className="text-b-purple-dark xl:text-2xl">STUDENT LOAN</h1>
              <h3 className="text-white text-2xl xl:text-[32px] xl:text-5xl leading-none mt-10 mb-6 font-semibold">
                Access the funds you need to realise your academic goals
              </h3>
              <p className="text-b-black-grey-200 font-light xl:text-2xl">
                With Ndewo, you can access student loans and transform your
                financial challenges into opportunities. Move towards your
                future with confidence.
              </p>
            </div>
            <div className="mt-6 xl:mt-0 flex flex-col xl:flex-row justify-between xl:align-bottom">
              <div className="xl:self-end">
                <StoreIcons />
              </div>
              <div className="self-end mt-12 xl:mt-0">
                <Image
                  src="/images/book_bulb.png"
                  alt=""
                  className="w-[260px] xl:w-full xl:h-[374px]"
                  width={377}
                  height={4374}
                />
              </div>
            </div>
          </div>
        </section>
      </HorizontalSpacing>
      {/* section 4 */}
      <HorizontalSpacing>
        <section className="bg-b-light-200-green max-w-[1450px] xl:h-[798px] mx-auto border rounded-[20px] xl:rounded-[40px] flex flex-col lg:flex-row overflow-hidden">
          <div className="flex-1 flex flex-col xl:justify-between pl-5 pt-5 xl:pl-[80px] xl:py-[80px]">
            <div className="">
              <h1 className="text-b-purple-light xl:text-2xl">
                Rental & Mortgage Opportunities
              </h1>
              <h3 className="text-2xl xl:text-5xl leading-none mt-10 mb-6 font-semibold">
                Cross-Border Rental & Mortgage Opportunities
              </h3>
              <p className="text-b-tertiary font-light xl:text-2xl mb-6">
                With Ndewo, you can rent a house or buy a home without the
                rigours of traditional checks for those with non-traditional
                situations.
              </p>
            </div>
            <StoreIcons />
          </div>
          <div className="flex-1 flex flex-col justify-center pt-[80px]">
            <Image
              src="/images/ndewo_app_mockup.png"
              alt=""
              className="w-[695px] self-end"
              width={695}
              height={706}
            />
          </div>
        </section>
      </HorizontalSpacing>
      {/* section 5 */}
      <HorizontalSpacing>
        <section className="flex flex-col md:flex-row my-8 xl:my-[100px] max-w-[1450px] mx-auto gap-5 xl:gap-10">
          <div className="flex-1 rounded-[20px] xl:rounded-[40px] relative">
            <Image
              src="/images/lady_on_phone_with_phone_and_card.png"
              alt=""
              fill
            />
          </div>
          <div className="md:w-[57%] rounded-[20px] xl:rounded-[40px] pb-0 xl:px-10 xl:pt-20 xl:pb-0 bg-b-purple-light">
            <div className="md:w-[82%] p-6 xl:pb-10 ">
              <h1 className="text-b-purple-light-200 xl:text-2xl">
                CREDIT CARDS
              </h1>
              <h3 className="text-b-purple-light-300 text-2xl xl:text-5xl leading-none mt-10 mb-6 font-medium">
                Credit cards that allow you live the life that you deserve
              </h3>
              <p className="text-b-purple-light-300 text-sm font-light xl:text-2xl">
                You can now spend with confidence and do more with credit cards
                accessed through Ndewo.
              </p>
            </div>
            <div className="flex justify-between flex-col xl:flex-row align-bottom">
              <div className="xl:self-end p-6 xl:pb-10">
                <StoreIcons />
              </div>
              <div className="mt-36 lg:mt-0 self-end">
                <Image
                  src="/images/atm_cards.png"
                  alt=""
                  className="w-[643px]"
                  width={643}
                  height={400}
                />
              </div>
            </div>
          </div>
        </section>
      </HorizontalSpacing>
      {/* section 6 */}
      <section className="my-8 xl:my-[240px] px-5 py-[50px] xl:py-20 bg-black">
        <div className="max-w-[1450px] mx-auto gap-10 xl:gap-10">
          <div className="flex flex-col justify-center items-center mb-10 max-w-[550px] m-auto text-center">
            <p className="text-[32px] xl:text-7xl text-white font-semibold">
              Built on Trust
            </p>
            <p className="pt-4 pb-6 text-b-black-grey">
              Businesses make use of Ndewo to assess customer’s credit
              worthiness, make rental decision, verify employee’s details and so
              much more
            </p>
            <button className="bg-b-light-green rounded-[40px] py-3 px-[40px] xl:py-4 xl:px-[60px] mt-24 xl:mt-0">
              Learn more
            </button>
          </div>
          <div className="flex flex-col justify-center items-center">
            <Image
              src="/images/ndewo_dashboard.png"
              alt=""
              className="w-[1386px]"
              width={1386}
              height={635}
            />
          </div>
        </div>
      </section>
      {/* section 7 */}
      <HowItWorks />
      {/* section 8 */}
      <Testimonial />
      {/* section 9 */}
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
      {/* </div> */}
      <Footer />
    </main>
  );
}
