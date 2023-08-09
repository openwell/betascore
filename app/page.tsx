import Image from 'next/image';

export default function Home() {
  return (
    <main>
      <header>
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Company Logo</span>
              <Image
                className="h-8 w-auto"
                src="/svgs/beta-score-colored-logo.svg"
                alt=""
                width={32}
                height={32}
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              id="menuOpenBtn"
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            <a href="#" className="text-sm leading-6 text-gray-900">
              Products
            </a>
            <a href="#" className="text-sm leading-6 text-gray-900">
              Use cases
            </a>
            <a href="#" className="text-sm leading-6 text-gray-900">
              Developers
            </a>
            <a href="#" className="text-sm leading-6 text-gray-900">
              Company
            </a>
          </div>
          <div className="hidden lg:flex lg:items-center lg:flex-1 lg:justify-end">
            <a href="#" className="text-sm leading-6 text-gray-900 mr-2">
              Log in{' '}
            </a>
            <button className="text-sm p-2 px-4 bg-black text-white rounded-full">
              Create a business account
            </button>
          </div>
        </nav>
        {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
        <div id="mobileMenu" className="hidden" role="dialog" aria-modal="true">
          {/* <!-- Background backdrop, show/hide based on slide-over state. --> */}
          <div className="fixed inset-0 z-10"></div>
          <div className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <Image
                  className="h-8 w-auto"
                  src="/svgs/beta-score-colored-logo.svg"
                  alt=""
                  width={32}
                  height={32}
                />
              </a>
              <button
                id="menuCloseBtn"
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Close menu</span>
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Products
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Use cases
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Developers
                  </a>
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Company
                  </a>
                </div>
                <div className="py-6">
                  <a
                    href="#"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Log in
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Main --> */}
        <div className="text-center max-w-[1040px] mx-auto my-36">
          <h1 className="text-[96px] leading-none font-bold font-clashDisplay">
            <span className="text-[#0031B1]">Cross-Border </span> Credit
            Transfer
          </h1>
          <p className="text-[#090B10] text-xl">
            You can now travel and move across borders with 1 less thing to
            worry about. Wherever you go, your credit score goes with you and
            countless credit opportunities await you.
          </p>
          <div className="flex justify-center my-10">
            <Image
              src="/images/apple-store.png"
              alt=""
              className="w-[180px] h-[56px] mr-4"
              width={32}
              height={32}
            />
            <Image
              src="/images/playstore.png"
              alt=""
              className="w-[180px] h-[56px]"
              width={32}
              height={32}
            />
          </div>
          <div>
            <Image
              src="/images/map-of-the-world.png"
              alt=""
              width={32}
              height={32}
            />
          </div>
        </div>
      </header>
      <section className="grid grid-cols-2 m-[100px] max-w-[1240px] mx-auto">
        <div className="w-[712px]">
          <h1 className="text-[96px] leading-none font-semibold font-clashDisplay">
            You are only as trustworthy as your
            <span className="text-[#0031B1]">Betascore</span>
          </h1>
          <p className="mt-8 text-lg text-[#454745]">
            This is why thousand’s of businesses are using Beta Score to carry
            out credit checks and are able to determine the credit-worthiness
            with a 99.9% accuracy.
          </p>
        </div>
      </section>
      <section className="bg-black px-16 pt-[60px] max-w-[1240px] mx-auto">
        <h1 className="text-white text-[72px]">Built on Trust</h1>
        <p className="text-lg text-[#868685] mb-6">
          Businesses use Betascore to verify customers’ credit worthiness 
        </p>
        <div className="h-[30px] flex gap-6">
          <Image src="/svgs/okra-logo.svg" alt="" width={32} height={32} />
          <Image
            src="/svgs/Barclays-logo.svg"
            alt=""
            className="py-[6px]"
            width={32}
            height={32}
          />
          <Image
            src="/svgs/Equifax-logo.svg"
            alt=""
            className="py-[6px]"
            width={32}
            height={32}
          />
          <Image
            src="/svgs/FirstCentral Credit Bureau-logo.svg"
            alt=""
            className="py-[6px]"
            width={32}
            height={32}
          />
        </div>
        <div className="w-full">
          <Image
            src="/images/dashboard-screen.png"
            alt=""
            width={32}
            height={32}
          />
        </div>
      </section>
      <section className="grid grid-cols-2 m-[100px] max-w-[1240px] mx-auto gap-3">
        <div className="bg-[#0031B1] rounded-[80px] px-10 pt-6 pb-24 text-white">
          <div className="flex justify-center">
            <Image
              src="/images/bulb-schetch.png"
              alt=""
              className="h-[403px]"
              width={32}
              height={32}
            />
          </div>
          <h3 className="text-[56px] leading-none">Unique Customer Insight</h3>
          <p className="text-lg text-[#D1D1D1]">
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
              width={32}
              height={32}
            />
          </div>
          <h3 className="text-[56px] leading-none">
            Unlock an untapped credit market
          </h3>
          <p className="text-lg text-[#454745]">
            Our proprietary technology and solution transfers and integrates
            credit scores for many underserved communities and significantly
            increases the size of the market for your business to explore.
          </p>
        </div>
      </section>
      <section className="rounded-[80px] grid grid-cols-2 max-w-[1240px] mx-auto bg-white px-10 py-28">
        <div>
          <div className="bg-black w-[50px] h-[50px] rounded-full mb-4 flex justify-center items-center">
            <Image src="/svgs/lamp-on.svg" alt="" width={32} height={32} />
          </div>
          <h3 className="text-[56px] leading-none mb-2">
            Not Just Transactional Data but Behavioural Insights
          </h3>
          <p className="text-[#868685] text-lg">
            Unlock the power of your transaction data and gain valuable insights
            into your business with our platform. We'll help you make
            data-driven decisions for sustainable growth.
          </p>
          <div className="flex mt-10 gap-6">
            <button className="text-base py-4 text-white bg-black rounded-full px-2">
              See our documentation
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
            className="w-[448px]"
            width={32}
            height={32}
          />
        </div>
      </section>
      <section className="max-w-[1240px] mx-auto mt-60">
        <h3 className="text-8xl mb-20">
          <span className="text-[#6E59EA]">One platform,</span> <br />
          <span>endless opportunities</span>
        </h3>
        <div className="rounded-[80px] grid grid-cols-2 bg-white px-20 py-20">
          <div>
            <div className="bg-black w-[50px] h-[50px] rounded-full mb-4">
              <Image
                src="/svgs/earth-with-plane.svg"
                alt=""
                width={32}
                height={32}
              />
            </div>
            <h3 className="text-[56px] leading-none">
              Cross-Border <br />
              Credit Opportunities
            </h3>
            <p className="text-[#868685] text-lg">
              You can now travel and move across borders with 1 less thing to
              worry about. Wherever you go, your credit score goes with you and
              countless credit opportunities await you.
            </p>
            <div className="flex mt-10 gap-6">
              <Image
                src="/images/apple-store.png"
                alt=""
                className="w-[180px] h-[56px] mr-4"
                width={32}
                height={32}
              />
              <Image
                src="/images/playstore.png"
                alt=""
                className="w-[180px] h-[56px]"
                width={32}
                height={32}
              />
            </div>
          </div>
          <div className="flex justify-end">
            <Image
              src="/images/deviceframes.png"
              alt=""
              className="w-[448px]"
              width={32}
              height={32}
            />
          </div>
        </div>
      </section>
      <section className="grid grid-cols-2 m-[100px] max-w-[1240px] mx-auto gap-3">
        <div className="bg-[#6E59EA] rounded-[80px] px-10 pt-20 pb-6 text-white">
          <h3 className="text-[56px] leading-none mb-2">
            Credit and Financial Access anywhere you go
          </h3>
          <p className="text-lg mb-4 text-[#D1D1D1]">
            For the first time in history, your credit history and scores are
            now transferable across borders, thereby allowing you to enjoy the
            support and lifestyle you always had even when you migrate.
          </p>
          <div className="flex justify-center">
            <Image
              src="/images/earth-with-cities.png"
              alt=""
              className="h-[403px]"
              width={32}
              height={32}
            />
          </div>
        </div>
        <div className="bg-black text-white rounded-[80px] px-10 pt-20">
          <h3 className="text-[56px] leading-none">
            Enjoy the same lifestyle at home and abroad
          </h3>
          <p className="text-lg mb-4 text-[#D1D1D1]">
            Irrespective of your needs- a house, car or to obtain a credit card,
            BetaScore makes a difference. Take control of your financial future
            today and supercharge your credit opportunities.
          </p>
          <div className="flex justify-center">
            <Image
              src="/images/home-bags.png"
              alt=""
              className="h-[403px]"
              width={32}
              height={32}
            />
          </div>
        </div>
      </section>
      <section className="max-w-[1240px] mx-auto">
        <h6 className="text-[#415377] text-base">FREQUENTLY ASKED QUESTIONS</h6>
        <h3 className="text-8xl mb-16">
          You asked, <br />
          We <span className="text-[#E48900]">answered </span>
        </h3>
        {/* <!-- faq --> */}
        <div className="bg-white rounded-[80px] mb-24">
          <div className="px-6 py-12">
            <div className="mx-auto max-w-6xl divide-y divide-gray-900/10">
              <dl className="space-y-6 divide-y divide-gray-900/10">
                <div className="pt-6">
                  <dt>
                    {/* <!-- Expand/collapse question button --> */}
                    <button
                      type="button"
                      className="flex w-full items-start justify-between text-left text-gray-900"
                      aria-controls="faq-0"
                      aria-expanded="false"
                    >
                      <span className="text-base font-semibold leading-7">
                        What is Betascore
                      </span>
                      <span className="ml-6 flex h-7 items-center">
                        {/* <!--
                          Icon when question is collapsed.
        
                          Item expanded: "hidden", Item collapsed: ""
                        --> */}
                        <svg
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6v12m6-6H6"
                          />
                        </svg>
                        {/* <!--
                          Icon when question is expanded.
                          Item expanded: "", Item collapsed: "hidden"
                        --> */}
                        <svg
                          className="hidden h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M18 12H6"
                          />
                        </svg>
                      </span>
                    </button>
                  </dt>
                  <dd className="mt-2 pr-12" id="faq-0">
                    <p className="text-base leading-7 text-gray-600">
                      What is Betascore What is Betascore What is Betascore What
                      is Betascore What is Betascore What is Betascore What is
                      Betascore What is Betascore What is Betascore What is
                      Betascore What is Betascore What is Betascore What is
                      Betascore What is Betascore vvjjahsiahs What is Betascore
                      What is Betascore What is Betascore hdgjhk What is
                      Betascorehjhjsknkkanakwhjdbfjh What is Betascore
                    </p>
                  </dd>
                </div>
                {/* <!-- More questions... --> */}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-black mt-10" aria-labelledby="footer-heading">
        <h2 id="footer-heading" className="sr-only">
          Footer
        </h2>
        <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
          <div className="xl:grid xl:grid-cols-3 xl:gap-8">
            <div className="space-y-8">
              <Image
                className="h-7"
                src="/svgs/beta-score-white-logo.svg"
                alt="Company name"
                width={32}
                height={32}
              />
              <p className="text-sm leading-6 text-white">
                2023 Betascore. All rights reserved
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Facebook</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Instagram</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
                <a href="#" className="text-gray-400 hover:text-gray-500">
                  <span className="sr-only">Twitter</span>
                  <svg
                    className="h-6 w-6"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
              </div>
            </div>
            <div className="mt-16 grid grid-cols-5 gap-8 xl:col-span-2 xl:mt-0">
              <div>
                <h3 className="text-sm leading-6 text-white">COMPANY</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a
                      href="#"
                      className="text-sm leading-6 text-[#CAD2E2] hover:text-gray-900"
                    >
                      About us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm leading-6 text-[#CAD2E2] hover:text-gray-900"
                    >
                      Contact us
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm leading-6 text-[#CAD2E2] hover:text-gray-900"
                    >
                      Careers
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm leading-6 text-[#CAD2E2] hover:text-gray-900"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm leading-6 text-[#CAD2E2] hover:text-gray-900"
                    >
                      FAQs
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm leading-6 text-[#CAD2E2] hover:text-gray-900"
                    >
                      Press Kit
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm leading-6 text-white">PRODUCT</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a
                      href="#"
                      className="text-sm leading-6 text-[#CAD2E2] hover:text-gray-900"
                    >
                      Beta Score
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm leading-6 text-[#CAD2E2] hover:text-gray-900"
                    >
                      Beta Credit
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm leading-6 text-[#CAD2E2] hover:text-gray-900"
                    >
                      Beta Track
                    </a>
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="text-sm leading-6 text-white">USE CASES</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a
                      href="#"
                      className="text-sm leading-6 text-[#CAD2E2] hover:text-gray-900"
                    >
                      Individual
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm leading-6 text-[#CAD2E2] hover:text-gray-900"
                    >
                      Business
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm leading-6 text-white">DEVELOPERS</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a
                      href="#"
                      className="text-sm leading-6 text-[#CAD2E2] hover:text-gray-900"
                    >
                      Documentations
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm leading-6 text-[#CAD2E2] hover:text-gray-900"
                    >
                      System Status
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm leading-6 text-[#CAD2E2] hover:text-gray-900"
                    >
                      Our Community
                    </a>
                  </li>
                </ul>
              </div>

              <div className="mt-10 md:mt-0">
                <h3 className="text-sm leading-6 text-white">LEGAL</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li>
                    <a
                      href="#"
                      className="text-sm leading-6 text-[#CAD2E2] hover:text-gray-900"
                    >
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm leading-6 text-[#CAD2E2] hover:text-gray-900"
                    >
                      Terms & Conditions
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-sm leading-6 text-[#CAD2E2] hover:text-gray-900"
                    >
                      Compliance
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
