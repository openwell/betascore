// Get the modal
let modal = document.getElementById('myModal');

// Get the button that opens the modal
let btn = document.querySelectorAll('#myBtn');

// Get the <span> element that closes the modal
let span = document.getElementsByClassName('close')[0];

// When the user clicks on the button, open the modal
btn.forEach((e) => {
  e.onclick = function () {
    modal.style.display = 'block';
  };
});

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = 'none';
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
};

// Add countries
const selectDrop = document.querySelector('#country_of_residence');
const selectDropTwo = document.querySelector('#country_of_origin');

let output = '';
countryList.forEach((country) => {
  output += `<option value="${country}"> ${country}</option>`;
});
selectDrop.insertAdjacentHTML('beforeend', output);
selectDropTwo.insertAdjacentHTML('beforeend', output);

// dynamic others
document.querySelector('#others').addEventListener('click', (e) => {
  document.querySelector('#other_interest').classList.toggle('hidden');
});

// submit form
const submitForm = async (event) => {
  event.preventDefault();

  const submitButton = document.querySelector('#submitButton');
  submitButton.innerText = '...Submitting';

  const fullName = document.querySelector('#full_name');
  const email = document.querySelector('#email');
  const countryOfResidence = document.querySelector('#country_of_residence');
  const countryOfOrigin = document.querySelector('#country_of_origin');
  const creditCardInterest = document.querySelector('#credit_card_interest');
  const mortgageInterest = document.querySelector('#mortgage_interest');
  const rentGuarantorInterest = document.querySelector(
    '#rent_guarantor_interest'
  );
  const studentLoanInterest = document.querySelector('#student_loan_interest');
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
      document.querySelector('#close_modal').click();
    }, 5000);
  }

  return false;
};
window.submitForm = submitForm;
