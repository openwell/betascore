import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
export default function Footer() {
  return (
    <footer className="bg-black mt-10" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div>
            <Link href="/">
              <Image
                src="/svgs/white-logo.svg"
                alt="beta-score logo"
                width={112}
                height={40}
              />
            </Link>
            <p className="text-sm leading-6 text-white">
              2023 Betascore. All rights reserved
            </p>
          </div>
          <div className="mt-16 grid grid-cols-3 gap-8 xl:mt-0">
            <div>
              <h3 className="text-sm leading-6 text-white">COMPANY</h3>
              <ul role="list" className="mt-6 space-y-4">
                <li>
                  <Link
                    href="/about"
                    className="text-sm leading-6 text-b-salty-ice-200 hover:text-gray-500"
                  >
                    About us
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-sm leading-6 text-b-salty-ice-200 hover:text-gray-500"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/faq"
                    className="text-sm leading-6 text-b-salty-ice-200 hover:text-gray-500"
                  >
                    FAQs
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-10 md:mt-0">
              <h3 className="text-sm leading-6 text-white">PRODUCT</h3>
              <ul role="list" className="mt-6 space-y-4">
                <li>
                  <Link
                    href="/individual"
                    className="text-sm leading-6 text-b-salty-ice-200 hover:text-gray-500"
                  >
                    Individuals
                  </Link>
                </li>
                <li>
                  <Link
                    href="/business"
                    className="text-sm leading-6 text-b-salty-ice-200 hover:text-gray-500"
                  >
                    Businesses
                  </Link>
                </li>
              </ul>
            </div>
            <div className="mt-10 md:mt-0">
              <h3 className="text-sm leading-6 text-white">LEGAL</h3>
              <ul role="list" className="mt-6 space-y-4">
                <li>
                  <Link
                    href="/privacy-policy"
                    className="text-sm leading-6 text-b-salty-ice-200 hover:text-gray-500"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms-conditions"
                    className="text-sm leading-6 text-b-salty-ice-200 hover:text-gray-500"
                  >
                    Terms & Conditions
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex justify-end space-x-6">
            <Link href="#" >
              <span className="sr-only">Instagram</span>
              <Image
                src="/svgs/instagram-circled.svg"
                alt="instagram-logo"
                width={50}
                height={50}
              />
            </Link>
            <Link href="#" >
              <span className="sr-only">Twitter</span>
              <Image
                src="/svgs/twitter-circled.svg"
                alt="twitter-logo"
                width={50}
                height={50}
              />
            </Link>
            <Link href="#" >
              <span className="sr-only">Linkedin</span>
              <Image
                src="/svgs/linkedin-circled.svg"
                alt="linkedin-logo"
                width={50}
                height={50}
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
