'use client';
import React from 'react';
import { Disclosure } from '@headlessui/react';
import { XMarkIcon, PlusSmallIcon } from '@heroicons/react/24/outline';

export default function FAQ() {
  const faqs = [
    {
      question: "What is a credit check, and why is it important?",
      answer: `A credit check is a process where BetaScore collects and analyses your credit information from various sources to create a comprehensive credit report. This report is vital as it provides a snapshot of your credit history, including credit accounts, payment history, outstanding debts, and any public records related to your financial behaviour. Lenders, landlords, and employers often use this report to determine if you are creditworthy and decide if to offer you credit, rent an apartment, or provide job opportunities.`,
    },
    {
      question: "What is a credit check, and why is it important?",
      answer: `A credit check is a process where BetaScore collects and analyses your credit information from various sources to create a comprehensive credit report. This report is vital as it provides a snapshot of your credit history, including credit accounts, payment history, outstanding debts, and any public records related to your financial behaviour. Lenders, landlords, and employers often use this report to determine if you are creditworthy and decide if to offer you credit, rent an apartment, or provide job opportunities.`,
    },
    {
      question: "What is a credit check, and why is it important?",
      answer: `A credit check is a process where BetaScore collects and analyses your credit information from various sources to create a comprehensive credit report. This report is vital as it provides a snapshot of your credit history, including credit accounts, payment history, outstanding debts, and any public records related to your financial behaviour. Lenders, landlords, and employers often use this report to determine if you are creditworthy and decide if to offer you credit, rent an apartment, or provide job opportunities.`,
    },
    {
      question: "What is a credit check, and why is it important?",
      answer: `A credit check is a process where BetaScore collects and analyses your credit information from various sources to create a comprehensive credit report. This report is vital as it provides a snapshot of your credit history, including credit accounts, payment history, outstanding debts, and any public records related to your financial behaviour. Lenders, landlords, and employers often use this report to determine if you are creditworthy and decide if to offer you credit, rent an apartment, or provide job opportunities.`,
    },

    {
      question: "What is a credit check, and why is it important?",
      answer: `A credit check is a process where BetaScore collects and analyses your credit information from various sources to create a comprehensive credit report. This report is vital as it provides a snapshot of your credit history, including credit accounts, payment history, outstanding debts, and any public records related to your financial behaviour. Lenders, landlords, and employers often use this report to determine if you are creditworthy and decide if to offer you credit, rent an apartment, or provide job opportunities.`,
    },
  ];
  return (
    <section className="max-w-[1240px] mx-auto">
      <h6 className="text-b-dark-400 text-base">FREQUENTLY ASKED QUESTIONS</h6>
      <h3 className="text-8xl mb-16 font-clashDisplay font-semibold">
        You asked, <br />
        We <span className="text-b-warning">answered </span>
      </h3>
      <div className="bg-white rounded-[80px] mb-24">
        <div className="px-6 py-12 pt-6">
          <div className="mx-auto max-w-6xl divide-y divide-gray-900/10">
            <dl className="space-y-6 divide-y divide-gray-900/10">
              {faqs.map((faq) => (
                <Disclosure as="div" key={faq.question} className="pt-6">
                  {({ open }) => (
                    <>
                      <dt>
                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                          <span className="text-base font-semibold leading-7">
                            {faq.question}
                          </span>
                          <span className="ml-6 flex h-7 items-center">
                            {open ? (
                              <XMarkIcon
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
                      <Disclosure.Panel as="dd" className="mt-2 pr-12">
                        <p className="text-base leading-7 text-gray-600">
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
