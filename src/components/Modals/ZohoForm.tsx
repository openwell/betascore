import React, { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { XMarkIcon } from '@heroicons/react/24/outline';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

export default function ZohoForm() {
  const [showQrModal, setShowQrModal] = useState(false);
  const closeModalHandler = () => {
    setShowQrModal(false);
    sessionStorage.setItem('qrCodeSeen', 'true');
  };
  const openQrModalHandler = () => {
    setShowQrModal(true);
  };

  useEffect(() => {
    setTimeout(() => {
      if (sessionStorage.getItem('qrCodeSeen') !== 'true') {
        openQrModalHandler();
      }
    }, 5000);
    return () => {};
  }, []);

  return (
    <div>
      <Modal
        isOpen={showQrModal}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModalHandler}
        style={customStyles}
        contentLabel="Example Modal"
        htmlOpenClassName="of-hidden"
      >
        <div className="flex justify-end">
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
            onClick={closeModalHandler}
          >
            <span className="sr-only">Close menu</span>
            <XMarkIcon className="h-6 w-6 text-black" aria-hidden="true" />
          </button>
        </div>
        <iframe
          // width="610px"
          // height="820px"
          className="h-[420px] w-full md:h-[620px] md:w-[510px] lg:h-[720px] lg:w-[610px]"
          src="https://us.bigin.online/org851693650/forms/learn-more"
        />
      </Modal>
      {/* <iframe
        id="zoho-form"
        aria-label="Product Enquiry"
        frameBorder="0"
        style={{ height: '1000px', width: '99%', border: 'none' }}
        src="https://forms.zohopublic.com/betascorefinance/form/ProductEnquiry/formperma/DPRHw9P8dgdQkVOSMgrlEGI1QOkxu20g-slg-768Ku4"
      /> */}
    </div>
  );
}
