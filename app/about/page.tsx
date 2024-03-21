'use client';
import { useState } from 'react';
import Image from 'next/image';
import Footer from '@/src/components/Footer';
import NavBar from '@/src/components/NavBar';
import WaitList from '@/src/components/WaitList';
import StoreButtonsGroup from '@/src/components/StoreButtonsGroup';
import ContactForm from '@/src/components/ContactForm';

const HorizontalSpacing = (props: { children: React.ReactNode }) => (
  <div className="px-5 xl:px-0">{props.children}</div>
);

export default function About() {
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
    'Rental reference',
    'Rental guarantee',
    'Financial health check',
  ];
  return (
    <div>
      <main className="">
        <header>
          {/*  */}
          <WaitList showModal={showModal} closeHandler={closeModalHandler} />
          {/*  */}
          <NavBar openModalHandler={openModalHandler} />
          {/* <!-- Main --> */}
          <main className="text-center my-10 md:my-20 lg:my-44">
            <div className="p-5 lg:p-0 max-w-[1520px] mx-auto">
              <h1 className="text-[32px] lg:text-5xl xl:text-7xl leading-none font-semibold">
                We are building a future for the financial system
              </h1>
              <p className="mt-4 text-base lg:text-lg xl:text-xl">
                Bridging the financial gap: We empower credit-invisibles to move
                freely and access amazing opportunities. Our partners gain
                unrivaled access to this previously untapped market.
              </p>
              <StoreButtonsGroup />
            </div>
            <HorizontalSpacing>
              <div className="p-5 lg:p-0 max-w-[1373px] mx-auto my-6 lg:my-32 xl:my-52">
                <p className="text-b-purple-light text-xl lg:text-3xl xl:text-[40px] pb-6">
                  Our impact so far
                </p>
                <div className="w-full grid grid-cols-2 gap-y-4 lg:flex flex-wrap">
                  <div className="flex-1">
                    <p className="text-[40px] xl:text-[90px] font-semibold leading-none">
                      100k
                    </p>
                    <p className="text-b-black-grey">Customers served</p>
                  </div>
                  <div className="flex-1">
                    {' '}
                    <p className="text-[40px] xl:text-[90px] font-semibold leading-none">
                      2k
                    </p>
                    <p className="text-b-black-grey">References provided</p>
                  </div>
                  <div className="flex-1">
                    {' '}
                    <p className="text-[40px] xl:text-[90px] font-semibold leading-none">
                      500
                    </p>
                    <p className="text-b-black-grey">Businesses supported</p>
                  </div>
                  <div className="flex-1">
                    {' '}
                    <p className="text-[40px] xl:text-[90px] font-semibold leading-none">
                      100k+
                    </p>
                    <p className="text-b-black-grey">
                      Credit and financial report generated
                    </p>
                  </div>
                </div>
              </div>
            </HorizontalSpacing>
            <HorizontalSpacing>
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
            </HorizontalSpacing>
          </main>
        </header>

        <section className="bg-b-black-200 px-4 py-10 lg:px-10 xl:px-20 lg:py-40">
          <div className="max-w-[1520px] mx-auto grid grid-cols-1 lg:grid-cols-2">
            <div className="">
              <div className="w-full flex justify-center lg:hidden">
                <Image
                  src="/images/ndewo_circular_large.png"
                  alt=""
                  className="w-[224px]"
                  width={224}
                  height={224}
                />
              </div>
              <div className="mb-10 xl:mb-20">
                <h3 className="text-[32px] lg:text-5xl xl:text-7xl text-white leading-none mb-2 font-semibold py-5 lg:py-0">
                  Our Mission
                </h3>
                <p className="text-[#A5A5A5] xl:text-xl">
                  At BetaScore Finance Limited, we aim to empower individuals
                  who are currently credit-invisible due to factors like
                  non-traditional income, recent migration, or starting
                  independent lives to achieve financial mobility. We do this by
                  providing equitable access to essential services like housing
                  and credit, fostering greater inclusion and opportunity for
                  all.
                </p>
              </div>
              <div>
                <h3 className="text-[32px] lg:text-5xl xl:text-7xl text-white leading-none mb-2 font-semibold py-5 lg:py-0">
                  Our Vision
                </h3>
                <p className="text-[#A5A5A5] xl:text-xl">
                  To be the world&apos;s leading platform for empowering
                  credit-invisible individuals, regardless of background or
                  circumstance, by transforming their financial data into
                  pathways to financial inclusion, mobility, and security.
                </p>
                <button className="bg-b-light-green lg:hidden rounded-[40px] py-3 px-[40px] mt-10">
                  Learn more
                </button>
              </div>
            </div>
            <div className="w-full lg:flex justify-center hidden">
              <Image
                src="/images/ndewo_circular_large.png"
                alt=""
                className="w-[600px] self-end"
                width={600}
                height={600}
              />
            </div>
          </div>
        </section>
        <HorizontalSpacing>
          <section className="max-w-[1450px] mx-auto my-36 xl:mt-[200px] xl:mb-[300px]">
            <div className="text-center">
              <h1 className="text-[40px] lg:text-5xl xl:text-7xl leading-none font-medium text-b-black-200">
                One platform,
              </h1>
              <h1 className="text-[40px] lg:text-5xl xl:text-[72px] leading-none font-medium text-b-purple-light">
                {' '}
                Limitless Opportunities
              </h1>
            </div>
            <div className="max-w-[1450px] mx-auto grid grid-cols-2 xl:grid-cols-3 gap-7 mt-24">
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
        <section className="bg-b-sand px-4 lg:px-10 xl:px-20 py-10 xl:py-40">
          <div className="max-w-[1520px] mx-auto grid grid-cols-1 lg:grid-cols-2">
            <div className="w-full flex justify-center lg:hidden mb-20">
              <Image
                src="/images/ndewo_big.png"
                alt=""
                className="w-[284px]"
                width={485}
                height={100}
              />
            </div>
            <div className="">
              <h3 className="text-[32px] md:text-5xl xl:text-7xl text-b-black-200 leading-none mb-2 xl:mb-10 font-semibold py-5 lg:py-0">
                Why we started
              </h3>
              <div className="text-b-black-grey xl:text-2xl">
                <p>
                  We understand the challenges credit invisibles face when
                  moving to a new country. Traditional systems often don&apos;t
                  recognize your financial history, making it difficult to
                  access essential services and build credit locally.
                </p>
                <br />
                <p>
                  That&apos;s where Ndewo comes in. We leverage your home credit and
                  financial data to empower you with:
                </p>
                <br />
                <p>
                  - Fair and accurate credit assessment: We go beyond
                  traditional metrics to give you a true picture of your
                  financial health.
                </p>
                <br />
                <p>
                  - Access to essential services: Rent an apartment, loans, get
                  a phone line, and enjoy other perks based on your unique
                  financial profile.
                </p>
                <br />
                <p>
                  - Personalised financial guidance: Learn how to build credit
                  and achieve your financial goals with our educational
                  resources and tools.
                </p>
                <br />
                <p>
                  We&apos;re confident that Ndewo will be your key to unlocking a
                  world of financial opportunities and achieving your dreams in
                  your new home.
                </p>
              </div>
              <div>
                <div className="w-[146px] lg:w-[202px] h-[132px] lg:h-[168px] flex justify-center gap-4 items-center mb-8">
                  <Image
                    src="/svgs/josh-avatar.svg"
                    alt=""
                    width={60}
                    height={60}
                    className="w-[40px] h-[40px] lg:w-[60px] lg:h-[60px]"
                  />
                  <div>
                    <h4 className="text-base sm:text-lg">Josh</h4>
                    <p className="text-b-tertiary text-sm lg:text-base whitespace-nowrap">
                      Founder & CEO
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full lg:flex justify-center hidden">
              <Image
                src="/images/ndewo_big.png"
                alt=""
                className="lg:w-[280px] xl:w-[485px] self-center"
                width={485}
                height={100}
              />
            </div>
          </div>
        </section>
        <HorizontalSpacing>
          <ContactForm />
        </HorizontalSpacing>
        <section className="my-8 lg:my-[100px] bg-black">
          <div className="max-w-[1450px] mx-auto gap-10 py-10 xl:py-[300px]">
            <div className="flex flex-col justify-center items-center mb-10 text-center">
              <p className="text-2xl lg:text-5xl xl:text-7xl text-white font-medium pb-12 pt-10 leading-none">
                Ndewo by Betascore Finance Limited is powering financial
                inclusion and opportunities of the future today!
              </p>
              <button className="bg-b-light-green rounded-[40px] py-3 px-[19px] flex items-center justify-center">
                <Image
                  src="/images/ndewo_icon.png"
                  alt="beta-score logo"
                  width={32}
                  height={32}
                />
                <span className="text-black ml-[12px] mr-[8px] text-xl">
                  Download app
                </span>
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
