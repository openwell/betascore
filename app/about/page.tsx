'use client';
import { useState } from 'react';
import Image from 'next/image';
import Footer from '@/src/components/Footer';
import NavBar from '@/src/components/NavBar';
import WaitList from '@/src/components/WaitList';

export default function About() {
  const [showModal, setShowModal] = useState(false);

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const openModalHandler = () => {
    setShowModal(true);
  };

  const team = [
    {
      src: '/svgs/josh-avatar.svg',
      name: 'Josh',
      position: 'Founder & CEO',
    },
    {
      src: '/svgs/seun-avatar.svg',
      name: 'Seun',
      position: 'Co-Founder & COO',
    },
    {
      src: '/svgs/raph-avatar.svg',
      name: 'Raph',
      position: 'Head of Product',
    },
    {
      src: '/svgs/debo-avatar.svg',
      name: 'Debo',
      position: 'Marketing lead',
    },
    {
      src: '/svgs/solomon-avatar.svg',
      name: 'Solomon',
      position: 'Engineer',
    },
    {
      src: '/svgs/timi-avatar.svg',
      name: 'Timi',
      position: 'Engineer',
    },
    {
      src: '/svgs/daniel-avatar.svg',
      name: 'Daniel',
      position: 'Engineer',
    },
  ];
  return (
    <div>
      <main className="">
        <header>
          {/*  */}
          <WaitList showModal={showModal} closeHandler={closeModalHandler} />
          {/*  */}
          <NavBar openModalHandler={openModalHandler}/>
          {/* <!-- Main --> */}
          <main className="text-center max-w-[1040px] mx-auto my-10 lg:my-36">
            <h1 className="text-[40px] lg:text-[96px] leading-none font-bold font-clashDisplay text-b-primary-900">
              We are building a future for the credit system
            </h1>
          </main>
        </header>
        <div className="px-5 lg:px-0">
          <section className="rounded-[40px] lg:rounded-[80px] border border-gray-200 grid grid-cols-1 lg:grid-cols-2 max-w-[1240px] mx-auto bg-white px-4 lg:px-20 py-14">
            <div className="w-full">
              <Image
                src="/images/about-hero.png"
                alt=""
                className="w-[448px] self-end"
                width={512}
                height={556}
              />
            </div>
            <div className="text-center lg:text-left">
              <h3 className="text-[32px] lg:text-[56px] leading-none mb-2 font-semibold py-5 lg:py-0">
                <span className="hidden lg:block">
                  Our <br /> <span className="text-b-primary-600">Mission</span>
                </span>
                <span className="block lg:hidden">
                  Our <span className="text-b-primary-600">Mission</span>
                </span>
              </h3>
              <p className="text-b-tertiary text-lg">
                At BetaScore, we are driven by our mission to empower credit
                invisibles, foster financial inclusion, and shape a future where
                everyone has equal access to financial opportunities.
              </p>
            </div>
          </section>
          <section className="rounded-[40px] lg:rounded-[80px] mt-10 border border-gray-200 max-w-[1240px] mx-auto bg-white px-4 lg:px-20 py-14">
            <div className="grid grid-cols-1 lg:grid-cols-2 mb-20 text-center lg:text-left">
              <h3 className="text-[32px] lg:text-[56px] leading-none mb-2 font-semibold">
                <span className="hidden lg:block">
                  Our <br /> <span className="text-b-primary-600">Team</span>
                </span>
                <span className="block lg:hidden">
                  Our <span className="text-b-primary-600">Team</span>
                </span>
              </h3>
              <p className="text-b-tertiary text-lg">
                A dynamic and highly experienced team who are on a mission for
                credit and financial inclusion for credit invisibles.
              </p>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-4">
              {team.map((e, idx) => {
                return (
                  <div
                    key={idx}
                    className="rounded-3xl w-[146px] lg:w-[202px] h-[132px] lg:h-[168px] border border-grey-200 flex flex-col justify-center items-center mb-8"
                  >
                    <Image
                      src={e.src}
                      alt=""
                      width={60}
                      height={60}
                      className="w-[40px] h-[40px] lg:w-[60px] lg:h-[60px]"
                    />
                    <h4 className="text-base sm:text-lg">{e.name}</h4>
                    <p className="text-b-tertiary text-sm lg:text-base">
                      {e.position}
                    </p>
                  </div>
                );
              })}
            </div>
          </section>
          <section className="rounded-[40px] lg:rounded-[80px] mt-10 border border-gray-200 max-w-[1240px] mx-auto bg-white py-10 px-5 lg:px-20 lg:py-14">
            <h3 className="text-[32px] lg:text-[56px] leading-none mb-2 font-semibold text-center">
              <span className="hidden lg:block">
                {' '}
                Our <br /> <span className="text-b-primary-600">Partners</span>
              </span>
              <span className="block lg:hidden">
                {' '}
                Our <span className="text-b-primary-600">Partners</span>
              </span>
            </h3>
            <div className="h-[30px] flex justify-center items-center flex-wrap gap-4 lg:gap-6 my-20">
              <Image
                src="/svgs/okra-green-logo.svg"
                alt=""
                className="w-[56px] h-[20px] lg:w-[148px] lg:h-[53px]"
                width={148}
                height={53}
              />
              <Image
                src="/svgs/Equifax-logo.svg"
                alt=""
                className="w-[72px] h-[14px] lg:w-[196px] lg:h-[36px]"
                width={196}
                height={36}
              />
              <Image
                src="/svgs/mono-logo.svg"
                alt=""
                width={234}
                height={36}
                className="w-[88px] h-[14px] lg:w-[234px] lg:h-[36px]"
              />
              <Image
                src="/svgs/creditec.svg"
                alt=""
                width={118}
                height={40}
                className="w-[64px] h-[22px] lg:w-[118px] lg:h-[40px]"
              />
              <Image
                src="/svgs/FirstCentral Credit Bureau-logo-lg.svg"
                alt=""
                width={200}
                height={36}
                className="w-[56px] h-[20px] lg:w-[148px] lg:h-[53px]"
              />
            </div>
          </section>
          <section className="my-20 lg:mb-40 lg:mt-10 max-w-[1240px] mx-auto bg-white lg:px-20 lg:py-14 text-center">
            <h3 className="text-[40px] lg:text-[56px] leading-none mb-2 font-semibold text-b-primary-900">
              Join us in the journey
            </h3>
            <p className="text-b-grey-200">
              BetaScore is powering financial inclusion and credit opportunities
              of the future, today!
            </p>
            <button
              onClick={openModalHandler}
              className="text-base py-4 text-white bg-black rounded-full px-4 my-10"
            >
              Request early access
            </button>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
