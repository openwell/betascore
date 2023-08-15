'use client';
import React from 'react';
import { Disclosure } from '@headlessui/react';
import { XMarkIcon, PlusSmallIcon } from '@heroicons/react/24/outline';

export default function FAQ() {
  const faqs = [
    {
      question: 'What is a credit check, and why is it important?',
      answer:
        'A credit check is a process where Credit Bureaus or Registries collects and analyses your credit information from various sources to create a comprehensive credit report. This report is vital as it provides a snapshot of your credit history, including credit accounts, payment history, outstanding debts, and any public records related to your financial behaviour. Lenders, landlords, and employers often use this report to determine if you are creditworthy and decide if to offer you credit, rent an apartment, or provide job opportunities.',
    },
    {
      question:
        'How does BetaScore gather information to create my credit report?',
      answer:
        'BetaScore obtains credit information from credit registries in your country of residence. They source the data from different sources, such as banks, credit card companies, and public records. These sources share data about your credit activities, including loan payments, credit card usage, and any legal judgments or bankruptcies. This information is then aggregated and organised into a comprehensive credit report.',
    },
    {
      question: 'What information does my credit report contain?',
      answer:
        'Your credit report contains essential details, including your personal information (name, address, date of birth), account balances, payment history, credit inquiries, public records (such as bankruptcies or tax liens), and any accounts in collections.',
    },
    {
      question: 'How often is my credit report updated?',
      answer:
        'BetaScore will update credit reports regularly, typically monthly. However, the timing of updates depends on when creditors and other data furnishers submit new information. This ensures that your credit report reflects your most recent financial activities.',
    },

    {
      question: 'What factors influence my credit score?',
      answer:
        'Several factors influence your credit score, including payment history (either making consistent payments or missing payments), credit utilisation (how much of your available credit you are using), length of credit history, types of credit accounts, and recent credit inquiries. Understanding these factors can help you work towards improving your credit score.',
    },
    {
      question: 'How can I improve my credit score?',
      answer:
        'Improving your credit score involves responsible financial habits, such as making on-time payments, reducing credit card balances, avoiding opening multiple new accounts at once, and maintaining a healthy credit mix. BetaScore provides personalised tips and recommendations to help you take steps towards better credit health.',
    },
    {
      question:
        'How often can I get a free copy of my credit report from BetaScore?',
      answer:
        'BetaScore offers a free credit report once every 12 months. You can request your report through the official website or our mobile app, available for download in both the PlayStore and Apple Store.',
    },
    {
      question: 'How long does negative information stay on my credit report?',
      answer:
        'Negative information, such as late payments or accounts in collections, typically remains on your credit report for seven years. Bankruptcies may stay on your report for up to ten years. However, as time passes and you build a positive credit history, the impact of negative items diminishes.',
    },
    {
      question: 'Does checking my credit report impact my credit score?',
      answer:
        'No, checking your credit report through BetaScore or any other credit bureau does not affect your credit score. This type of inquiry is known as a soft inquiry and is not visible to lenders or other parties.',
    },
    {
      question:
        'Can I dispute inaccurate or wrong information on my credit report, and how does BetaScore handle disputes?',
      answer:
        'Yes, if you find inaccurate information on your credit report, you can dispute it. BetaScore has a simple online dispute process, allowing you to submit a dispute and provide supporting documentation. Once received, BetaScore will investigate the matter with the data furnishers to verify the accuracy of the information.',
    }
  ];
  return (
    <section className="max-w-[1240px] mx-auto">
      <h6 className="text-b-dark-400 text-sm lg:text-base">FREQUENTLY ASKED QUESTIONS</h6>
      <h3 className="text-[40px] leading-10 lg:leading-none lg:text-8xl mb-10 lg:mb-16 lg:font-clashDisplay font-semibold">
        You asked, <br />
        We <span className="text-b-warning">answered </span>
      </h3>
      <div className="bg-white rounded-[40px] lg:rounded-[80px] mb-24">
        <div className="p-4 lg:px-6 lg:py-12 lg:pt-6">
          <div className="mx-auto max-w-6xl divide-y divide-gray-900/10">
            <dl className="space-y-6 divide-y divide-gray-900/10">
              {faqs.map((faq) => (
                <Disclosure as="div" key={faq.question} className="pt-6">
                  {({ open }) => (
                    <>
                      <dt>
                        <Disclosure.Button className="flex w-full items-start justify-between text-left text-gray-900">
                          <span className="text-xl lg:text-2xl font-medium leading-7">
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
                      <Disclosure.Panel as="dd" className="mt-2 lg:pr-12">
                        <p className="text-sm lg:text-base leading-7 text-gray-600">
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
