import Image from 'next/image';
import Footer from '@/src/components/Footer';
import NavBar from '@/src/components/NavBar';

export default function Individual() {
  return (
    <main className="">
      <header>
        <NavBar />
        {/* <!-- Main --> */}
        <main className="text-center max-w-[1040px] mx-auto my-36">
          <h1 className="text-[96px] leading-none font-bold font-clashDisplay">
            <span className="text-b-primary-700">All-in-one </span> app that
            fosters financial inclusion
          </h1>
          <button className="text-base py-4 text-white bg-black rounded-full px-4 my-10">
            Request early access
          </button>
          <div>
            <Image
              src="/images/hero-charts.png"
              alt=""
              width={1261}
              height={410}
            />
          </div>
        </main>
      </header>

      <section className="bg-b-primary-700 px-16 pt-[60px] max-w-[1240px] mx-auto rounded-[80px] ">
        <div className="flex flex-col items-center justify-center max-w-2xl mx-auto text-center">
          <h1 className="text-white font-semibold text-[56px]">
            Merge credit report from more than one country
          </h1>
          <p className="text-lg text-b-outline mb-6">
            Lorem ipsum dolor sit amet consectetur. Ac morbi egestas diam sed ac
            suspendisse vel. Dignissim tristique arcu nunc accumsan amet viverra
            laoreet urna arcu. Et massa sem arcu tellus suspendisse duis blandit
            eleifend sed.
          </p>
          <div className="">
            <Image
              src="/svgs/world-map-grey.svg"
              alt=""
              width={400}
              height={200}
            />
          </div>
        </div>
      </section>

      <section className="grid grid-cols-2 m-[100px] max-w-[1240px] mx-auto gap-3">
        <div className="bg-[#6E59EA] rounded-[80px] px-10 pt-20 pb-6 text-white">
          <h3 className="text-[56px] leading-none mb-2 font-semibold">
            View your credit report
          </h3>
          <p className="text-lg mb-4 text-b-outline font-light">
            For the first time in history, your credit history and scores are
            now transferable across borders, thereby allowing you to enjoy the
            support and lifestyle you always had even when you migrate.
          </p>
          <div className="flex justify-center">
            <Image
              src="/svgs/illustration-1.svg"
              alt=""
              className="h-[403px]"
              width={358}
              height={382}
            />
          </div>
        </div>
        <div className="bg-black text-white rounded-[80px] px-10 pt-20">
          <h3 className="text-[56px] leading-none font-semibold">
            Your financial wellness
          </h3>
          <p className="text-lg mb-4 text-b-outline font-light">
            Irrespective of your needs- a house, car or to obtain a credit card,
            BetaScore makes a difference. Take control of your financial future
            today and supercharge your credit opportunities.
          </p>
          <div className="flex justify-center">
            <Image
              src="/svgs/illustration-2.svg"
              alt=""
              className="h-[403px]"
              width={603}
              height={400}
            />
          </div>
        </div>
      </section>
      <section className="max-w-[1240px] mx-auto mt-60">
        <h3 className="text-8xl mb-20 font-semibold text-b-primary-900 font-clashDisplay">
          Access to credit and financial services
        </h3>
        <div className=" grid grid-cols-2">
          <div className="rounded-3xl border border-grey-200 p-10 max-w-[576px] mb-5">
            <Image
              src="/svgs/graduation-cap.svg"
              alt=""
              width={100}
              height={100}
            />
            <h4 className='font-semibold text-b-primary-900 text-[56px]'>Student loan</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur. Ac morbi egestas diam sed
              ac suspendisse vel. Dignissim tristique arcu nunc accumsan amet
              viverra laoreet
            </p>
          </div>
          <div className="rounded-3xl border border-grey-200 p-10 max-w-[576px] mb-5">
            <Image
              src="/svgs/house-percent.svg"
              alt=""
              width={100}
              height={100}
            />
            <h4 className='font-semibold text-b-primary-900 text-[56px]'>Mortgage</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur. Ac morbi egestas diam sed
              ac suspendisse vel. Dignissim tristique arcu nunc accumsan amet
              viverra laoreet
            </p>
          </div>
          <div className="rounded-3xl border border-grey-200 p-10 max-w-[576px] mb-5">
            <Image
              src="/svgs/bag-money.svg"
              alt=""
              width={100}
              height={100}
            />
            <h4 className='font-semibold text-b-primary-900 text-[56px]'>Loans</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur. Ac morbi egestas diam sed
              ac suspendisse vel. Dignissim tristique arcu nunc accumsan amet
              viverra laoreet
            </p>
          </div>
          <div className="rounded-3xl border border-grey-200 p-10 max-w-[576px] mb-5">
            <Image
              src="/svgs/house.svg"
              alt=""
              width={100}
              height={100}
            />
            <h4 className='font-semibold text-b-primary-900 text-[56px]'>Beta rent</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur. Ac morbi egestas diam sed
              ac suspendisse vel. Dignissim tristique arcu nunc accumsan amet
              viverra laoreet
            </p>
          </div>
        </div>
      </section>
      <section className="max-w-[1240px] mx-auto mt-20 rounded-[80px] border border-grey-200">
        <div className="rounded-[80px] grid grid-cols-2 bg-white px-20 py-20">
          <div className="self-center">
            <h3 className="text-[56px] leading-none font-semibold">
              Get started with Betascore
            </h3>
            <p className="text-b-tertiary text-lg py-4">
              You can now travel and move across borders with 1 less thing to
              worry about. Wherever you go, your credit score goes with you and
              countless credit opportunities await you.
            </p>
            <div className="flex mt-10 gap-6">
              <Image
                src="/svgs/apple-store.svg"
                alt=""
                className="w-[180px] h-[56px] mr-4"
                width={166}
                height={56}
              />
              <Image
                src="/svgs/play-store.svg"
                alt=""
                className="w-[180px] h-[56px]"
                width={166}
                height={56}
              />
            </div>
          </div>
          <div className="flex justify-center">
            <Image
              src="/images/iPhone12Mockup.png"
              alt=""
              className="w-[186px] h-[512px]"
              width={186}
              height={512}
            />
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
