'use client';
import React from 'react';
import { Disclosure } from '@headlessui/react';
import { PlusSmallIcon, MinusIcon } from '@heroicons/react/24/outline';

export default function FAQ() {
  const faqs = [
    {
      question: 'How can partnering with Betascore Finance Limited benefit my business and its subscribers?',
      answer:
        'Partnering with us can benefit your business by providing access to new customers that were not accessible due to a lack of actionable data for them. We provide comprehensive credit information, background and reference checking to enable better risk assessment and enhancing decision-making processes.',
    },
    {
      question:
        'What types of businesses do we work with?',
      answer:
        "We work with diverse businesses, including financial institutions, oil and gas companies, e-commerce businesses, governmental institutions or nont for profit companies. Whether you're a large corporation or a small business, we're committed to exploring partnership opportunities that can unlock more growth opportunities for you.",
    },
    {
      question: 'How does the partnership process work?',
      answer:
        "The partnership process typically involves an initial consultation to understand your business needs and objectives. We'll work closely with you to tailor a partnership program that aligns with your goals and objectives. This may include accessing our credit data through APIs, co-branding opportunities, or joint marketing efforts to promote your services to our subscribers.",
    },
    {
      question: 'What measures do we take to ensure data security and compliance?',
      answer:
        'Data security and compliance are top priorities for us. We adhere to stringent security protocols and comply with industry regulations to safeguard sensitive information. Our systems are regularly audited and undergo rigorous testing to ensure the highest data protection and privacy standards.',
    },

    {
      question: 'How can my business get started by partnering with your credit reporting company?',
      answer:
        "Getting started is easy! Simply reach out to our partnership team through our website - business page form or contact us directly by emailing business@betascore.io. We'll schedule an initial consultation to discuss your needs and explore how we can work together to create value for your business.",
    },

  ];
  return (
    <section className="max-w-[1520px] mx-auto">
      <div className='flex justify-center'>
        <h3 className="text-[32px] xl:text-[72px] leading-10 lg:leading-none mb-0 xl:mb-10 lg:mb-16 font-semibold">
          FAQs
        </h3>
      </div>
      <div className="mb-24">
        <div className="p-4 lg:px-6 lg:py-12 lg:pt-6">
          <div className="mx-auto divide-y divide-gray-900/10">
            <dl className="space-y-6 divide-y divide-gray-900/10">
              {faqs.map((faq) => (
                <Disclosure as="div" key={faq.question} className="pt-6">
                  {({ open }) => (
                    <>
                      <dt>
                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-b-black-200">
                          <span className="text-xl lg:text-[32px] font-medium leading-none">
                            {faq.question}
                          </span>
                          <span className="ml-6 flex h-7 items-center">
                            {open ? (
                              <MinusIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            ) : (
                              <PlusSmallIcon
                                className="h-6 w-6"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </Disclosure.Button>
                      </dt>
                      <Disclosure.Panel as="dd" className="mt-2 lg:pr-12">
                        <p className="text-sm lg:text-2xl leading-7 text-b-black-grey">
                          {faq.answer}
                        </p>
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
