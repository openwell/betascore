import Image from 'next/image';
import Footer from '@/src/components/Footer';
import NavBar from '@/src/components/NavBar';
import Faq from '@/src/components/Faq';

export default function Home() {
  return (
    <main className="bg-b-salty-ice">
      <header>
        <NavBar />
        {/* <!-- Main --> */}
        <main className="text-center max-w-[1040px] mx-auto my-20 lg:my-36">
          <div className="p-5 lg:p-0">
            <h1 className="text-[40px] lg:text-[96px] leading-none font-bold font-clashDisplay">
              <span className="text-b-primary-700">Cross-Border </span> Credit
              Transfer
            </h1>
            <p className="text-b-dark-800 text-sm lg:text-xl pt-4">
              You can now travel and move across borders with 1 less thing to
              worry about. Wherever you go, your credit score goes with you and
              countless credit opportunities await you.
            </p>
          </div>
          <div className="flex justify-center my-10">
            <Image
              src="/svgs/apple-store.svg"
              alt=""
              className="lg:w-[180px] h-[56px] mr-4"
              width={165}
              height={56}
            />
            <Image
              src="/svgs/play-store.svg"
              alt=""
              className="lg:w-[180px] h-[56px]"
              width={165}
              height={56}
            />
          </div>
          <div>
            <Image src="/svgs/map-large.svg" alt="" width={1261} height={410} />
          </div>
        </main>
      </header>
      <div className="px-5 lg:p-0">
        {/* section 1 */}
        <section className="my-8 lg:my-[100px] max-w-[1240px] mx-auto">
          <div className="max-w-[930px] w-full">
            <div className="max-w-[280px] lg:max-w-[920px]">
              <h1 className="text-[40px] lg:text-[96px] leading-none font-semibold lg:font-clashDisplay">
                You are only as trustworthy as your
                <span className="text-b-primary-700"> Betascore</span>
              </h1>
            </div>
            <div className="max-w-[683px]">
              <p className="mt-8 text-sm lg:text-lg text-b-grey-200">
                This is why thousand’s of businesses are using Beta Score to
                carry out credit checks and are able to determine the
                credit-worthiness with a 99.9% accuracy.
              </p>
            </div>
          </div>
        </section>
        {/* section 2 */}
        <section className="bg-black px-5 pt-5 lg:px-16 lg:pt-[60px] max-w-[1240px] mx-auto rounded-[40px] lg:rounded-[80px]">
          <h1 className="text-white font-semibold text-[32px] lg:text-[72px]">
            Built on Trust
          </h1>
          <p className="text-sm lg:text-lg text-b-tertiary mb-6">
            Businesses use Betascore to verify customers’ credit worthiness 
          </p>
          <div className="lg:h-[30px] flex gap-6 flex-wrap">
            <Image
              src="/svgs/okra-logo.svg"
              alt=""
              width={84}
              height={30}
              className="w-[56px] h-[20px] lg:w-[84px] lg:h-[30px]"
            />
            <Image
              src="/svgs/Barclays-logo.svg"
              alt=""
              className="w-[88px] h-[16px] lg:w-[106px] lg:h-[18px]"
              width={106}
              height={18}
            />
            <Image
              src="/svgs/Equifax-logo.svg"
              alt=""
              width={112}
              height={20}
              className="w-[84px] h-[16px] lg:w-[112px] lg:h-[20px]"
            />
            <Image
              src="/svgs/FirstCentral Credit Bureau-logo.svg"
              alt=""
              width={110}
              height={20}
              className="w-[82px] h-[16px] lg:w-[110px] lg:h-[20px]"
            />
          </div>
          <div className="w-full pt-9">
            <Image
              src="/images/dashboard-screen.png"
              alt=""
              // className='h-[250px] w-full'
              width={1135}
              height={200}
            />
          </div>
        </section>
        {/* section 3*/}
        <section className="grid grid-cols-1 lg:grid-cols-2 my-8 lg:my-[100px] max-w-[1240px] mx-auto gap-10 lg:gap-3">
          <div className="bg-b-primary-700 rounded-[40px] lg:rounded-[80px] px-4 lg:px-10 pt-6 pb-24 text-white">
            <div className="flex justify-center">
              <Image
                src="/svgs/illustration-9.svg"
                alt=""
                className="h-[194px] lg:h-[403px]"
                width={348}
                height={406}
              />
            </div>
            <h3 className="text-[32px] lg:text-[56px] leading-none font-semibold py-4">
              Unique Customer Insight
            </h3>
            <p className="text-sm lg:text-lg text-b-outline font-light">
            Understanding your customers is not only critical to customer acquisition, but retention and advocacy. With BetaScore you will gain deep and distinctive insight into your customers’ needs, preferences and motivations. 
            </p>
          </div>
          <div className="rounded-[40px] lg:rounded-[80px] p-4 lg:px-10 lg:pt-6 lg:pb-24 bg-[#DFE7E8]">
            <div className="flex justify-center">
              <Image
                src="/svgs/illustration-11.svg"
                alt=""
                className="h-[194px] lg:h-[403px]"
                width={442}
                height={416}
              />
            </div>
            <h3 className="text-[32px] lg:text-[56px] leading-none font-semibold py-4">
              Unlock an untapped credit market
            </h3>
            <p className="text-sm lg:text-lg text-b-grey-200 font-light">
            Our proprietary technology and solution transfers and integrates credit scores for many underserved communities and significantly increases the size of the market for your business to explore.
            </p>
          </div>
        </section>
        {/* section 4 */}
        <section className="rounded-[40px] lg:rounded-[80px] grid grid-cols-1 lg:grid-cols-2 max-w-[1240px] lg:h-[778px] mx-auto bg-white px-5 lg:px-10 py-4 lg:py-28">
          <div className="lg:self-end">
            <div className="bg-black w-[50px] h-[50px] rounded-full mb-4 flex justify-center items-center">
              <Image src="/svgs/lamp-on.svg" alt="" width={32} height={32} />
            </div>
            <h3 className="text-[32px] lg:text-[56px] leading-none mb-2 font-semibold">
              Not Just Transactional Data but Behavioural Insights
            </h3>
            <p className="text-b-tertiary text-sm lg:text-lg">
              Unlock the power of your transaction data and gain valuable
              insights into your business with our platform. We&apos;`ll help
              you make data-driven decisions for sustainable growth.
            </p>
            <div className="flex flex-col lg:flex-row mt-10 gap-6">
              <button className="text-base py-4 text-white bg-black rounded-full px-2 w-fit">
                Request early access
              </button>
              <button className="text-base py-4 border border-black rounded-full px-2 w-fit flex gap-1 items-center">
                <span>View demo</span>
                <Image
                  src="/svgs/video-circle.svg"
                  width={24}
                  height={24}
                  alt=""
                />
              </button>
            </div>
          </div>
          <div className="hidden lg:flex justify-end">
            <Image
              src="/svgs/illustration-7.svg"
              alt=""
              className="w-[448px] self-end"
              width={448}
              height={462}
            />
          </div>
        </section>
        {/* section 5 */}
        <section className="max-w-[1240px] mx-auto mt-28 lg:mt-60">
          <h3 className="text-[40px] leading-10 lg:leading-none lg:text-8xl mb-4 lg:mb-20 font-semibold lg:font-clashDisplay">
            <span className="text-b-purple">One platform,</span> <br />
            endless opportunities
          </h3>
          <div className="rounded-[40px] lg:rounded-[80px] flex flex-col-reverse lg:grid grid-flow-dense grid-cols-1 lg:grid-cols-2 bg-white p-4 lg:p-20">
            <div>
              <div className="mb-4 hidden lg:block">
                <Image
                  src="/svgs/earth-with-plane.svg"
                  alt=""
                  width={50}
                  height={50}
                />
              </div>
              <h3 className="text-[32px] lg:text-[56px] leading-none font-semibold">
                Cross-Border <br />
                Credit Opportunities
              </h3>
              <p className="text-b-tertiary text-sm lg:text-lg py-4">
                You can now travel and move across borders with 1 less thing to
                worry about. Wherever you go, your credit score goes with you
                and countless credit opportunities await you.
              </p>
              <div className="flex mt-10 lg:gap-6">
                <Image
                  src="/svgs/apple-store.svg"
                  alt=""
                  className="w-[144px] lg:w-[180px] h-[56px] mr-4"
                  width={166}
                  height={56}
                />
                <Image
                  src="/svgs/play-store.svg"
                  alt=""
                  className="w-[138px] lg:w-[180px] h-[56px]"
                  width={166}
                  height={56}
                />
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
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
        {/* section 6 */}
        <section className="grid grid-cols-1 lg:grid-cols-2 my-10 lg:my-[100px] max-w-[1240px] mx-auto gap-10 lg:gap-3">
          <div className="bg-[#6E59EA] rounded-[40px] lg:rounded-[80px] p-4 lg:px-10 lg:pt-20 lg:pb-6 text-white">
            <h3 className="text-[32px] lg:text-[56px] leading-none mb-2 font-semibold">
              Credit and Financial Access anywhere you go
            </h3>
            <p className="text-sm lg:text-lg mb-4 text-b-outline font-light py-4">
              For the first time in history, your credit history and scores are
              now transferable across borders, thereby allowing you to enjoy the
              support and lifestyle you always had even when you migrate.
            </p>
            <div className="flex justify-center">
              <Image
                src="/svgs/illustration-10.svg"
                alt=""
                className="h-[252px] lg:h-[403px]"
                width={358}
                height={382}
              />
            </div>
          </div>
          <div className="bg-black text-white rounded-[40px] lg:rounded-[80px] p-4 lg:px-10 lg:pt-20">
            <h3 className="text-[32px] lg:text-[56px] leading-none font-semibold">
              Enjoy the same lifestyle at home and abroad
            </h3>
            <p className="text-sm lg:text-lg mb-4 text-b-outline font-light py-4">
              Irrespective of your needs- a house, car or to obtain a credit
              card, BetaScore makes a difference. Take control of your financial
              future today and supercharge your credit opportunities.
            </p>
            <div className="flex justify-center">
              <Image
                src="/svgs/illustration-8.svg"
                alt=""
                className="h-[252px] lg:h-[403px]"
                width={603}
                height={400}
              />
            </div>
          </div>
        </section>
        {/* section 7 */}
        <Faq />
      </div>
      <Footer />
    </main>
  );
}
