'use client';
import { useState } from 'react';
import Image from 'next/image';
import Footer from '@/src/components/Footer';
import NavBar from '@/src/components/NavBar/White';
import WaitList from '@/src/components/WaitList';
import Faq from '@/src/components/Faq';
import ContactForm from '@/src/components/ContactForm';
import HorizontalLogos from '@/src/components/HorizontalLogos';
import LargeDashboard from '@/src/components/LargeDashboard';

const HorizontalSpacing = (props: { children: React.ReactNode }) => (
  <div className="px-5 xl:px-0">{props.children}</div>
);

export default function Business() {
  const [showModal, setShowModal] = useState(false);

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const openModalHandler = () => {
    // setShowModal(true);
  };

  const items = [
    {
      text: 'Access to credit invisibles',
      icon: '/svgs/coloured_icons/credit_card.svg',
    },
    {
      text: 'Risk assessment for loan products',
      icon: '/svgs/coloured_icons/gauge.svg',
    },
    {
      text: 'Affordability assessment & monitoring',
      icon: '/svgs/coloured_icons/piggy_box.svg',
    },
    { text: 'Income verification', icon: '/svgs/coloured_icons/correct.svg' },
    { text: 'Tenant vetting', icon: '/svgs/coloured_icons/house.svg' },
    {
      text: 'Referencing and background checks',
      icon: '/svgs/coloured_icons/user.svg',
    },
  ];
  return (
    <main className="">
      <header className="bg-b-black-200">
        <NavBar openModalHandler={openModalHandler} />
        {/*  */}
        <WaitList showModal={showModal} closeHandler={closeModalHandler} />
        {/*  */}
        {/* <!-- Main --> */}
        <main className="text-center mt-10 md:mt-20 lg:mt-44">
          <div className="p-5 py-0 lg:p-0 max-w-[1495px] mx-auto">
            <h1 className="text-[32px] lg:text-5xl xl:text-7xl leading-none font-semibold text-white">
              Unlock New Demographics, Untapped Opportunities with Ndewo
            </h1>
            <p className="text-white mt-4 mb-7 text-base lg:text-lg xl:text-xl">
              Reach beyond the limitations of traditional credit scores. Ndewo
              empowers you to access a new customer landscape - individuals with
              non-traditional income, recent migration, or independent lives.
              Unlock a wider pool of qualified candidates, expand your reach,
              and discover untapped business opportunities.
            </p>
            <button
              onClick={openModalHandler}
              className="text-base py-4 text-black bg-white rounded-full px-[60px] my-10"
            >
              Learn More
            </button>
            <div className="flex xl:h-[860px] justify-center bg-[center_bottom_-1rem] relative overflow-hidden mt-16">
              <div className="">
                <Image
                  src="/images/dashboard_ndewo_imac.png"
                  alt=""
                  width={1346}
                  height={759}
                />
              </div>
            </div>
          </div>
        </main>
      </header>

      <section>
        <HorizontalLogos />
        <div className="max-w-[1052px] mx-auto grid grid-cols-2 xl:grid-cols-3 gap-7 mt-[88px]">
          {items.map((item, index) => (
            <div
              key={index}
              className="py-5 px-3 xl:py-10 w-[300px] h-[180px] border border-b-border-white rounded-3xl text-sm xl:text-base text-center flex flex-col items-center justify-center"
            >
              <Image
                src={item.icon}
                alt=""
                width={65}
                height={49}
                className="mb-6"
              />
              <p className="text-xl"> {item.text}</p>
            </div>
          ))}
        </div>
      </section>

      <HorizontalSpacing>
        <section className="grid grid-cols-1 lg:grid-cols-2 my-20 lg:my-[100px] max-w-[1440px] mx-auto gap-10 lg:gap-[30px] text-center lg:text-left">
          <div className="bg-b-purple-light rounded-[20px] xl:rounded-[40px] px-4 pt-6 lg:pl-10 lg:pr-[49px] lg:pt-20 lg:pb-6 h-[370px] xl:h-[790px]">
            <h3 className="text-[24px] xl:text-[56px] text-white leading-none mb-2 font-semibold">
              Access a New Customer Landscape: Expand Opportunities with Ndewo
            </h3>
            <p className="xl:text-2xl mb-4 text-b-purple-light-300 font-light py-4">
              Ndewo&apos;s AI-powered solutions provide access to a new
              demography of customers with non-traditional income or credit
              history, previously overlooked by traditional methods. Expand your
              reach, attract reliable individuals, and discover hidden
              opportunities by gaining a comprehensive view of their financial
              health.
            </p>
          </div>
          <div className="bg-b-light-200-green rounded-[20px] xl:rounded-[40px] px-4 pt-6 lg:pl-10 lg:pr-[49px] lg:pt-20 h-[370px] xl:h-[790px]">
            <h3 className="text-[24px] xl:text-[56px] text-black leading-none font-semibold">
              Get Insights into Customer Affordability, Beyond Traditional
              Limits
            </h3>
            <p className="xl:text-2xl mb-4 text-b-black-grey font-light py-4">
              Traditional checks often miss the whole picture. Ndewo empowers
              you to understand your customers&apos; true financial health
              through alternative data sources and AI-powered assessments. Make
              informed decisions about loans, subscriptions, and other
              offerings, expanding access while mitigating risk.
            </p>
          </div>
          <div className="bg-b-sand text-white rounded-[20px] xl:rounded-[40px] px-4 pt-6 lg:pl-10 lg:pr-[49px] lg:pt-20 h-[370px] xl:h-[790px]">
            <h3 className="text-[24px] xl:text-[56px] text-black leading-none font-semibold">
              Verify Income & Identity of Customers : Streamline onboarding &
              reduce risk with Ndewo
            </h3>
            <p className="xl:text-2xl mb-4 text-b-black-grey font-light py-4">
              Our AI-powered platform goes beyond traditional methods,
              accurately assessing financial stability & verifying identities -
              even for those with non-traditional income or recent migration
              history.
            </p>
          </div>
          <div className="bg-b-black-200 text-white rounded-[20px] xl:rounded-[40px] px-4 pt-6 lg:pl-10 lg:pr-[49px] lg:pt-20 h-[370px] xl:h-[790px]">
            <h3 className="text-[24px] xl:text-[56px] leading-none font-semibold">
              Make Informed Decisions, Empower Your Business: Ndewo Answers the
              &quot;Unusual Income&quot; Challenge.
            </h3>
            <p className="xl:text-2xl mb-4 text-b-black-grey-200 font-light py-4">
              Unsure if a client with non-traditional income or credit invisible
              qualifies ? Ndewo unlocks insights beyond traditional credit
              scores, empowering you to assess financial stability accurately
              and make informed decisions with confidence.
            </p>
          </div>
        </section>
      </HorizontalSpacing>
      <section className="my-8 xl:my-[240px] px-5 py-[50px] xl:py-20 bg-black">
        <div className="max-w-[1450px] mx-auto gap-10 xl:gap-10">
          <div className="flex flex-col justify-center items-center mb-10 max-w-[500px] m-auto text-center">
            <p className="text-[32px] xl:text-7xl text-white font-semibold">
              Rental product
            </p>
            <p className="pt-4 pb-6 text-b-grey text-xl">
              Verify tenant&apos;s information and complete reference in a very
              few minutes instead of 2 days
            </p>
            <button className="bg-b-light-green rounded-[40px] py-3 px-[40px] xl:py-4 xl:px-[60px] mt-24 xl:mt-0">
              Go to Rental
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
      <LargeDashboard
        title=" Rental product"
        description="Verify tenant's information and complete reference in a very
              few minutes instead of 2 days"
        buttonCta='Go to Rental'
      />
      <Faq />
      <HorizontalSpacing>
        <ContactForm />
      </HorizontalSpacing>
      <Footer />
    </main>
  );
}
