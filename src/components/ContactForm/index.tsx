import React, { useState } from 'react';

export default function Index() {

  const [loader, setLoader] = useState(false);
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
      const data = await response.json();
      event.currentTarget.reset();
      console.log('Success:', data);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setLoader(false);
    }
  };
  return (
    <section className="my-8 lg:my-[100px]">
      <form
        onSubmit={submitHandler}
        className="max-w-[1440px] mx-auto gap-10 p-6 xl:p-20 bg-b-light-200-green rounded-[20px] xl:rounded-[40px]"
      >
        <h3 className="text-b-purple-light xl:text-2xl">GET IN TOUCH</h3>
        <p className="text-2xl xl:text-[48px] text-black font-medium pt-4 pb-10 xl:pb-12 xl:pt-10 leading-none">
          Learn more about how Ndewo can help your business achieve it’s goals
          and surpass revenue targets.
        </p>
        <div className="flex flex-wrap gap-4 mb-10">
          <div className="flex-1 flex flex-col">
            <label htmlFor="name">Business name</label>
            <input
              type="text"
              placeholder="Enter your business name"
              name="business_name"
              id="name"
              className="rounded border-b-outline bg-transparent"
            />
          </div>
          <div className="flex-1 flex flex-col">
            <label htmlFor="email">Email address</label>
            <input
              type="text"
              placeholder="Enter your contact email address"
              name="email"
              id="email"
              className="rounded border-b-outline bg-transparent"
            />
          </div>
        </div>
        <button
          type="submit"
          disabled={loader}
          className="bg-b-light-green rounded-[40px] py-4 px-[80px] w-full lg:w-fit"
        >
          {loader ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </section>
  );
}
