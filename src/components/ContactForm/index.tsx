import React, { useState, useRef } from 'react';

export default function Index() {
  const [loader, setLoader] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const ref = useRef(null);

  const submitHandler = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = event.currentTarget['email'].value;
    const business_name = event.currentTarget['business_name'].value;

    try {
      setLoader(true);
      const response = await fetch(
        'https://docker-betascore-rlnebvmeya-uc.a.run.app/api/v1/utility/business-mail',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ email, business_name }),
        }
      );
      await response.json();
      setShowMessage(true);
      (ref.current as HTMLFormElement | null)?.reset();
      setTimeout(() => {
        setShowMessage(false);
      }, 3000);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoader(false);
    }
  };
  return (
    <section className="my-8 xl:my-[120px]">
      <div className="max-w-[1170px] mx-auto bg-b-light-200-green border border-b-light-green rounded-[20px] xl:rounded-[40px] flex flex-wrap lg:flex-nowrap lg:justify-around items-center px-6 py-10 xl:px-[72px] xl:py-16">
        <div className="w-[80%] lg:w-[45%]">
          <p className="text-2xl text-black font-medium pt-4 pb-10 xl:pb-12 xl:pt-10 leading-none">
            Find out how Ndewo can unlock revenue opportunities for you!
          </p>
        </div>
        <form onSubmit={submitHandler} className="w-full" ref={ref}>
          <div className="flex flex-col gap-4 mb-10 w-full lg:max-w-[304px] m-auto">
            <h3 className="text-b-purple-light mb-2">GET IN TOUCH</h3>
            {showMessage && (
              <div>
                <p>Contact submitted. We will be in touch.</p>
              </div>
            )}
            <input
              type="text"
              placeholder="Business name"
              name="business_name"
              id="name"
              className="border-b-border-green bg-white rounded-[46px] py-4 pl-10"
            />

            <input
              type="text"
              placeholder="Email address"
              name="email"
              id="email"
              className=" border-b-border-green bg-white rounded-[46px] py-4 pl-10"
            />
            <button
              type="submit"
              disabled={loader}
              className="bg-b-light-green rounded-[40px] py-4 xl:py-4 px-[80px] mt-3 w-full"
            >
              {loader ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
