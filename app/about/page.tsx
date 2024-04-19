'use client';
import { useState } from 'react';
import Image from 'next/image';
import Footer from '@/src/components/Footer';
import NavBar from '@/src/components/NavBar';
import WaitList from '@/src/components/WaitList';
import StoreButtonsGroup from '@/src/components/StoreButtonsGroup';
import ContactForm from '@/src/components/ContactForm';
import HorizontalLogos from '@/src/components/HorizontalLogos';
import classNames from 'classnames';

const HorizontalSpacing = (props: { children: React.ReactNode }) => (
  <div className="px-5 xl:px-0">{props.children}</div>
);
const Card = ({ title, subTile, customBgClass }: { title: string; subTile: string, customBgClass?: string }) => {
  return (
    <div className={classNames("flex flex-col justify-end w-[150px] xl:w-[260px] h-[142px] xl:h-[248px] rounded-[11px] xl:rounded-[30px] pl-4 pb-4 xl:pl-5", customBgClass)}>
      <p className="text-[40px] xl:text-[80px] font-semibold leading-none">
        {title}
      </p>
      <p
        className="xl:text-3xl"
        dangerouslySetInnerHTML={{ __html: subTile }}
      />
    </div>
  );
};

export default function About() {
  const [showModal, setShowModal] = useState(false);

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const openModalHandler = () => {
    // setShowModal(true);
  };

  return (
    <div>
      <main className="">
        <header>
          {/*  */}
          <WaitList showModal={showModal} closeHandler={closeModalHandler} />
          {/*  */}
          <NavBar openModalHandler={openModalHandler} />
          {/* <!-- Main --> */}
          <main className="px-5 mt-10 md:mt-20 lg:mt-44">
            <div className="p-5 lg:p-0 max-w-[1080px] mx-auto text-center">
              <h1 className="text-[32px] lg:text-5xl xl:text-7xl leading-none font-semibold">
                We are building a future for the financial system
              </h1>
            </div>
            <div className="max-w-[1500px] mx-auto text-center">
              <p className="mt-4 text-base lg:text-lg xl:text-xl">
                Bridging the financial gap: We empower credit-invisibles to move
                freely and access amazing opportunities. Our partners gain
                unrivaled access to this previously untapped market.
              </p>
              <StoreButtonsGroup />
            </div>

            <div className="lg:p-0 max-w-[1286px] gap-5 mx-auto my-6 lg:my-36 flex flex-wrap justify-center items-center md:flex-nowrap">
              <div className="flex flex-col justify-end bg-cover xl:bg-auto bg-[linear-gradient(to_right_bottom,rgba(0,0,0,0.4),rgba(0,0,0,0.4)),url('/images/teamwork.png')] bg-no-repeat bg-top w-full h-[230px] md:h-[330px] lg:w-[60%] xl:w-[712px] lg:h-[316px] xl:h-[516px] rounded-xl lg:rounded-[30px]">
                <div className="w-56 xl:w-[70%]">
                  <p className="text-white !leading-tight text-3xl xl:text-[72px] p-5 lg:p-8">
                    Our Impact so far
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-[40%] xl:w-[50%] h-full items-center justify-center flex flex-wrap gap-5">
                <Card title="100k" subTile="Customers <br /> served" customBgClass='bg-b-light-green' />
                <Card title="2k" subTile="References <br /> provided" customBgClass='bg-b-light-300-green' />
                <Card title="500" subTile="Businesses <br /> supported"  customBgClass='bg-b-light-400-green'/>
                <Card title="100k+" subTile="Reports <br /> Generated" customBgClass='bg-b-light-500-green'/>
              </div>
            </div>
          </main>
          <HorizontalLogos />
        </header>

        <section className="bg-b-black-200 px-4 py-10 lg:px-10 xl:px-20 lg:py-40">
          <div className="max-w-[1520px] mx-auto grid grid-cols-1 lg:grid-cols-2 place-items-center">
            <div className="">
              <div className="mb-10 xl:mb-20">
                <h3 className="text-[32px] lg:text-5xl xl:text-7xl text-white leading-none mb-2 font-semibold py-5 lg:py-0">
                  Our Mission
                </h3>
                <p className="text-b-grey-600 xl:text-xl">
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
                <p className="text-b-grey-600 xl:text-xl">
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
          <section className="max-w-[1450px] rounded-[20px] lg:rounded-[30px] mx-auto my-10 xl:mt-[108px] xl:mb-[150px] bg-b-light-green lg:pt-24">
            <div className="text-center py-10 lg:pb-24">
              <h1 className="text-2xl lg:text-[40px] lg:text-5xl xl:text-7xl leading-none font-medium text-b-black-200">
                One platform,
              </h1>
              <h1 className="text-2xl lg:text-[40px] lg:text-5xl xl:text-[72px] leading-none font-medium">
                {' '}
                Limitless Opportunities
              </h1>
            </div>
            <div>
              <Image
                className="hidden md:block"
                src="/images/services_long.png"
                width={1611}
                height={492}
                alt="services"
              />
              <Image
                className="block md:hidden"
                src="/images/services_short.png"
                width={1611}
                height={492}
                alt="services"
              />
            </div>
          </section>
        </HorizontalSpacing>
        <section className="bg-b-sand px-4 lg:px-10 xl:px-20 py-10 xl:pt-[126px] xl:pb-[80px]">
          <div className="max-w-[1520px] mx-auto grid grid-cols-1 lg:grid-cols-2">
            <div className="w-full flex justify-center lg:hidden pt-20 pb-14 lg:mb-20">
              <Image
                src="/images/ndewo_big.png"
                alt=""
                className="w-[169px] lg:w-[284px]"
                width={485}
                height={100}
              />
            </div>
            <div className="">
              <h3 className="text-[32px] lg:text-5xl xl:text-7xl text-b-black-200 leading-none mb-2 xl:mb-10 font-semibold py-5 lg:py-0">
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
                  That&apos;s where Ndewo comes in. We leverage your home credit
                  and financial data to empower you with:
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
                  We&apos;re confident that Ndewo will be your key to unlocking
                  a world of financial opportunities and achieving your dreams
                  in your new home.
                </p>
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

          <div className="max-w-[1520px] flex gap-4 m-auto mt-16">
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
        </section>
        <HorizontalSpacing>
          <ContactForm />
        </HorizontalSpacing>
        <section className="my-8 lg:my-[100px] bg-black">
          <div className="max-w-[1450px] mx-auto gap-10 py-10 lg:py-[200px] xl:py-[300px]">
            <div className="flex flex-col justify-center items-center mb-10 text-center">
              <p className="text-2xl lg:text-5xl xl:text-7xl text-white font-medium pb-12 pt-10 px-12 lg:px-20 leading-none">
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
