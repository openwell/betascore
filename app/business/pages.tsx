import Image from 'next/image';
import Footer from '@/src/components/Footer';
import NavBar from '@/src/components/NavBar';
import Faq from '@/src/components/Faq';

export default function Business() {
  return (
    <main className="bg-b-salty-ice">
      <header>
        <NavBar />
        {/* <!-- Main --> */}
        <main className="text-center max-w-[1040px] mx-auto my-36">
          <h1 className="text-[96px] leading-none font-bold font-clashDisplay">
            <span className="text-b-primary-700">Cross-Border </span> Credit
            Transfer
          </h1>
          <p className="text-b-dark-800 text-xl">
            You can now travel and move across borders with 1 less thing to
            worry about. Wherever you go, your credit score goes with you and
            countless credit opportunities await you.
          </p>
          <div className="flex justify-center my-10">
            <Image
              src="/images/apple-store.png"
              alt=""
              className="w-[180px] h-[56px] mr-4"
              width={165}
              height={56}
            />
            <Image
              src="/images/playstore.png"
              alt=""
              className="w-[180px] h-[56px]"
              width={165}
              height={56}
            />
          </div>
          <div>
            <Image
              src="/images/map-of-the-world.png"
              alt=""
              width={1261}
              height={410}
            />
          </div>
        </main>
      </header>
      <section className="my-[100px] max-w-[1240px] mx-auto">
        <div className="max-w-[930px] w-full">
          <h1 className="text-[96px] leading-none font-semibold font-clashDisplay">
            You are only as trustworthy as your
            <span className="text-b-primary-700"> Betascore</span>
          </h1>
          <div className="max-w-[683px]">
            <p className="mt-8 text-lg text-b-grey-200">
              This is why thousand’s of businesses are using Beta Score to carry
              out credit checks and are able to determine the credit-worthiness
              with a 99.9% accuracy.
            </p>
          </div>
        </div>
      </section>
      <section className="bg-black px-16 pt-[60px] max-w-[1240px] mx-auto rounded-[80px]">
        <h1 className="text-white font-semibold text-[72px]">Built on Trust</h1>
        <p className="text-lg text-b-tertiary mb-6">
          Businesses use Betascore to verify customers’ credit worthiness 
        </p>
        <div className="h-[30px] flex gap-6">
          <Image src="/svgs/okra-logo.svg" alt="" width={84} height={30} />
          <Image
            src="/svgs/Barclays-logo.svg"
            alt=""
            className="py-[6px]"
            width={106}
            height={18}
          />
          <Image
            src="/svgs/Equifax-logo.svg"
            alt=""
            className="py-[6px]"
            width={112}
            height={20}
          />
          <Image
            src="/svgs/FirstCentral Credit Bureau-logo.svg"
            alt=""
            className="py-[6px]"
            width={110}
            height={20}
          />
        </div>
        <div className="w-full">
          <Image
            src="/images/dashboard-screen.png"
            alt=""
            width={1135}
            height={200}
          />
        </div>
      </section>
      <section className="grid grid-cols-2 m-[100px] max-w-[1240px] mx-auto gap-3">
        <div className="bg-b-primary-700 rounded-[80px] px-10 pt-6 pb-24 text-white">
          <div className="flex justify-center">
            <Image
              src="/images/bulb-schetch.png"
              alt=""
              className="h-[403px]"
              width={348}
              height={406}
            />
          </div>
          <h3 className="text-[56px] leading-none font-semibold">
            Unique Customer Insight
          </h3>
          <p className="text-lg text-b-outline font-light">
            Understanding your customers is not only critical to customer
            acquisition, but retention and advocacy. With BetaScore you will
            gain deep and distinctive insight into your customers’ needs,
            preferences and motivations.
          </p>
        </div>
        <div className="rounded-[80px] px-10 pt-6 pb-24 bg-[#DFE7E8]">
          <div className="flex justify-center">
            <Image
              src="/images/city-street.png"
              alt=""
              className="h-[403px]"
              width={442}
              height={416}
            />
          </div>
          <h3 className="text-[56px] leading-none font-semibold">
            Unlock an untapped credit market
          </h3>
          <p className="text-lg text-b-grey-200 font-light">
            Our proprietary technology and solution transfers and integrates
            credit scores for many underserved communities and significantly
            increases the size of the market for your business to explore.
          </p>
        </div>
      </section>
      <section className="rounded-[80px] grid grid-cols-2 max-w-[1240px] h-[778px] mx-auto bg-white px-10 py-28">
        <div className="self-end">
          <div className="bg-black w-[50px] h-[50px] rounded-full mb-4 flex justify-center items-center">
            <Image src="/svgs/lamp-on.svg" alt="" width={32} height={32} />
          </div>
          <h3 className="text-[56px] leading-none mb-2 font-semibold">
            Not Just Transactional Data but Behavioural Insights
          </h3>
          <p className="text-b-tertiary text-lg">
            Unlock the power of your transaction data and gain valuable insights
            into your business with our platform. We'll help you make
            data-driven decisions for sustainable growth.
          </p>
          <div className="flex mt-10 gap-6">
            <button className="text-base py-4 text-white bg-black rounded-full px-2">
              Request early access
            </button>
            <button className="text-base py-4 border border-black rounded-full px-2">
              View demo
            </button>
          </div>
        </div>
        <div className="flex justify-end">
          <Image
            src="/images/illustration-one.png"
            alt=""
            className="w-[448px] self-end"
            width={448}
            height={462}
          />
        </div>
      </section>
      <section className="max-w-[1240px] mx-auto mt-60">
        <h3 className="text-8xl mb-20 font-semibold font-clashDisplay">
          <span className="text-b-purple ">One platform,</span> <br />
          <span>endless opportunities</span>
        </h3>
        <div className="rounded-[80px] grid grid-cols-2 bg-white px-20 py-20">
          <div>
            <div className="mb-4">
              <Image
                src="/svgs/earth-with-plane.svg"
                alt=""
                width={50}
                height={50}
              />
            </div>
            <h3 className="text-[56px] leading-none font-semibold">
              Cross-Border <br />
              Credit Opportunities
            </h3>
            <p className="text-b-tertiary text-lg py-4">
              You can now travel and move across borders with 1 less thing to
              worry about. Wherever you go, your credit score goes with you and
              countless credit opportunities await you.
            </p>
            <div className="flex mt-10 gap-6">
              <Image
                src="/images/apple-store.png"
                alt=""
                className="w-[180px] h-[56px] mr-4"
                width={166}
                height={56}
              />
              <Image
                src="/images/playstore.png"
                alt=""
                className="w-[180px] h-[56px]"
                width={166}
                height={56}
              />
            </div>
          </div>
          <div className="flex justify-end">
            <Image
              src="/images/deviceframes.png"
              alt=""
              className="w-[448px]"
              width={448}
              height={500}
            />
          </div>
        </div>
      </section>
      <section className="grid grid-cols-2 m-[100px] max-w-[1240px] mx-auto gap-3">
        <div className="bg-[#6E59EA] rounded-[80px] px-10 pt-20 pb-6 text-white">
          <h3 className="text-[56px] leading-none mb-2 font-semibold">
            Credit and Financial Access anywhere you go
          </h3>
          <p className="text-lg mb-4 text-b-outline font-light">
            For the first time in history, your credit history and scores are
            now transferable across borders, thereby allowing you to enjoy the
            support and lifestyle you always had even when you migrate.
          </p>
          <div className="flex justify-center">
            <Image
              src="/images/earth-with-cities.png"
              alt=""
              className="h-[403px]"
              width={358}
              height={382}
            />
          </div>
        </div>
        <div className="bg-black text-white rounded-[80px] px-10 pt-20">
          <h3 className="text-[56px] leading-none font-semibold">
            Enjoy the same lifestyle at home and abroad
          </h3>
          <p className="text-lg mb-4 text-b-outline font-light">
            Irrespective of your needs- a house, car or to obtain a credit card,
            BetaScore makes a difference. Take control of your financial future
            today and supercharge your credit opportunities.
          </p>
          <div className="flex justify-center">
            <Image
              src="/images/home-bags.png"
              alt=""
              className="h-[403px]"
              width={603}
              height={400}
            />
          </div>
        </div>
      </section>

      <Faq />

      <Footer />
    </main>
  );
}
