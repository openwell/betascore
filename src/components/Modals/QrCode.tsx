import React, {  MouseEventHandler } from 'react';
import Modal from 'react-modal';
import { XMarkIcon } from '@heroicons/react/24/outline';
import Image from 'next/image';

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

// Modal.setAppElement('#modals');

export default function Index({
  showQrModal,
  closeModalHandler,
}: {
  showQrModal: boolean;
  closeModalHandler: MouseEventHandler<HTMLButtonElement>;
}) {
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
            <XMarkIcon
              className="h-6 w-6 text-black"
              aria-hidden="true"
            />
          </button>
        </div>
        <Image
          src="/images/QrCode.jpeg"
          alt=""
          className="w-full h-auto"
          width={67}
          height={120}
        />
      </Modal>
    </div>
  );
}
