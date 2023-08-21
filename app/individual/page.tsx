import Image from 'next/image';
import Footer from '@/src/components/Footer';
import NavBar from '@/src/components/NavBar';

export default function Individual() {
  return (
    <main className="">
      <header>
        <NavBar />
        {/* <!-- Main --> */}
        <main className="text-center max-w-[1170px] mx-auto my-10 lg:my-36 px-5 lg:px-0">
          <div className="max-w-[1040px] mx-auto">
            <h1 className="text-[40px] lg:text-[96px] leading-none font-bold font-clashDisplay text-b-primary-900">
              <span className="text-b-primary-600">All-in-one </span> <br /> app
              that fosters financial inclusion
            </h1>
            <button className="text-base py-4 text-white bg-black rounded-full px-4 my-10">
              Request early access
            </button>
          </div>

          <div className="flex justify-between flex-wrap lg:flex-nowrap items-center">
            <Image
              src="/svgs/individual-hero-1.svg"
              alt=""
              width={356}
              height={472}
            />
            <Image
              src="/svgs/individual-hero-2.svg"
              alt=""
              width={356}
              height={472}
            />
            <Image
              src="/svgs/individual-hero-3.svg"
              alt=""
              width={356}
              height={472}
            />
          </div>
        </main>
      </header>
      <div className="px-5 lg:px-0">
        <section className="bg-b-primary-700 px-4 lg:px-16 pt-10 lg:pt-[60px] max-w-[1240px] mx-auto rounded-[40px] lg:rounded-[80px] ">
          <div className="flex flex-col items-center justify-center max-w-2xl mx-auto text-center">
            <h1 className="text-white font-semibold text-[32px] lg:text-[56px]">
              Merge credit report from more than one country
            </h1>
            <p className="text-sm lg:text-lg text-b-outline py-4 lg:py-6">
              Our credit report system will calculate your creditworthiness even
              if you have lived in a different country and pre-qualify you for
              opportunities in a new country based on your history and
              worthiness.
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

        <section className="grid grid-cols-1 lg:grid-cols-2 my-10 lg:my-[100px] max-w-[1240px] mx-auto gap-10 lg:gap-3 text-white text-center lg:text-left">
          <div className="bg-[#6E59EA] rounded-[40px] lg:rounded-[80px] px-4 pt-10 pb-5 lg:px-10 lg:pt-20 lg:pb-6">
            <h3 className="text-[32px] lg:text-[56px] leading-none mb-2 font-semibold">
              View your credit report
            </h3>
            <p className="text-sm lg:text-lg mb-4 text-b-outline font-light py-[30px]">
              Credit should be about personal integrity and trustworthiness, not
              where you have lived.
            </p>
            <div className="flex justify-center">
              <Image
                src="/svgs/illustration-1.svg"
                alt=""
                className="h-[230px] lg:h-[404px]"
                width={358}
                height={382}
              />
            </div>
          </div>
          <div className="bg-black text-white rounded-[40px] lg:rounded-[80px] px-4 pt-10 pb-5 lg:px-10 lg:pt-20">
            <h3 className="text-[32px] lg:text-[56px] leading-none font-semibold">
              Your financial wellness
            </h3>
            <p className="text-sm lg:text-lg mb-4 text-b-outline font-light py-[30px]">
              Transform your situation with one solution that takes you from 0
              to 1,000 in 5 minutes.
            </p>
            <div className="flex justify-center">
              <Image
                src="/svgs/illustration-2.svg"
                alt=""
                className="h-[254px] lg:h-[403px]"
                width={603}
                height={400}
              />
            </div>
          </div>
        </section>

        <section className="max-w-[1240px] mx-auto mt-20 lg:mt-60">
          <h3 className="text-[40px] lg:text-8xl mb-5 lg:mb-20 font-semibold text-b-primary-900 leading-10 lg:leading-none lg:font-clashDisplay">
            Access to credit and financial services
          </h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-3">
            <div className="rounded-3xl border border-grey-200 p-4 lg:p-10 max-w-[576px] mb-5 flex flex-col items-center lg:items-start">
              <Image
                src="/svgs/graduation-cap.svg"
                alt=""
                className="h-[68px] w-[68px] lg:w-[100px] lg:h-[100px]"
                width={100}
                height={100}
              />
              <h4 className="font-semibold text-b-primary-900 text-[32px] lg:text-[56px]">
                Student loan
              </h4>
              <p className="py-5 lg:py-[30px]">
                Empowering your education journey. Achieve your dreams without
                financial worry. Invest in your future today.
              </p>
            </div>
            <div className="rounded-3xl border border-grey-200 p-4 lg:p-10 max-w-[576px] mb-5 flex flex-col items-center lg:items-start">
              <Image
                src="/svgs/house-percent.svg"
                alt=""
                className="h-[68px] w-[68px] lg:w-[100px] lg:h-[100px]"
                width={100}
                height={100}
              />
              <h4 className="font-semibold text-b-primary-900 text-[32px] lg:text-[56px]">
                Mortgage
              </h4>
              <p className="py-5 lg:py-[30px]">
                We give you mortgage opportunities while you choose what works
                for you. Start your homeownership journey now.
              </p>
            </div>
            <div className="rounded-3xl border border-grey-200 p-4 lg:p-10 max-w-[576px] mb-5 flex flex-col items-center lg:items-start">
              <Image
                src="/svgs/bag-money.svg"
                alt=""
                className="h-[68px] w-[68px] lg:w-[100px] lg:h-[100px]"
                width={100}
                height={100}
              />
              <h4 className="font-semibold text-b-primary-900 text-[32px] lg:text-[56px]">
                Loans
              </h4>
              <p className="py-5 lg:py-[30px]">
                Our platform facilitates the loans you need to enable the
                lifestyle that you deserve. Get funds quickly and conveniently
                with our multiple loan options and opportunities through
                BetaScore.
              </p>
            </div>
            <div className="rounded-3xl border border-grey-200 p-4 lg:p-10 max-w-[576px] mb-5 flex flex-col items-center lg:items-start">
              <Image
                src="/svgs/house.svg"
                alt=""
                width={100}
                height={100}
                className="h-[68px] w-[68px] lg:w-[100px] lg:h-[100px]"
              />
              <h4 className="font-semibold text-b-primary-900 text-[32px] lg:text-[56px]">
                Beta rent
              </h4>
              <p className="py-5 lg:py-[30px]">
                Our rent guarantee is the solution you have been waiting for.
                BetaScore provides the guarantees you need, and we transfer this
                guarantee to your landlord via our partners.
              </p>
            </div>
          </div>
        </section>
        <section className="max-w-[1240px] mx-auto mt-20 rounded-[40px] lg:rounded-[80px] border border-grey-200 text-center lg:text-left">
          <div className="rounded-[40px] lg:rounded-[80px] grid grid-cols-1 lg:grid-cols-2 bg-white p-4 lg:p-20">
            <div className="self-center">
              <h3 className="text-[32px] lg:text-[56px] leading-none font-semibold text-b-primary-900">
                Get started with Betascore
              </h3>
              <p className="text-b-grey-200 text-sm sm:text-lg py-4">
                BetaScore is powering financial inclusion and credit
                opportunities of the future, today!
              </p>
              <div className="flex mt-10 lg:gap-6">
                <Image
                  src="/svgs/apple-store.svg"
                  alt=""
                  className="lg:w-[180px] lg:h-[56px] lg:mr-4"
                  width={146}
                  height={56}
                />
                <Image
                  src="/svgs/play-store.svg"
                  alt=""
                  className="lg:w-[180px] lg:h-[56px]"
                  width={146}
                  height={56}
                />
              </div>
            </div>
            <div className="flex justify-center pt-14 lg:p-0">
              <Image
                src="/images/iPhone12Mockup.png"
                alt=""
                className="w-[116px] lg:w-[186px] h-[320px] lg:h-[512px]"
                width={186}
                height={512}
              />
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </main>
  );
}
