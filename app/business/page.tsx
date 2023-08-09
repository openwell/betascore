import Image from 'next/image';
import Footer from '@/src/components/Footer';
import NavBar from '@/src/components/NavBar';
import Faq from '@/src/components/Faq';

export default function Business() {
  return (
    <main className="">
      <header>
        <NavBar />
        {/* <!-- Main --> */}
        <main className="text-center max-w-[1040px] mx-auto my-36">
          <h1 className="text-[96px] leading-none font-bold text-b-primary-900 font-clashDisplay">
            Access to a new demography of customers
          </h1>
          <button className="text-base py-4 text-white bg-black rounded-full px-4 my-10">
            Request early access
          </button>
          <div>
            <Image
              src="/images/dashboard-large.png"
              alt=""
              width={1261}
              height={410}
            />
          </div>
        </main>
      </header>
      <section className=" px-16 pt-[60px] max-w-[1240px] mx-auto">
        <p className="text-b-dark-200 mb-6 text-center font-semibold">
          TRUSTED BY MERCHANTS AND BUSINESSES
        </p>
        <div className="h-[30px] flex justify-center gap-6">
          <Image src="/svgs/okra-logo.svg" alt="" width={84} height={30} />
          <Image src="/svgs/Barclays-logo.svg" alt="" width={106} height={18} />
          <Image src="/svgs/Equifax-logo.svg" alt="" width={112} height={20} />
          <Image
            src="/svgs/FirstCentral Credit Bureau-logo.svg"
            alt=""
            width={110}
            height={20}
          />
        </div>
      </section>

      <section className="grid grid-cols-2 m-[100px] max-w-[1240px] mx-auto gap-3">
        <div className="bg-b-primary-700 rounded-[80px] px-10 pt-20 pb-6 text-white">
          <h3 className="text-[56px] leading-none mb-2 font-semibold">
            Serve people with unusual income pattern
          </h3>
          <p className="text-lg mb-4 text-b-outline font-light">
            For the first time in history, your credit history and scores are
            now transferable across borders, thereby allowing you to enjoy the
            support and lifestyle you always had even when you migrate.
          </p>
          <div className="flex justify-center">
            <Image
              src="/svgs/illustration-4.svg"
              alt=""
              className="h-[403px]"
              width={358}
              height={382}
            />
          </div>
        </div>
        <div className="bg-black text-white rounded-[80px] px-10 pt-20">
          <h3 className="text-[56px] leading-none font-semibold">
            Get insight into customer’s affordability
          </h3>
          <p className="text-lg mb-4 text-b-outline font-light">
            Irrespective of your needs- a house, car or to obtain a credit card,
            BetaScore makes a difference. Take control of your financial future
            today and supercharge your credit opportunities.
          </p>
          <div className="flex justify-center">
            <Image
              src="/svgs/illustration-6.svg"
              alt=""
              className="h-[403px]"
              width={603}
              height={400}
            />
          </div>
        </div>
      </section>
      <section className="grid grid-cols-2 m-[100px] max-w-[1240px] mx-auto gap-3">
        <div className="bg-b-purple rounded-[80px] px-10 pt-20 pb-6 text-white">
          <h3 className="text-[56px] leading-none mb-2 font-semibold">
            Verify income and identity of customers
          </h3>
          <p className="text-lg mb-4 text-b-outline font-light">
            For the first time in history, your credit history and scores are
            now transferable across borders, thereby allowing you to enjoy the
            support and lifestyle you always had even when you migrate.
          </p>
          <div className="flex justify-center">
            <Image
              src="/svgs/illustration-3.svg"
              alt=""
              className="h-[403px]"
              width={358}
              height={382}
            />
          </div>
        </div>
        <div className="bg-b-filigree text-white rounded-[80px] px-10 pt-20">
          <h3 className="text-[56px] leading-none font-semibold text-b-primary-900">
            Make informed decision about your products
          </h3>
          <p className="text-lg mb-4 text-b-grey-200 font-light">
            Irrespective of your needs- a house, car or to obtain a credit card,
            BetaScore makes a difference. Take control of your financial future
            today and supercharge your credit opportunities.
          </p>
          <div className="flex justify-center">
            <Image
              src="/svgs/illustration-5.svg"
              alt=""
              className="h-[403px]"
              width={603}
              height={400}
            />
          </div>
        </div>
      </section>

      <section className="px-16 pt-[60px] max-w-[1240px] mx-auto rounded-[80px] border border-gray-200">
        <div className="flex flex-col items-center justify-center max-w-2xl mx-auto text-center">
          <h1 className="text-b-primary-900 font-semibold text-[56px] leading-none">
            Get started with Betascore
          </h1>
          <p className="text-lg text-b-outline mb-6">
            Lorem ipsum dolor sit amet consectetur. Ac morbi egestas diam sed ac
            suspendisse vel.
          </p>
          <button className="text-base py-4 text-white bg-black rounded-full px-4 mt-5 mb-10">
            Request early access
          </button>
        </div>
        <div className="">
          <Image src="/images/dashboard.png" alt="" width={1170} height={200} />
        </div>
      </section>
      <Footer />
    </main>
  );
}
