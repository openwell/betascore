import React from 'react';
import Image from 'next/image';

export default function Index({
    description,
    title,
    buttonCta
}: {
    readonly description: string;
    readonly title: string;
    readonly buttonCta: string;
}) {
  return (
    <section className="my-8 xl:my-[200px] px-5 py-[50px] xl:py-20 bg-black">
      <div className="max-w-[1170px] mx-auto gap-10 xl:gap-10">
        <div className="flex flex-col justify-center items-center mb-10 max-w-[650px] m-auto text-center">
          <p className="text-[32px] xl:text-7xl text-white font-semibold">
            {title}
          </p>
          <p className="pt-4 pb-6 text-b-grey xl:text-xl">{description}</p>
          <button className="bg-b-light-green rounded-[40px] py-3 px-[40px] xl:py-4 xl:px-[60px] mt-24 xl:mt-0">
            {buttonCta}
          </button>
        </div>
        <div className="flex flex-col justify-center items-center">
          <Image
            src="/images/ndewo_dashboard.png"
            alt=""
            className="w-[1386px]"
            width={1386}
            height={635}
          />
        </div>
      </div>
    </section>
  );
}
