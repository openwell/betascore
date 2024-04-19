'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Fragment, useState } from 'react';
import { Dialog, Disclosure, Popover, Transition } from '@headlessui/react';
import { Bars2Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { ChevronDownIcon, ArrowRightIcon } from '@heroicons/react/20/solid';
import classNames from 'classnames';

export default function NavBar({ openModalHandler = () => {} }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const companyList = [
    { name: 'About us', href: '/about' },
    { name: 'Privacy Policy', href: '/privacy-policy' },
    { name: 'Terms & conditions', href: '/terms-conditions' },
    { name: 'F.A.Q', href: '/faq' },
  ];

  return (
    <>
      <nav
        className="flex items-center justify-between p-6 lg:px-8 max-w-[1520px] m-auto"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          {/* -m-1.5 p-1.5 */}
          <Link href="/" className="">
            <span className="sr-only">Beta Score Logo</span>
            <Image
              src="/images/ndewo_small.png"
              alt="beta-score logo"
              className='h-[24px] w-[119px] xl:w-[194px] xl:h-[40px]'
              width={194}
              height={40}
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-black"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars2Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          <Link
            href="/individual"
            className="text-base xl:text-lg leading-6 text-b-black-grey"
          >
            Individual
          </Link>
          <Link href="/business" className="text-base xl:text-lg leading-6 text-b-black-grey">
            Business
          </Link>
          <Popover className="relative">
            <Popover.Button className="inline-flex items-center gap-x-1 text-base xl:text-lg leading-6 text-b-black-grey">
              <span>Company</span>
              <ChevronDownIcon
                className="h-5 w-5 text-b-black-grey"
                aria-hidden="true"
              />
            </Popover.Button>

            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-min -translate-x-1/2 px-4">
                <div className="w-56 shrink rounded-xl bg-white p-4 text-sm leading-6 text-b-black-grey shadow-lg ring-1 ring-gray-900/5">
                  {companyList.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="block p-2 "
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </Popover.Panel>
            </Transition>
          </Popover>
          <Link href="/business" className="text-base xl:text-lg leading-6 text-b-black-grey">
            Blog
          </Link>
        </div>
        <div className="hidden lg:flex lg:items-center lg:flex-1 lg:justify-end">
          <button
            onClick={openModalHandler}
            className="text-sm py-2 pl-2 pr-8 bg-b-light-green rounded-full flex items-center justify-center"
          >
            <Image
              src="/images/ndewo_icon.png"
              alt="beta-score logo"
              width={32}
              height={32}
            />
            <span className="text-black ml-[12px] mr-[8px] xl:text-lg">Let&apos;s begin</span>
            <ArrowRightIcon className="h-4 w-6 text-black" aria-hidden="true" />
          </button>
        </div>
      </nav>
      {/* <!-- Mobile menu, show/hide based on menu open state. --> */}
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <Image
                className="h-[24px] w-[119px]"
                src="/images/ndewo_small.png"
                alt=""
                width={112}
                height={40}
              />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon
                className="h-6 w-6 text-b-primary-600"
                aria-hidden="true"
              />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <a
                  href="/individual"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-b-black-grey"
                >
                  Individual
                </a>
                <a
                  href="/business"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base leading-7 text-b-black-grey"
                >
                  Business
                </a>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base  leading-7 text-b-black-grey">
                        Company
                        <ChevronDownIcon
                          className={classNames('h-5 w-5 flex-none', {
                            'rotate-180': open,
                          })}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...companyList].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm leading-7 text-b-black-grey"
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              </div>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  openModalHandler();
                }}
                className="text-base py-4 text-white bg-black rounded-full px-2 w-full"
              >
                Let&apos;s begin
              </button>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
}
