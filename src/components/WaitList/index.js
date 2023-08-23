'use client';
import React from 'react';
import Image from 'next/image';
import { countryList } from '../../constants/countries';
import Styles from './waitlist.module.scss';
import classNames from 'classnames';

export default function Index({ showModal = false, closeHandler }) {
  const submitForm = async (event) => {
    event.preventDefault();

    const submitButton = document.querySelector('#submitButton');
    submitButton.innerText = 'Submitting...';

    const fullName = document.querySelector('#full_name');
    const email = document.querySelector('#email');
    const countryOfResidence = document.querySelector('#country_of_residence');
    const countryOfOrigin = document.querySelector('#country_of_origin');
    const creditCardInterest = document.querySelector('#credit_card_interest');
    const mortgageInterest = document.querySelector('#mortgage_interest');
    const rentGuarantorInterest = document.querySelector(
      '#rent_guarantor_interest'
    );
    const studentLoanInterest = document.querySelector(
      '#student_loan_interest'
    );
    const carLoanInterest = document.querySelector('#car_loan_interest');
    const otherInterest = document.querySelector('#other_interest');

    const raw = {
      fullName: fullName.value,
      email: email.value,
      countryOfResidence: countryOfResidence.value,
      countryOfOrigin: countryOfOrigin.value,
      interests: {
        creditCardInterest: creditCardInterest.checked,
        mortgageInterest: mortgageInterest.checked,
        rentGuarantorInterest: rentGuarantorInterest.checked,
        studentLoanInterest: studentLoanInterest.checked,
        carLoanInterest: carLoanInterest.checked,
        otherInterest: otherInterest.value,
      },
    };

    try {
      await axios.post(
        'https://us-central1-betascore-waitlist.cloudfunctions.net/saveWaitList',
        raw,
        {
          headers: { 'Content-Type': ['application/json'] },
        }
      );
    } catch (error) {
      console.log('error', error.message);
    } finally {
      form.reset();
      document.querySelector('#thanks').classList.toggle('hidden');
      submitButton.innerText = 'Join waitlist';
      setTimeout(() => {
        document.querySelector('#thanks').classList.toggle('hidden');
        closeHandler();
      }, 5000);
    }

    return false;
  };

  // When the user clicks on the button, open the modal
  if (typeof window !== 'undefined') {
    // Get the modal
    let modal = document.getElementById('myModal');

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function (event) {
      if (event.target == modal) {
        closeHandler();
      }
    };
  }

  return (
    <div
      id="myModal"
      className={classNames(Styles.modal, { ' !block ': showModal })}
    >
      {/* <!-- Modal content --> */}
      <div className={Styles.modalContent}>
        <div className="relative">
          <p
            id="thanks"
            className="text-center absolute text-white left-0 right-0 mr-auto ml-auto bg-green-600 p-1 w-[300px] hidden"
          >
            Thanks for completing our survey
          </p>
        </div>
        <span className={Styles.close} id="close_modal" onClick={closeHandler}>
          &times;
        </span>
        <div className="m-auto max-w-lg sm:p-10">
          <div className="flex flex-col justify-center items-center mb-6">
            <Image
              className="h-10 w-auto"
              src="/svgs/blue-logo.svg"
              alt=""
              width={28}
              height={24}
            />
            <div className="bg-[#D4E0FF] rounded-full p-3 my-4">
              <p className="text-[#0042EC] font-medium">Launching soon</p>
            </div>
          </div>
          <div className="text-center text-[#00154A] my-6">
            <h4 className="text-3xl font-semibold">Get early access!</h4>
            <p>Be the first to hear when we launch</p>
          </div>
          {/* <!-- form --> */}
          <form onSubmit={submitForm} className="text-[#002176]" id="form">
            <div className="flex flex-col mb-4">
              <label htmlFor="" className="font-medium">
                Full name
              </label>
              <input
                id="full_name"
                className="form-input rounded-md text-sm"
                type="text"
                required
                name="fname"
                placeholder="Enter your full name"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="" className="font-medium">
                Email address
              </label>
              <input
                id="email"
                className="rounded-md text-sm"
                type="email"
                required
                name="email"
                placeholder="e.g youremail@example.com"
              />
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="" className="font-medium">
                Country of Residence
              </label>
              <select
                id="country_of_residence"
                name="country_of_residence"
                required
                className="rounded-md text-sm"
              >
                <option
                  value=""
                  disabled
                  // selected
                  id="country_of_residence_placholder"
                >
                  Select your residence
                </option>
                {countryList.map((e) => {
                  return (
                    <option key={e} value={e}>
                      {e}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="flex flex-col mb-4">
              <label htmlFor="" className="font-medium">
                Country of origin
              </label>
              <select
                name="country_of_origin"
                id="country_of_origin"
                required
                className="rounded-md text-sm"
              >
                <option
                  defaultValue=""
                  disabled
                  // selected
                  id="country_of_origin_placholder"
                >
                  Select your origin
                </option>
                {countryList.map((e) => {
                  return (
                    <option key={e} value={e}>
                      {e}
                    </option>
                  );
                })}
              </select>
            </div>
            <div className="flex flex-col mb-4">
              <label className="font-medium">Product(s) of interest</label>
              <div>
                <input
                  id="credit_card_interest"
                  type="checkbox"
                  name="credit_card_interest"
                  value="Credit card,"
                />
                <label
                  htmlFor="credit_card_interest"
                  className="text-[#415377] text-sm pl-2"
                >
                  Credit card
                </label>
              </div>
              <div>
                <input
                  id="mortgage_interest"
                  type="checkbox"
                  name="mortgage_interest"
                  value="Mortgage,"
                />
                <label
                  htmlFor="mortgage_interest"
                  className="text-[#415377] text-sm pl-2"
                >
                  Mortgages
                </label>
              </div>
              <div>
                <input
                  id="rent_guarantor_interest"
                  type="checkbox"
                  name="rent_guarantor_interest"
                  value="Rent guarantor,"
                />
                <label
                  htmlFor="rent_guarantor_interest"
                  className="text-[#415377] text-sm pl-2"
                >
                  Rent guarantor
                </label>
              </div>
              <div>
                <input
                  id="student_loan_interest"
                  type="checkbox"
                  name="student_loan_interest"
                  value="Student loan,"
                />
                <label
                  htmlFor="student_loan_interest"
                  className="text-[#415377] text-sm pl-2"
                >
                  Student loan
                </label>
              </div>
              <div>
                <input
                  id="car_loan_interest"
                  type="checkbox"
                  name="car_loan_interest"
                  value="Car loan,"
                />
                <label
                  htmlFor="car_loan_interest"
                  className="text-[#415377] text-sm pl-2"
                >
                  Car loan
                </label>
              </div>
              <div>
                <input
                  id="others"
                  type="checkbox"
                  name="others"
                  value="Others"
                />
                <label htmlFor="others" className="text-[#415377] text-sm pl-2">
                  Others
                </label>
              </div>
              <div className="my-4">
                <input
                  id="other_interest"
                  name="other_interest"
                  type="text"
                  className="w-full text-sm rounded-md hidden"
                />
              </div>
            </div>
            <button
              type="submit"
              id='submitButton'
              className="bg-[#2864FF] text-white p-3 w-full"
            >
              Join waitlist
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
