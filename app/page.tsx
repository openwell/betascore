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
import LargeDashboard from '@/src/components/LargeDashboard';
import LargeHandWithPhone from '@/src/components/LargeHandWithPhone';
import ZohoForm from '@/src/components/Modals/ZohoForm';

const HorizontalSpacing = (props: { children: React.ReactNode }) => (
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
      <ZohoForm />
        <NavBar openModalHandler={openModalHandler} />
        {/* <!-- Main --> */}
        <main className="text-center my-10 md:my-20 xl:my-44">
          <div className="p-5 py-0 xl:p-0 max-w-[900px] mx-auto">
            <h1 className="text-[32px] lg:text-5xl xl:text-[64px] leading-none font-semibold text-b-black-200">
              Cross-Border Opportunities for All
            </h1>
            <p className="text-b-black-grey text-base lg:text-lg xl:text-xl pt-4">
              Now, you can access financial opportunities designed for you!
            </p>
          </div>
          <StoreButtonsGroup />
          <div className="px-5 flex justify-center bg-contain xl:bg-auto bg-[url('/images/map_with_dots.png')] bg-no-repeat bg-bottom">
            <Image
              className="my-20"
              src="/images/hero_lady_with_wings.png"
              alt=""
              width={954}
              height={402}
            />
          </div>
        </main>
      </header>
      {/*  */}
      <WaitList showModal={showModal} closeHandler={closeModalHandler} />
      {/*  */}
      {/* section 1 */}
      <section className="py-[78px] max-w-[1240px] mx-auto relative overflow-y-hidden">
        <div className="absolute left-0 flex items-center">
          <Image
            src="/images/three_logo_triangle_left.png"
            alt=""
            className="w-[91px] h-auto hidden sm:block"
            width={141}
            height={194}
          />
          <Image
            src="/images/three_logo_triangle_left_small.png"
            alt=""
            className="w-[67px] h-auto sm:hidden"
            width={67}
            height={120}
          />
        </div>
        <div className="absolute right-0 flex items-center justify-end">
          <Image
            src="/images/three_logo_triangle_right.png"
            alt=""
            className="w-[71px] h-auto hidden sm:block"
            width={91}
            height={184}
          />
          <Image
            src="/images/three_logo_triangle_right_small.png"
            alt=""
            className="w-[57px] h-auto sm:hidden"
            width={67}
            height={120}
          />
        </div>
        <div className="text-center">
          <h1 className="text-[28px] lg:text-4xl xl:text-5xl xl:leading-none font-medium text-b-black-200">
            Move with Confidence
          </h1>
          <h1 className="text-[28px] lg:text-4xl xl:text-5xl leading-none font-medium text-b-dark-green">
            {' '}
            Do more with Ndewo
          </h1>
        </div>
      </section>
      {/* section 2 */}
      <HorizontalSpacing>
        <section className="bg-b-sand max-w-[1170px] xl:h-[620px] mx-auto border rounded-[20px] xl:rounded-[40px] flex flex-col lg:flex-row overflow-hidden">
          <div className="flex-1 px-5 pt-5 xl:pl-[80px] xl:py-[80px] flex flex-col xl:justify-between">
            <div>
              <h1 className="text-b-purple-light">
                FINANCIAL AND CREDIT FOOTPRINT
              </h1>
              <p className="text-2xl xl:text-3xl font-semibold my-4 xl:mb-6">
                Unlock unique opportunities simply by generating your financial
                report
              </p>
              <p className="text-base text-b-black-grey mb-6">
                We provide access to essential products that allow you access
                the lifestyle that you deserve.
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
        <section className="flex flex-col lg:flex-row my-8 xl:my-[100px] h-[715px] lg:h-[598px] xl:h-[698px] max-w-[1170px] mx-auto gap-5 xl:gap-10">
          <div className="flex-1 rounded-[20px] xl:rounded-[40px] relative hidden sm:block">
            <Image src="/images/graduate_student.png" alt="" fill />
          </div>
          <div className="lg:w-[57%] h-full flex flex-col justify-between rounded-[20px] xl:rounded-[40px] bg-black">
            <div className="xl:w-[90%] p-6 xl:px-10 xl:pt-20 xl:pb-0">
              <h1 className="text-b-purple-dark">STUDENT LOAN</h1>
              <h3 className="text-white text-2xl xl:text-3xl leading-none my-4 font-semibold">
                Access the funds you need to realise your academic goals
              </h3>
              <p className="text-b-black-grey-200">
                With Ndewo, you can access student loans and transform your
                financial challenges into opportunities. Move towards your
                future with confidence.
              </p>
              <div className="xl:self-end pt-6 sm:hidden">
                <StoreIcons />
              </div>
            </div>
            <div className="mt-6 xl:mt-0 flex flex-col lg:flex-row justify-between xl:align-bottom pl-6 xl:pl-10 xl:pr-0 xl:pb-0">
              <div className="lg:self-end pb-6 xl:pb-10 hidden sm:block">
                <StoreIcons />
              </div>
              <div className="self-end mt-12 xl:mt-0">
                <Image
                  src="/images/hat_icon.png"
                  alt=""
                  className="w-[560px] lg:w-[377px] h-auto"
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
        <section className="bg-b-light-200-green max-w-[1170px] lg:h-[598px] xl:h-[698px] mx-auto rounded-[20px] xl:rounded-[40px] flex flex-col lg:flex-row overflow-hidden">
          <div className="flex-1 flex flex-col xl:justify-between pl-5 pt-5 xl:pl-[80px] xl:py-[80px]">
            <div className="">
              <h1 className="text-b-purple-light">
                RENTAL & MORTGAGE OPPORTUNITIES
              </h1>
              <h3 className="text-2xl xl:text-3xl leading-none my-4 font-semibold">
                Cross-Border Rental & Mortgage Opportunities
              </h3>
              <p className="text-b-tertiary mb-6">
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
        <section className="flex flex-col lg:flex-row my-8 xl:my-[100px] max-w-[1170px] h-[715px] lg:h-[598px] xl:h-[698px] mx-auto gap-5 xl:gap-10 overflow-hidden">
          <div className="flex-1 rounded-[20px] xl:rounded-[40px] relative hidden sm:block">
            <Image
              src="/images/lady_shopping.png"
              alt="image of lady on phone with phone and card"
              fill
            />
          </div>
          <div className="lg:w-[57%] rounded-[20px] h-full flex flex-col justify-between xl:rounded-[40px] pb-0 pt-5 pl-5 xl:px-10 xl:pt-20 xl:pb-0 bg-b-purple-light">
            <div className="xl:w-[90%]">
              <h1 className="text-b-purple-light-200">CREDIT CARDS</h1>
              <h3 className="text-white text-2xl xl:text-3xl leading-none my-4 font-medium">
                Credit Cards that Elevate Your Lifestyle
              </h3>
              <p className="text-b-purple-light-300">
                Confidence has a new name - Ndewo. With our credit card offers,
                the sky becomes the beginning. We offer opportunities for
                credit-invisibles.
              </p>
            </div>
            <div className="flex justify-between flex-col xl:flex-row align-bottom">
              <div className="xl:self-end py-6 xl:py-10">
                <StoreIcons />
              </div>
              <div className="mt-36 lg:mt-0 self-end">
                <Image
                  src="/images/atm_cards.png"
                  alt=""
                  className="w-[562px]"
                  width={562}
                  height={400}
                />
              </div>
            </div>
          </div>
        </section>
      </HorizontalSpacing>
      {/* section 6 */}
      <LargeDashboard
        title="Built on Trust"
        description="Businesses make use of Ndewo to assess customer’s credit
              worthiness, make rental decision, verify employee’s details and so
              much more"
        buttonCta="Learn more"
      />

      {/* section 7 */}
      <HowItWorks />
      {/* section 8 */}
      <Testimonial />
      {/* section 9 */}
      <LargeHandWithPhone />
      {/* </div> */}
      <Footer />
    </main>
  );
}
