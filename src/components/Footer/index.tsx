import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
export default function Footer() {
  return (
    <footer
      className="mt-10 mx-auto max-w-[1170px]"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="px-4 py-12">
        {/* xl:gap-[140px] */}
        <div className="flex flex-wrap justify-between xl:flex-nowrap">
          <div className="mb-10">
            <Link href="/">
              <Image
                src="/images/ndewo_by_betascore.png"
                alt="beta-score logo"
                className="h-[40px] w-[140px]"
                width={140}
                height={40}
              />
            </Link>
          </div>
          {/* flex flex-wrap xl:flex-nowrap gap-16 xl:whitespace-nowrap*/}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-4 gap-y-8 xl:gap-16 xl:flex max-w-[1117px] xl:whitespace-nowrap">
            <div className="md:mt-0 flex-1">
              <h3 className=" text-black xl:font-semibold">
                Products
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                <li>
                  <Link
                    href="/individual"
                    className=" text-b-black-grey hover:text-gray-500"
                  >
                    Individual
                  </Link>
                </li>
                <li>
                  <Link
                    href="/business"
                    className=" text-b-black-grey hover:text-gray-500"
                  >
                    Business
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <h3 className=" text-black xl:font-semibold">
                Company
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                <li>
                  <Link
                    href="/about"
                    className=" text-b-black-grey  hover:text-gray-500"
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    target="_blank"
                    href="https://medium.com/@info_86420"
                    className=" text-b-black-grey  hover:text-gray-500"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className=" text-b-black-grey  hover:text-gray-500"
                  >
                    F.A.Qs
                  </Link>
                </li>
              </ul>
            </div>

            <div className="md:mt-0 flex-1">
              <h3 className=" text-black xl:font-semibold">
                Contact us
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                <li>
                  <Link
                    href="/privacy-policy"
                    className=" text-b-black-grey  hover:text-gray-500"
                  >
                    +2348095763213
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-conditions"
                    className=" text-b-black-grey  hover:text-gray-500 break-words"
                  >
                    product@betascore.io
                  </Link>
                </li>
              </ul>
            </div>
            <div className="md:mt-0 flex-1">
              <h3 className=" text-black xl:font-semibold ">
                Legal
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                <li>
                  <Link
                    href="/privacy-policy"
                    className=" text-b-black-grey  hover:text-gray-500"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-conditions"
                    className=" text-b-black-grey  hover:text-gray-500"
                  >
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
            <div className="md:mt-0 flex-1">
              <h3 className=" text-black xl:font-semibold">
                Social media
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                <li>
                  <a
                    target="_blank"
                    href="https://twitter.com/getbetascore?s=21&t=UZn3090cyfwEqjLjR4CDIQ"
                    className=" text-b-black-grey  hover:text-gray-500"
                  >
                    Twitter
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://instagram.com/getbetascore?igshid=OGQ5ZDc2ODk2ZA=="
                    className=" text-b-black-grey  hover:text-gray-500"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.linkedin.com/company/betascore/"
                    className=" text-b-black-grey  hover:text-gray-500"
                  >
                    LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    target="_blank"
                    href="https://www.facebook.com/share/Q2YPT3RNeNkubgyv/?mibextid=LQQJ4d"
                    className=" text-b-black-grey  hover:text-gray-500"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[1px] w-full bg-b-black-grey hidden xl:block" />
      <div className="flex flex-col lg:flex-row justify-between items-center py-8 px-4">
        <p className="text-b-black-grey mb-6 text-sm xl:text-base">
          2024 Betascore. All rights reserved
        </p>
        <p className="text-b-black-grey max-w-[621px] text-center lg:text-right lg:text-sm xl:text-base hidden lg:block">
          Ndewo is a product of Betascore Finance. A company registered in the
          United Kingdom <br /> Registration no. 14536091 addressed at
          Piccadilly Business Centre Unit C Aldow <br /> Enterprise Park
          Blackett Street Manchester M12 6AE <br /> Betascore Finance is
          regulated by FCA. Registration is under processing.
        </p>
        <p className="text-b-black-grey text-center text-sm lg:hidden">
          Ndewo is a product of Betascore Finance. A company registered in the
          United Kingdom Registration no. 14536091 addressed at Piccadilly
          Business Centre Unit C Aldow Enterprise Park Blackett Street
          Manchester M12 6AE Betascore Finance is regulated by FCA. Registration
          is under processing.
        </p>
      </div>
    </footer>
  );
}
