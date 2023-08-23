'use client';
import { useState } from 'react';
import Footer from '@/src/components/Footer';
import NavBar from '@/src/components/NavBar';
import WaitList from '@/src/components/WaitList';

export default function FAQ() {
  const [showModal, setShowModal] = useState(false);

  const closeModalHandler = () => {
    setShowModal(false);
  };

  const openModalHandler = () => {
    setShowModal(true);
  };
  return (
    <div>
      {/*  */}
      <WaitList showModal={showModal} closeHandler={closeModalHandler} />
      {/*  */}
      <NavBar openModalHandler={openModalHandler} />

      <iframe
        style={{
          width: '100%',
          height: '100vh',
          border: '2px solid #ccc',
          borderRadius: '10px',
          padding: 'none',
        }}
        src="https://v2-embednotion.com/F-A-Qs-41ce619d445a4b26bbfb24ba11832c69?pvs=4"
      />
      <Footer />
    </div>
  );
}
