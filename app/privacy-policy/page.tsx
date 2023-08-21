import React from 'react';
import NavBar from '@/src/components/NavBar';
import Footer from '@/src/components/Footer';

export default function pages() {
  return (
    <div>
      <main className="">
        <header>
          <NavBar />
          {/* <!-- Main --> */}
          <main className="max-w-[1040px] mx-auto my-24 px-5 lg:px-0">
            <div className="flex flex-col justify-center items-center">
              <div className="bg-b-primary-accent p-2 w-fit rounded">
                <p className="text-b-primary-700 font-medium">
                  UPDATED 01/AUG/2023
                </p>
              </div>
              <h4 className="text-b-primary-900 my-8 font-clashDisplay text-[40px] font-medium">
                Betascore’s Privacy Policy
              </h4>
            </div>
            <div className="text-b-primary-900">
              <p>
                These terms and conditions (“Agreement”) govern the provision of
                credit brokering services (“Services”) by Betascore Finance Ltd
                (“Broker”) to the customer (“Customer”) seeking credit products.
                We are Betascore Finance Ltd (BetaScore). Where we say “we”,
                “our”, or “us” in this document, that’s who we mean.
              </p>
              <br />
              <p>
                By engaging our Services, the Customer agrees to be bound by
                this Agreement.
              </p>
              <br />
              <p>Services Provided:</p>
              <br />
              <p>
                We aim to provide you access to fair and affordable credit,
                taking control of your finance by helping you to access and move
                your credit report and credit score from Credit Reference
                Agencies. You can read up on what credit scores, credit reports
                and Credit Reference Agencies are.
              </p>
              <br />
              <ol className="list-decimal pl-6">
                <li>
                  We, as your authorized agent, obtain your credit information
                  from credit reference agencies once a month. This means that
                  we collect this information on your behalf, just as you could
                  do yourself. By using our services, you agree that we and the
                  credit reference agencies are authorized to rely on this
                  authorization.
                </li>
                <br />
                <li>
                  We acts as an intermediary, connecting the Customer with
                  potential lenders and facilitating the credit application
                  process.
                </li>
                <br />
                <li>
                  We provide assistance and guidance in understanding credit
                  products, completing applications, and submitting them to
                  lenders on behalf of the Customer.
                </li>
                <br />
                <li>
                  We do not guarantee the approval of any credit applications or
                  the availability of specific credit products.
                </li>
                <br />
                <li>
                  We will present your credit report and credit score to you if
                  you pass our identity authentication process for security
                  purposes. We will try to help you if you fail the process, but
                  we are not required to notify you of the reasons for the
                  failure.
                </li>
                <br />
                <li>
                  We obtain this information through a “search” of your credit
                  records. A soft search does not affect your credit score.
                </li>
              </ol>
              <br />
              <p>Customers:</p>
              <br />
              <br />
              <p>
                You’re our customer (or thinking about becoming our customer),
                if we say “you” or “your” in these terms, we mean you. You are
                welcome to be our customer provided you agree to comply with our
                Acceptable Use Policy and you are:
              </p>
              <br />
              <ul className="list-disc pl-6">
                <li>over 18 years’ old</li>
                <li>
                  a real, live person accessing our services for your personal
                  use (you can’t use our services for commercial or business
                  use)
                </li>
                <li>
                  accessing our services on your own behalf. You also can’t (or
                  try to) access our services for someone else. You’d have to
                  ask them to sign up on their own behalf. You must keep your
                  login and security details confidential. You are responsible
                  for any use of our services using your login details, whether
                  authorised by you or not.
                </li>
              </ul>
              <br />
              <p>
                We can refuse to provide a new customer with services or cease
                to provide services to existing customers, at any time and at
                our sole discretion. Examples of when we might do this include
                if:
              </p>
              <br />
              <p>
                we find out or have reason to believe you’re breaching these
                Terms (for example, you’re using our services for business use
                or on someone else’s behalf)
              </p>
              <ul className="list-disc pl-6">
                <li>you’re rude or threatening to our staff</li>
                <li>we decide to stop offering a service you are using</li>
                <li>
                  we think your use of our services is unlawful or you are
                  breaching our Acceptable Use Policy
                </li>
                <li>
                  your initial identity verification check has been unsuccessful
                  and we have not been able to verify your identity.
                </li>
              </ul>
              <br />
              <p>Customer Responsibilities:</p>
              <br />
              <ol className="list-none">
                <li>
                  2.1 The Customer agrees to provide accurate and complete
                  information required for the credit application process.
                </li>
                <li>
                  2.2 The Customer acknowledges that the Broker relies on the
                  information provided by the Customer and that any inaccuracies
                  may affect the credit application outcomes.
                </li>
                <li>
                  2.3 The Customer is responsible for reviewing and
                  understanding the terms and conditions, fees, interest rates,
                  repayment terms, and any other relevant details associated
                  with credit products before making any commitments.
                </li>
              </ol>
              <br />
              <p>Privacy and Data Protection:</p>
              <br />
              <ol className="list-none">
                <li>
                  3.1 We respect the privacy of the Customer&#39;s personal
                  information and complies with applicable data protection laws.
                </li>
                <li>
                  3.2 The Customer agrees to the collection, use, and processing
                  of their personal data as necessary for the provision of the
                  Services.
                </li>
                <li>
                  3.3 We shall take reasonable security measures to protect the
                  Customer’s personal data, but cannot guarantee absolute
                  security.
                </li>
              </ol>
              <br />
              <p>Compensation and Fees:</p>
              <br />
              <ol className="list-none">
                <li>
                  4.1 Our fees and compensation structure shall be agreed upon
                  with the Customer prior to engaging the Services.
                </li>
                <li>
                  4.2 The Customer agrees to pay us the agreed-upon fees and any
                  applicable charges for the Services rendered.
                </li>
              </ol>
              <br />
              <p>Limitation of Liability:</p>
              <br />
              <ol className="list-none">
                <li>
                  5.1 We shall not be held liable for any direct or indirect
                  damages, losses, or expenses incurred by the Customer in
                  relation to the Services, including but not limited to the
                  rejection of credit applications or any financial transactions
                  between the Customer and lenders.
                </li>
                <li>
                  5.3 We shall not be responsible for any actions, omissions, or
                  representations made by the lenders, financial institutions,
                  or any third parties involved in the credit application
                  process.
                </li>
              </ol>
              <br />
              <p>Termination:</p>
              <br />
              <ol className="list-none">
                <li>
                  6.1 Either party may terminate this Agreement by providing
                  written notice to the other party.
                </li>
                <li>
                  6.2 Upon termination, the Customer shall be liable to pay any
                  outstanding fees and expenses incurred for the Services
                  provided by the Broker before termination.
                </li>
              </ol>
              <br />
              <p>Governing Law and Jurisdiction:</p>
              <br />
              <ol className="list-none">
                <li>
                  7.1 This Agreement shall be governed by and construed in
                  accordance with English laws
                </li>
                <li>
                  7.2 Any disputes arising from or related to this Agreement
                  shall be subject to the exclusive jurisdiction of the courts
                  of the English Courts.
                </li>
              </ol>
            </div>
          </main>
        </header>
      </main>
      <Footer />
    </div>
  );
}
