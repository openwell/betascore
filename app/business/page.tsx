'use client';
import { useState } from 'react';
import Image from 'next/image';
import Footer from '@/src/components/Footer';
import NavBar from '@/src/components/NavBar/White';
import WaitList from '@/src/components/WaitList';
import Faq from '@/src/components/Faq';
import ContactForm from '@/src/components/ContactForm';

const HorizontalSpacing = (props) => (
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
    'Access to credit invisibles',
    'Risk assessment for loan products',
    'Affordability assessment & monitoring',
    'Income verification',
    'Tenant vetting',
    'Referencing and background checks',
  ];
  return (
    <main className="">
      <header className="bg-b-black-200">
        <NavBar openModalHandler={openModalHandler} />
        {/*  */}
        <WaitList showModal={showModal} closeHandler={closeModalHandler} />
        {/*  */}
        {/* <!-- Main --> */}
        <main className="text-center my-10 md:my-20 lg:my-44">
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

      <HorizontalSpacing>
        <section className="max-w-[1495px] mx-auto">
          <div className="text-center">
            <p className="text-b-black-grey font-semibold">
              TRUSTED BY MERCHANTS AND BUSINESSES
            </p>
            <div className="xl:h-[30px] flex justify-center items-center flex-wrap gap-6 mt-6">
              <Image
                src="/svgs/okra-green-logo.svg"
                alt=""
                className="w-[62px] h-[24px] lg:w-[84px] lg:h-[30px]"
                width={84}
                height={30}
              />
              <Image
                src="/svgs/Barclays-logo.svg"
                alt=""
                width={106}
                height={18}
                className="w-[94px] h-[16px] lg:w-[106px] lg:h-[18px]"
              />
              <Image
                src="/svgs/Equifax-logo.svg"
                alt=""
                className="w-[88px] h-[16px] lg:w-[106px] lg:h-[18px]"
                width={106}
                height={18}
              />
              <Image
                src="/svgs/mono-logo.svg"
                alt=""
                width={110}
                height={20}
                className="w-[104px] h-[16px] lg:w-[110px] lg:h-[20px]"
              />
              <Image
                src="/svgs/FirstCentral Credit Bureau-logo-lg.svg"
                alt=""
                width={110}
                height={20}
                className="w-[88px] h-[16px] lg:w-[110px] lg:h-[20px]"
              />
            </div>
          </div>
          <div className="max-w-[1450px] mx-auto grid grid-cols-2 xl:grid-cols-3 gap-7 mt-14">
            {items.map((item, index) => (
              <div
                key={index}
                className="py-5 px-3 xl:py-14 rounded-full text-sm xl:text-base border border-b-black-grey text-center flex items-center justify-center"
              >
                <p> {item}</p>
              </div>
            ))}
          </div>
        </section>
      </HorizontalSpacing>

      <HorizontalSpacing>
        <section className="grid grid-cols-1 lg:grid-cols-2 my-20 lg:my-[100px] max-w-[1495px] mx-auto gap-10 lg:gap-[30px] text-center lg:text-left">
          <div className="bg-b-purple-light rounded-[20px] xl:rounded-[40px] px-4 pt-6 lg:px-10 lg:pt-20 lg:pb-6 h-[370px] xl:h-[790px]">
            <h3 className="text-[24px] xl:text-[56px] text-b-purple-light-300 leading-none mb-2 font-semibold">
              Access a New Customer Landscape: Expand Opportunities with Ndewo
            </h3>
            <p className="xl:text-lg mb-4 text-b-purple-light-300 font-light py-4">
              Ndewo's AI-powered solutions provide access to a new demography of
              customers with non-traditional income or credit history,
              previously overlooked by traditional methods. Expand your reach,
              attract reliable individuals, and discover hidden opportunities by
              gaining a comprehensive view of their financial health.
            </p>
          </div>
          <div className="bg-b-light-200-green rounded-[20px] xl:rounded-[40px] px-4 pt-6 lg:px-10 lg:pt-20 h-[370px] xl:h-[790px]">
            <h3 className="text-[24px] xl:text-[56px] text-black leading-none font-semibold">
              Get Insights into Customer Affordability, Beyond Traditional
              Limits
            </h3>
            <p className="xl:text-lg mb-4 text-b-black-grey font-light py-4">
              Traditional checks often miss the whole picture. Ndewo empowers
              you to understand your customers' true financial health through
              alternative data sources and AI-powered assessments. Make informed
              decisions about loans, subscriptions, and other offerings,
              expanding access while mitigating risk.
            </p>
          </div>
          <div className="bg-b-sand text-white rounded-[20px] xl:rounded-[40px]  px-4 pt-6 lg:px-10 lg:pt-20 h-[370px] xl:h-[790px]">
            <h3 className="text-[24px] xl:text-[56px] text-black leading-none font-semibold">
              Verify Income & Identity of Customers : Streamline onboarding &
              reduce risk with Ndewo
            </h3>
            <p className="xl:text-lg mb-4 text-b-black-grey font-light py-4">
              Our AI-powered platform goes beyond traditional methods,
              accurately assessing financial stability & verifying identities -
              even for those with non-traditional income or recent migration
              history.
            </p>
          </div>
          <div className="bg-b-black-200 text-white rounded-[20px] xl:rounded-[40px]  px-4 pt-6 lg:px-10 lg:pt-20 h-[370px] xl:h-[790px]">
            <h3 className="text-[24px] xl:text-[56px] leading-none font-semibold">
              Make Informed Decisions, Empower Your Business: Ndewo Answers the
              "Unusual Income" Challenge.
            </h3>
            <p className="xl:text-lg mb-4 text-b-black-grey-200 font-light py-4">
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
          <div className="flex flex-col justify-center items-center mb-10 max-w-[550px] m-auto text-center">
            <p className="text-[32px] xl:text-7xl text-white font-semibold">
              Rental product
            </p>
            <p className="pt-4 pb-6 text-b-black-grey">
              Verify tenant’s information and complete reference in a very few
              minutes instead of 2 days
            </p>
            <button className="bg-b-light-green rounded-[40px] py-3 px-[40px] xl:py-4 xl:px-[60px] mt-24 xl:mt-0">
              Access via desktop
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
      <HorizontalSpacing>
       <ContactForm/>
      </HorizontalSpacing>
      <Faq />
      <Footer />
    </main>
  );
}
