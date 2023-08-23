'use client';
import { useState } from 'react';
import NavBar from '@/src/components/NavBar';
import Footer from '@/src/components/Footer';
import WaitList from '@/src/components/WaitList';

export default function Terms() {
  const [showModal, setShowModal] = useState(false);

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const openModalHandler = () => {
    setShowModal(true);
  };
  return (
    <div>
      <main className="">
        <header>
          <NavBar openModalHandler={openModalHandler}/>
          {/*  */}
          <WaitList showModal={showModal} closeHandler={closeModalHandler} />
          {/*  */}
          {/* <!-- Main --> */}
          <main className="max-w-[1040px] mx-auto my-24 px-5 lg:px-0">
            <div className="flex flex-col justify-center items-center">
              <div className="bg-b-primary-accent p-2 w-fit rounded">
                <p className="text-b-primary-700 font-medium">
                  UPDATED 01/AUG/2023
                </p>
              </div>
              <h4 className="text-b-primary-900 my-8 font-clashDisplay text-2xl sm:text-[40px] font-semibold text-center">
                Betascore’s Terms and Conditions
              </h4>
            </div>

            <div className="text-b-primary-900">
              <p className="font-semibold">
                Important information and who we are
              </p>
              <p>
                Welcome to BetaScore Finance Ltd’s Privacy and Data Protection
                Policy (“Privacy Policy”).
              </p>
              <br />
              <p>
                At BetaScore Finance Ltd (“we”, “us”, or “our”) we are committed
                to protecting and respecting your privacy and Personal Data in
                compliance with the United Kingdom General Data Protection
                Regulation (“GDPR”), the Data Protection Act 2018 and all other
                mandatory laws and regulations of the United Kingdom.
              </p>

              <br />
              <p>
                This Privacy Policy alongside our terms and conditions explains
                how we collect, process and keep your data safe. The Privacy
                Policy will tell you about your privacy rights, how the law
                protects you, and inform our employees and staff members of all
                their obligations and protocols when processing data.
              </p>
              <br />
              <p>
                The individuals from which we may gather and use data can
                include:
              </p>
              <br />
              <p>Customers</p>
              <p>Suppliers</p>
              <p>Business contacts</p>
              <p>Employees/Staff Members</p>
              <p>Third parties connected to your customers</p>
              <p>Credit Reference Agencies</p>
              <p>
                and any other people that the organisation has a relationship
                with or may need to contact.
              </p>
              <p>
                This Privacy Policy applies to all our employees and staff
                members and all Personal Data processed at any time by us.
              </p>
              <br />
              <p className="font-semibold">Your Data Controller</p>
              <p>
                BetaScore Finance Ltd is your Data Controller and responsible
                for your Personal Data. We are not obliged by the GDPR to
                appoint a data protection officer and have not voluntarily
                appointed one at this time. Therefore, any inquiries about your
                data should either be sent to us by email to Seun@betascore.io
                or by post to 71-75 Shelton Street, Covent Garden, London, WC2H
                9JQ, United Kingdom.
              </p>
              <br />
              <p>
                You have the right to make a complaint at any time to the
                Information Commissioner’s Office (ICO), the UK supervisory
                authority for data protection issues (www.ico.org.uk). We would,
                however, appreciate the chance to deal with your concerns before
                you approach the ICO so please contact us in the first instance.
              </p>

              <br />
              <p className="font-semibold">
                Processing data on behalf of a Controller and processors’
                responsibility to you
              </p>
              <p>
                In discharging our responsibilities as a Data Controller we have
                employees who will deal with your data on our behalf (known as
                “Processors”). The responsibilities below may be assigned to an
                individual or may be taken to apply to the organisation as a
                whole. The Data Controller and our Processors have the following
                responsibilities:
              </p>

              <br />
              <ul className="list-disc pl-6">
                <li>
                  Ensure that all processing of Personal Data is governed by one
                  of the legal bases laid out in the GDPR (see 2.2 below for
                  more information);
                </li>
                <li>
                  Ensure that Processors authorised to process Personal Data
                  have committed themselves to confidentiality or are under an
                  appropriate statutory obligation of confidentiality;
                </li>
                <li>
                  Implement appropriate technical and organisational measures to
                  ensure a level of security appropriate to the risk associated
                  with the processing of Personal Data;
                </li>
                <li>
                  Obtain the prior specific or general authorisation of the
                  Controller before engaging another Processor;
                </li>
                <li>
                  Assist the Controller in the fulfilment of the
                  Controller&#39;s obligation to respond to requests for
                  exercising the data subject&#39;s rights;
                </li>
                <li>
                  Make available to the Controller all information necessary to
                  demonstrate compliance with the obligations laid down in the
                  GDPR and allow for and contribute to audits, including
                  inspections, conducted by the Controller or another auditor
                  mandated by the Controller;
                </li>
                <li>
                  Maintain a record of all categories of processing activities
                  carried out on behalf of a Controller;Cooperate, on request,
                  with the supervisory authority in the performance of its
                  tasks;
                </li>
                <li>
                  Ensure that any person acting under the authority of the
                  Processor who has access to Personal Data does not process
                  Personal Data except on instructions from the Controller; and
                </li>
                <li>
                  Notify the Controller without undue delay after becoming aware
                  of a Personal Data Breach.
                </li>
              </ul>

              <br />
              <h4 className="font-semibold">LEGAL BASIS FOR DATA COLLECTION</h4>
              <br />
              <p className="font-semibold">
                Types of data / Privacy policy scope
              </p>
              <br />
              <p>
                <span className="font-semibold">“Personal Data”</span> means any
                information about an individual from which that person can be
                identified. It does not include data where the identity has been
                removed (anonymous data). We may collect, use, store and
                transfer different kinds of Personal Data about you which we
                have grouped together below. Not all of the following types of
                data will necessarily be collected from you but this is the full
                scope of data that we collect and when we collect it from you:
              </p>
              <br />
              <ul className="list-disc pl-6">
                <li>
                  <span className="font-semibold">Profile/Identity Data:</span>{' '}
                  This is data relating to your first name, last name, gender,
                  date of birth.
                </li>
                <li>
                  <span className="font-semibold">Contact Data:</span> This is
                  data relating to your phone number, addresses, email
                  addresses, phone numbers.
                </li>
                <li>
                  <span className="font-semibold">
                    Marketing and Communications Data:
                  </span>{' '}
                  This is your preferences in receiving marketing information
                  and other information from us.
                </li>
                <li>
                  <span className="font-semibold">Billing Data:</span> This is
                  information relating to your debit and credit card information
                  such as the name attached to your payment details and your
                  billing address.
                </li>
                <li>
                  <span className="font-semibold">Financial Data:</span> These
                  are your banking details e.g. your account number and sort
                  code.
                </li>
                <li>
                  <span className="font-semibold">Transactional Data:</span>{' '}
                  This is information of details and records of all payments you
                  have made for our services or products.
                </li>
                <li>
                  <span className="font-semibold">Special Categories:</span>{' '}
                  This is data relating to your Claims History, Criminal
                  Convictions and CCJs
                </li>
                <li>
                  <span className="font-semibold">
                    Credit Reference Agencies:
                  </span>{' '}
                  This is data relating to your credit score and credit report,
                  we collect once you register for our service
                </li>
              </ul>

              <br />
              <p>
                We also collect, use and share Aggregated Data such as we also
                collect use and share Aggregated Data such as App and web
                Analytics . Aggregated Data could be derived from your Personal
                Data but is not considered Personal Data in law as this data
                will not directly or indirectly reveal your identity. However,
                if we combine or connect Aggregated Data with your Personal Data
                so that it can directly or indirectly identify you, we treat the
                combined data as Personal Data which will be used in accordance
                with this Privacy Policy.
              </p>
              <br />
              <p>
                We may also aggregate data to enable research or analysis so
                that we can better understand and serve you and others. For
                example, we may conduct research on your demographics and usage.
                Although this aggregated data may be based in part on Personal
                Data, it does not identify you personally. We may share this
                type of anonymous data with others, including service providers,
                our affiliates, agents and current and prospective business
                partners.
              </p>
              <br />
              <p>
                We do not collect any Special Categories of Personal Data about
                you (this includes details about your race or ethnicity,
                religious or philosophical beliefs, sex life, sexual
                orientation, political opinions, trade union membership,
                information about your health, and genetic and biometric data).
                Nor do we collect any information about criminal convictions and
                offences.
              </p>

              <br />
              <p className="font-semibold">
                What is our lawful basis for using your Personal Data
              </p>
              <p>
                There are a number of justifiable reasons under the GDPR that
                allow collection and processing of Personal Data. The main
                avenues we rely on are:
              </p>
              <ol className="list-disc pl-6">
                <li>
                  <span className="font-semibold">“Consent”:</span> We will
                  consistently request your consent to process specific types of
                  information in cases where it is legally necessary. You retain
                  the right to withdraw or refuse your consent at any point in
                  time.
                </li>
                <li>
                  <span className="font-semibold">
                    “Contractual Obligations”:
                  </span>{' '}
                  In order to fulfil the services outlined in our contract with
                  you, we require you to provide us with the necessary
                  information. Additionally, we may collect information about
                  you from Credit Reference Agencies or other third parties. It
                  is essential for us to gather this information, as we need
                  specific details to access your credit report and score,
                  present appropriate financial offers, and provide our various
                  services, including Betacredit. Without this information, we
                  will be unable to offer our services to you as agreed upon in
                  the contract.
                </li>
                <li>
                  <span className="font-semibold">“Legal Compliance”:</span>{' '}
                  We’re required by law to collect and process certain types of
                  data, such as fraudulent activity or other illegal actions.
                </li>
                <li>
                  <span className="font-semibold">“Legitimate Interest”:</span>{' '}
                  “Legitimate Interest”: We may process your personal data based
                  on our legitimate interests or the legitimate interests of our
                  product providers or other suppliers, provided that such
                  processing does not outweigh your rights and freedoms. For
                  instance, we may process your personal data to:
                  <ol className="list-disc pl-6">
                    <li>Show personalized product offers to you.</li>
                    <li>Comply with applicable laws that concern us.</li>
                    <li>
                      Provide you with our services, including quality control
                      and analysis.
                    </li>
                    <li>
                      Safeguard you and us from fraud or other potential risks.
                    </li>
                    <li>
                      Conduct analysis, segmentation, and profiling of your data
                      to deliver direct
                    </li>
                    <li>marketing communications.</li>
                    <li>
                      Enhance our services and manage our customer
                      relationships.
                    </li>
                  </ol>
                </li>
              </ol>
              <br />
              <p>
                If we rely on legitimate interests for processing your data, you
                have the right to object to it at any time.
              </p>
              <br />
              <h4 className="font-semibold">HOW WE USE YOUR PERSONAL DATA</h4>
              <br />
              <p>
                The data we have about you is utilised to deliver our services,
                enhance their quality, manage your account, and establish
                communication with you. Additionally, we may use anonymised
                information for research, profiling, and analytical purposes.
                The data you provide to us or that we collect from Credit
                Reference Agencies (e.g., Equifax and First Central Registry) or
                other third parties on your behalf is used for the following
                purposes as part of our services:
              </p>
              <br />
              <ul className="list-decimal pl-6">
                <li>
                  Administer your account and manage your relationship with us,
                  including communication through various means such as
                  telephone, mail, email, text (SMS) message, push notification,
                  or other electronic methods.
                </li>
                <li>
                  Verify your identity as part of our identity authentication
                  process.
                </li>
                <li>Provide you with information, products, and services.</li>
                <li>
                  If you have consented to receive marketing materials, we will
                  use the information to provide you with details about other
                  products and services that we believe may interest you or suit
                  your needs.
                </li>
                <li>Notify you about any changes to our services.</li>
                <li>
                  Ensure that the content from our website is presented in the
                  most effective manner for you and your device.
                </li>
                <li>
                  Aggregate the information on an anonymous basis with other
                  data for data analytics and reporting purposes.
                </li>
                <li>
                  Conduct analysis and profiling of your credit information to
                  identify and inform you about credit products that we believe
                  would be of interest to you or suitable for your credit
                  circumstances, or to improve our services.
                </li>
              </ul>
              <br />
              <p>
                Please note that we may process your Personal Data without your
                knowledge or consent, in compliance with the above rules, where
                this is required or permitted by law.
              </p>

              <br />
              <h4 className="font-semibold">
                YOUR RIGHTS AND HOW YOU ARE PROTECTED BY US
              </h4>
              <br />
              <p className="font-semibold">Your legal rights</p>
              <p>
                Under certain circumstances, you have the following rights under
                data protection laws in relation to your personal data:
              </p>
              <br />
              <ol className="list-disc pl-6">
                <li>
                  <span className="font-semibold">Right to be informed:</span>{' '}
                  You have a right to be informed about our purposes for
                  processing your personal data, how long we store it for, and
                  who it will be shared with. We have provided this information
                  to you in this policy.
                </li>
                <li>
                  <span className="font-semibold">Right of access:</span> This
                  enables you to receive a copy of the personal data we hold
                  about you and to check that we are lawfully processing it
                  (also known as a “data subject access request”). See section
                  4.5 below for more details on how you can make a data subject
                  access request.
                </li>
                <li>
                  <span className="font-semibold">Right to rectification:</span>{' '}
                  You have a right to request correction of the personal data
                  that we hold about you. This enables you to have any
                  incomplete or inaccurate data we hold about you corrected,
                  though we may need to verify the accuracy of the new data you
                  provide to us.
                </li>
                <li>
                  <span className="font-semibold">Right to erasure:</span> You
                  have the right to ask us to delete or remove personal data
                  where there is no good reason for us continuing to process it,
                  where you have successfully exercised your right to object to
                  processing (see below), where we may have processed your
                  information unlawfully or where we are required to erase your
                  personal data to comply with local law. Note, however, that we
                  may not always be able to comply with your request of erasure
                  for specific legal reasons which will be notified to you, if
                  applicable, at the time of your request.
                </li>
                <li>
                  <span className="font-semibold">Right to object:</span> You
                  can object to the processing of personal data we hold about
                  you. This effectively allows you to stop or prevent us from
                  processing your personal data. Note that this is not an
                  absolute right and it only applies in certain circumstances,
                  for example:
                  <ul className="list-disc pl-6">
                    <li>
                      Where we are processing your personal data for direct
                      marketing purposes.
                    </li>
                    <li>
                      Where we are relying on a legitimate interest (or those of
                      a third party) and there is something about your
                      particular situation which makes you want to object to
                      processing on this ground as you feel it impacts on your
                      fundamental rights and freedoms.
                    </li>
                    <li>
                      In some cases, we may continue processing your data if we
                      can demonstrate that we have compelling legitimate grounds
                      to process your information which override your rights and
                      freedoms.
                    </li>
                  </ul>
                </li>
                <li>
                  <span className="font-semibold">
                    Right to restrict processing:
                  </span>{' '}
                  You have the right to request the restriction or suppression
                  of their personal data. Note that this is not an absolute
                  right and it only applies in certain circumstances:
                  <ol className="list-disc pl-6">
                    <li>If you want us to establish the data’s accuracy.</li>
                    <li>
                      Where our use of the data is unlawful but you do not want
                      us to erase it
                    </li>
                    <li>
                      Where you need us to hold the data even if we no longer
                      require it as you need it to establish, exercise or defend
                      legal claims.
                      <li>
                        You have objected to our use of your data but we need to
                        verify whether we have overriding legitimate grounds to
                        use it.
                      </li>
                    </li>
                  </ol>
                </li>
                <li>
                  <span className="font-semibold">
                    Right to restrict processing:
                  </span>{' '}
                  You have the right to request the restriction or suppression
                  of their personal data. Note that this is not an absolute
                  right and it only applies in certain circumstances: If you
                  want us to establish the data’s accuracy. Where our use of the
                  data is unlawful but you do not want us to erase it Where you
                  need us to hold the data even if we no longer require it as
                  you need it to establish, exercise or defend legal claims. You
                  have objected to our use of your data but we need to verify
                  whether we have overriding legitimate grounds to use it.
                </li>
                <li>
                  <span className="font-semibold">
                    Right to Withdraw Consent:
                  </span>{' '}
                  If you have previously provided consent for us to use your
                  information, you retain the right to withdraw that consent at
                  any point. To initiate the withdrawal of your consent, please
                  get in touch with our Data Protection Officer.
                </li>
              </ol>
              <br />
              <p>
                If you wish to make a request under any of these rights, please
                contact us at Seun@betascore.io.
              </p>
              <br />
              <p className="font-semibold">
                Your control over BetaScore Finance Ltd’s use of your Personal
                Data
              </p>
              <br />
              <p>
                You may delete your account at any time – this will remove your
                account page from our systems and our related software. We
                guarantee this will delete all stored data. You can access
                information associated with your account by logging into your
                account you created with us. Your account information will be
                protected by a password for your privacy and security. You need
                to prevent unauthorised access to your account and personal
                information by selecting and protecting your password
                appropriately and limiting access to your computer or device and
                by signing off after you have finished accessing your account.
              </p>
              <br />
              <p>
                California Privacy Rights: Under California Civil Code sections
                1798.83-1798.84, California residents are entitled to ask us for
                a notice identifying the categories of personal customer
                information which we share with our affiliates and/or third
                parties for marketing purposes, and providing contact
                information for such affiliates and/or third parties. If you are
                a California resident and would like a copy of this notice,
                please submit a written request to Seun@betascore.io.
              </p>
              <br />
              <p className="font-semibold">
                How BetaScore Finance Ltd protects customers’ Personal Data
              </p>
              <br />
              <p>
                We are concerned with keeping your data secure and protecting it
                from inappropriate disclosure. We implement a variety of
                security measures to ensure the security of your Personal Data
                on our systems, including We implement certain security measures
                to ensure the security of your Personal data on our systems,
                including adopting a secure protocol and encrypting our
                databases.
              </p>
              <br />
              <p>
                Any Personal Data collected by us is only accessible by a
                limited number of employees who have special access rights to
                such systems and are bound by obligations of confidentiality. If
                and when we use subcontractors to store your data, we will not
                relinquish control of your Personal Data or expose it to
                security risks that would not have arisen had the data remained
                in our possession.
              </p>
              <br />
              <p>
                However, unfortunately no transmission of data over the internet
                is guaranteed to be completely secure. It may be possible for
                third parties not under the control of BetaScore Finance Ltd to
                intercept or access transmissions or private communications
                unlawfully. While we strive to protect your Personal Data, we
                cannot ensure or warrant the security of any Personal Data you
                transmit to us. Any such transmission is done at your own risk.
                If you believe that your interaction with us is no longer
                secure, please contact us.
              </p>
              <br />
              <p>Opting out of marketing promotions</p>
              <p>
                You can ask us to stop sending you marketing messages at any
                time by You can ask us to stop sending you marketing messages at
                any time by using the unsubscribe or manage preference link.
              </p>
              <p>
                Where you opt out of receiving these marketing messages, we will
                continue to retain other Personal Data provided to us as a
                result of interactions with us not related to your marketing
                preferences.
              </p>
              <br />
              <p>How to request your data and the process for obtaining it</p>
              <p>
                You will not have to pay a fee to access your Personal Data (or
                to exercise any of the other rights). However, if your request
                is clearly unfounded, we could refuse to comply with your
                request.
              </p>
              <br />
              <p>
                We may need to request specific information from you to help us
                confirm your identity and ensure you have the right to access
                your Personal Data (or to exercise any of your other rights).
                This is a security measure to ensure that Personal Data is not
                disclosed to any person who has no right to receive it. We may
                also contact you to ask you for further information in relation
                to your request to speed up our response.
              </p>
              <br />

              <h4 className="font-semibold">YOUR DATA AND THIRD PARTIES</h4>
              <br />
              <p className="font-semibold">
                Sharing your data with third parties
              </p>
              <p>
                We may share non-Personal Data with third parties. We may share
                your Personal Data with subcontractors or affiliates, subject to
                confidentiality obligations to use it only for the purposes for
                which we disclose it to them and pursuant to our instructions.
              </p>
              <br />
              <p>
                We may also share Personal Data with interested parties in the
                event that BetaScore Finance Ltd anticipates a change in control
                or the acquisition of all or part of our business or assets or
                with interested parties in connection with the licensing of our
                technology.
              </p>
              <br />
              <p>
                If BetaScore Finance Ltd is sold or makes a sale or transfer, we
                may, in our sole discretion, transfer, sell or assign your
                Personal Data to a third party as part of or in connection with
                that transaction. Upon such transfer, the Privacy Policy of the
                acquiring entity may govern the further use of your Personal
                Data. In all other situations your data will still remain
                protected in accordance with this Privacy Policy (as amended
                from time to time).
              </p>
              <br />
              <p>
                We may share your Personal Data at any time if required for
                legal reasons or in order to enforce our terms or this Privacy
                Policy.
              </p>
              <p>
                <span className="font-semibold">Group Company:</span> We might
                disclose your personal information to any entity within our
                group, including our subsidiaries, our parent company, and its
                subsidiaries.
              </p>
              <br />
              <p>
                <span className="font-semibold">
                  Sharing with Selected Third Parties:
                </span>{' '}
                We may also disclose your information to specific third parties,
                including:
              </p>
              <br />
              <p>
                <span className="font-semibold">
                  Credit Reference Agencies:
                </span>{' '}
                This is to obtain your credit score and credit report on your
                behalf and to provide our services to you. (Please refer to the
                section on “Credit Reference Agencies” for more information).
              </p>
              <br />
              <p>
                <span className="font-semibold">
                  Fraud Prevention Agencies:
                </span>{' '}
                This is to prevent crime and track down those responsible.
                (Please see the section on “Fraud Prevention Agencies” for more
                details).
              </p>
              <br />
              <p>
                <span className="font-semibold">Product Providers:</span> This
                includes our business partners who offer credit cards, loans,
                car finance, mortgages, insurance, pensions, investments, and
                other related products. The purposes for sharing with product
                providers are as follows:
              </p>
              <ol className="list-disc pl-6">
                <li>
                  Assess if you are an existing customer and for fraud
                  prevention purposes.
                </li>
                <li>
                  Conduct analysis to offer you improved products and services
                  in the future, and for segmentation purposes.
                </li>
                <li>Pre-fill an application form with the product provider.</li>
                <li>
                  Evaluate your probability of being accepted for a product.
                </li>
              </ol>
              <br />
              <p>
                <span className="font-semibold">
                  Credit Reference Agencies:
                </span>{' '}
                If you register for our services, we will, as per our Terms,
                obtain copies of your credit report and credit score from
                designated Credit Reference Agencies like Equifax and First
                Central Registry on your behalf. This enables us to offer our
                services to you effectively. We will share your information with
                these Credit Reference Agencies for this purpose.
              </p>
              <br />
              <p>
                The information we provide to the Credit Reference Agencies may
                be shared by them with other organizations, such as Fraud
                Prevention Agencies, to verify identity, prevent fraud, trace
                and collect debts. The Credit Reference Agencies may also use
                the data for statistical analysis.
              </p>
              <br />
              <p>
                Should you decide to apply for a product, the lender will
                conduct a full credit check and provide you with additional
                privacy information for that specific product. If you’d like to
                understand how the credit reference agencies use and share
                personal data (including the legitimate interests they pursue)
                please read the Credit Reference Agency Information Notice
                (CRAIN);
              </p>
              <br />
              <p className="font-semibold">Third-Party Links</p>
              <p>
                This Site may include links to third-party websites, plug-ins
                and applications. Clicking on those links or enabling those
                connections may allow third parties to collect or share data
                about you. We do not control these third-party websites and are
                not responsible for their privacy statements. When you leave our
                Site, we encourage you to read the privacy policy of every
                website you visit.
              </p>
              <br />
              <h4 className="font-semibold">HOW LONG WE RETAIN YOUR DATA</h4>
              <br />
              <p>
                We will only retain your Personal Data for as long as reasonably
                necessary to fulfil the purposes we collected it for. We may
                retain your Personal Data for a longer period than usual in the
                event of a complaint or if we reasonably believe there is a
                prospect of litigation in respect to our relationship with you.
              </p>
              <br />
              <h4 className="font-semibold">AGE LIMIT FOR OUR USERS</h4>
              <br />
              <p>
                You must not use BetaScore Finance Ltd unless you are aged 18 or
                older. If you are under 18 and you access BetaScore Finance Ltd
                by lying about your age, you must immediately stop using
                BetaScore Finance Ltd.
              </p>
              <br />
              <p>
                This website is not intended for children and we do not
                knowingly collect data relating to children.
              </p>
              <br />
              <h4 className="font-semibold">INTERNATIONAL TRANSFER OF DATA</h4>
              <br />
              <p>
                Your information may be stored and processed in the US or other
                countries or jurisdictions outside the US where BetaScore
                Finance Ltd has facilities. By using BetaScore Finance Ltd, you
                are permitting and consenting to the transfer of information,
                including Personal Data, outside of the US.
              </p>
              <br />
              <h4 className="font-semibold">
                NOTIFICATION OF CHANGES AND ACCEPTANCE OF POLICY
              </h4>
              <p>
                We keep our Privacy Policy under review and will place any
                updates here. This version is dated 1 August 2023.
              </p>
              <br />
              <p>
                By using BetaScore Finance Ltd, you consent to the collection
                and use of data by us as set out in this Privacy Policy.
                Continued access or use of BetaScore Finance Ltd will constitute
                your express acceptance of any modifications to this Privacy
                Policy.
              </p>
              <br />
              <h4 className="font-semibold">INTERPRETATION</h4>
              <p>
                All uses of the word “including” mean “including but not limited
                to” and the enumerated examples are not intended to in any way
                limit the term which they serve to illustrate. Any email
                addresses set out in this policy may be used solely for the
                purpose for which they are stated to be provided, and any
                unrelated correspondence will be ignored. Unless otherwise
                required by law, we reserve the right to not respond to emails,
                even if they relate to a legitimate subject matter for which we
                have provided an email address. You are more likely to get a
                reply if your request or question is polite, reasonable and
                there is no relatively obvious other way to deal with or answer
                your concern or question (e.g. FAQs, other areas of our website,
                etc.).
              </p>
              <br />
              <p>
                Our staff are not authorised to contract on behalf of BetaScore
                Finance Ltd, waive rights or make representations (whether
                contractual or otherwise). If anything contained in an email
                from a BetaScore Finance Ltd address contradicts anything in
                this policy, our terms or any official public announcement on
                our website, or is inconsistent with or amounts to a waiver of
                any BetaScore Finance Ltd rights, the email content will be read
                down to grant precedence to the latter. The only exception to
                this is genuine correspondence expressed to be from the
                BetaScore Finance Ltd legal department.
              </p>
            </div>
          </main>
        </header>
      </main>
      <Footer />
    </div>
  );
}
