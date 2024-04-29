import React from 'react';
import Image from 'next/image';

export default function Index() {
  return (
    <section className="my-8 xl:my-[100px] bg-black">
      <div className="max-w-[1170px] mx-auto lg:gap-10 py-20 flex flex-wrap md:flex-nowrap flex-col-reverse md:flex-row items-center">
        <div className="px-10 flex flex-col justify-center items-center max-w-[350px] text-center">
          <p className="text-2xl text-white leading-10 font-medium pb-12 lg:pt-10">
            Ready to experience awesome service with ndewo?
          </p>

          <a
            className="bg-b-light-green rounded-[40px] py-3 xl:py-4 px-[19px] flex items-center justify-center"
            target="_blank"
            href="https://play.google.com/store/apps/details?id=com.betascore.betascore&pcampaignid=web_sha"
          >
            <Image
              src="/images/ndewo_icon.png"
              alt="beta-score logo"
              width={32}
              height={32}
            />
            <span className="text-black ml-[12px] mr-[8px] xl:text-xl">
              Download app
            </span>
          </a>
        </div>
        <div className="flex items-center px-20 m-auto">
          <Image
            src="/images/free_hand_iphone.png"
            alt=""
            className="w-full"
            width={423}
            height={668}
          />
        </div>
      </div>
    </section>
  );
}
