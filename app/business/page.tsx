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
          <div className="p-5 py-0 lg:p-0 max-w-[950px] mx-auto">
            <div>
              <h1 className="text-[32px] lg:text-5xl xl:text-7xl leading-none font-semibold text-white">
                Unlock New Revenue Opportunities
              </h1>
            </div>
            <p className="text-white mt-4 mb-7 text-base lg:text-lg xl:text-xl">
              Reach beyond the limitations of traditional credit scores. Ndewo
              is your gateway to access new customers - digital nomads, recent
              migrants, or alternative earners. Discover untapped business
              opportunities.
            </p>

            <a
              href="#zoho-form"
              onClick={openModalHandler}
              className="text-base py-4 text-black bg-white rounded-full px-[60px] my-10 inline-block"
            >
              Learn More
            </a>
            <div className="flex xl:h-[660px] justify-center bg-[center_bottom_-1rem] relative overflow-hidden mt-16">
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
        <div className="max-w-[1052px] mx-auto px-5 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-3 lg:gap-7 mt-10 lg:mt-[88px] place-items-center">
          {items.map((item, index) => (
            <div
              key={index}
              className="py-5 px-3 xl:py-10 w-full md:w-[300px] md:h-[180px] border border-b-border-white rounded-lg md:rounded-3xl text-sm xl:text-base md:text-center gap-4 md:gap-2 flex sm:flex-col items-center md:justify-center"
            >
              <Image
                src={item.icon}
                alt=""
                width={65}
                height={49}
                className="w-[52px] xl:[65px]"
              />
              <div>
                <p className="font-medium"> {item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* <HorizontalSpacing> */}
      <section className="px-5 grid grid-cols-1 md:grid-cols-2 my-20 lg:my-[100px] max-w-[960px] mx-auto gap-10 lg:gap-[30px] md:text-center lg:text-left">
        <div className="bg-b-purple-light rounded-[20px] xl:rounded-[40px] px-4 pt-6 lg:px-10 lg:pt-20 lg:pb-6 xl:h-[435px]">
          <h3 className="text-[24px]  text-white md:leading-none  mb-2 font-semibold">
            Access a New Customer Landscape: Expand Opportunities with Ndewo
          </h3>
          <p className=" mb-4 text-b-purple-light-300 py-4">
            Ndewo&apos;s AI-powered solutions provide access to a new demography
            of customers with non-traditional income or credit history,
            previously overlooked by traditional methods. Expand your reach,
            attract reliable individuals, and discover hidden opportunities by
            gaining a comprehensive view of their financial health.
          </p>
        </div>
        <div className="bg-b-light-200-green rounded-[20px] xl:rounded-[40px] px-4 pt-6 lg:px-10 lg:pt-20 xl:h-[435px]">
          <h3 className="text-[24px]  text-black md:leading-none font-semibold">
            Get Insights into Customer Affordability, Beyond Traditional Limits
          </h3>
          <p className=" mb-4 text-b-black-grey py-4">
            Traditional checks often miss the whole picture. Ndewo empowers you
            to understand your customers&apos; true financial health through
            alternative data sources and AI-powered assessments. Make informed
            decisions about loans, subscriptions, and other offerings, expanding
            access while mitigating risk.
          </p>
        </div>
        <div className="bg-b-sand text-white rounded-[20px] xl:rounded-[40px] px-4 pt-6 lg:px-10 lg:pt-20 xl:h-[435px]">
          <h3 className="text-[24px]  text-black md:leading-none font-semibold">
            Verify Income & Identity of Customers : Streamline onboarding &
            reduce risk with Ndewo
          </h3>
          <p className=" mb-4 text-b-black-grey py-4">
            Our AI-powered platform goes beyond traditional methods, accurately
            assessing financial stability & verifying identities - even for
            those with non-traditional income or recent migration history.
          </p>
        </div>
        <div className="bg-b-black-200 text-white rounded-[20px] xl:rounded-[40px] px-4 pt-6 lg:px-10 lg:pt-20 xl:h-[435px]">
          <h3 className="text-[24px]  md:leading-none font-semibold">
            Make Informed Decisions, Empower Your Business: Ndewo Answers the
            &quot;Unusual Income&quot; Challenge.
          </h3>
          <p className=" mb-4 text-b-black-grey-200 py-4">
            Unsure if a client with non-traditional income or credit invisible
            qualifies ? Ndewo unlocks insights beyond traditional credit scores,
            empowering you to assess financial stability accurately and make
            informed decisions with confidence.
          </p>
        </div>
      </section>
      {/* </HorizontalSpacing> */}
      <LargeDashboard
        title=" Rental product"
        description="Verify tenant's information and complete reference in a very
              few minutes instead of 2 days"
        buttonCta="Learn more"
        externalLink
        link='https://rent.ndewo.com/'
      />
      <Faq />
      <HorizontalSpacing>
        <ContactForm />
      </HorizontalSpacing>
      <Footer />
    </main>
  );
}
