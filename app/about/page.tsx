import Image from 'next/image';
import Footer from '@/src/components/Footer';
import NavBar from '@/src/components/NavBar';

export default function About() {
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
          <NavBar />
          {/* <!-- Main --> */}
          <main className="text-center max-w-[1040px] mx-auto my-36">
            <h1 className="text-[96px] leading-none font-bold font-clashDisplay text-b-primary-900">
              We are building a future for the credit system
            </h1>
          </main>
        </header>
        <section className="rounded-[80px] border border-gray-200 grid grid-cols-2 max-w-[1240px] mx-auto bg-white px-20 py-14">
          <div className="w-full">
            <Image
              src="/images/about-hero.png"
              alt=""
              className="w-[448px] self-end"
              width={512}
              height={556}
            />
          </div>
          <div className="">
            <h3 className="text-[56px] leading-none mb-2 font-semibold">
              Our <br /> <span className="text-b-primary-700">Mission</span>
            </h3>
            <p className="text-b-tertiary text-lg">
              Lorem ipsum dolor sit amet consectetur. Ac morbi egestas diam sed
              ac suspendisse vel. Dignissim tristique arcu nunc accumsan amet
              viverra laoreet urna arcu. Et massa sem arcu tellus suspendisse
              duis blandit eleifend sed.
            </p>
          </div>
        </section>
        <section className="rounded-[80px] mt-10 border border-gray-200 max-w-[1240px] mx-auto bg-white px-20 py-14">
          <div className="grid grid-cols-2 mb-20">
            <h3 className="text-[56px] leading-none mb-2 font-semibold">
              Our <br /> <span className="text-b-primary-700">Team</span>
            </h3>
            <p className="text-b-tertiary text-lg">
              Lorem ipsum dolor sit amet consectetur. Ac morbi egestas diam sed
              ac suspendisse vel. Dignissim tristique arcu nunc accumsan amet
              viverra laoreet urna arcu. Et massa sem arcu tellus suspendisse
              duis blandit eleifend sed.
            </p>
          </div>
          <div className="grid grid-cols-4">
            {team.map((e, idx) => {
              return (
                <div
                  key={idx}
                  className="rounded-3xl w-[202px] h-[168px] border border-grey-200 flex flex-col justify-center items-center mb-8"
                >
                  <Image src={e.src} alt="" width={60} height={60} />
                  <h4 className="text-lg">{e.name}</h4>
                  <p className="text-b-tertiary">{e.position}</p>
                </div>
              );
            })}
          </div>
        </section>
        <section className="rounded-[80px] mt-10 border border-gray-200 max-w-[1240px] mx-auto bg-white px-20 py-14">
          <h3 className="text-[56px] leading-none mb-2 font-semibold text-center">
            Our <br /> <span className="text-b-primary-700">Partners</span>
          </h3>
          <div className="h-[30px] flex justify-center gap-6 my-20">
            <Image
              src="/svgs/okra-green-logo.svg"
              alt=""
              width={148}
              height={53}
            />
            <Image
              src="/svgs/Equifax-logo.svg"
              alt=""
              width={196}
              height={36}
            />
            <Image src="/svgs/mono-logo.svg" alt="" width={234} height={36} />
            <Image src="/svgs/creditec.svg" alt="" width={118} height={40} />
            <Image
              src="/svgs/FirstCentral Credit Bureau-logo-lg.svg"
              alt=""
              width={200}
              height={36}
            />
          </div>
        </section>
        <section className="mb-40 mt-10 max-w-[1240px] mx-auto bg-white px-20 py-14 text-center">
          <h3 className="text-[56px] leading-none mb-2 font-semibold text-b-primary-900">
            Join us in the journey
          </h3>
          <p className="text-b-grey-200">
            Lorem ipsum dolor sit amet consectetur. Ac morbi egestas diam sed ac
            suspendisse
          </p>
          <button className="text-base py-4 text-white bg-black rounded-full px-4 my-10">
            Request early access
          </button>
        </section>
      </main>
      <Footer />
    </div>
  );
}
