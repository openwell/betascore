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
          <main className="text-center max-w-[1040px] mx-auto my-36"></main>
        </header>
      </main>
      <Footer/>
    </div>
  );
}
