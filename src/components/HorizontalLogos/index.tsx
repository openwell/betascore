import React from 'react';
import Image from 'next/image';
import Marque from 'react-fast-marquee';

export default function Index() {
  return (
    <div className="text-center bg-b-grey-500 mx-auto pb-10 xl:pb-[50px]">
      <p className="text-b-black-grey font-semibold py-11">
        TRUSTED BY MERCHANTS AND BUSINESSES
      </p>

      <Marque>
        <div className="w-full relative flex justify-start items-center gap-10 lg:gap-20 xl:gap-32 px-10">
          <Image
            src="/svgs/grey_logos/okra.svg"
            alt=""
            className="w-[62px] h-[24px] lg:w-[124px] xl:w-[127px] lg:h-[45px]"
            width={84}
            height={30}
          />
          <Image
            src="/svgs/grey_logos/barclays.svg"
            alt=""
            width={106}
            height={18}
            className="w-[94px] h-[16px] lg:w-[124px] xl:w-[198px] lg:h-[34px]"
          />
          <Image
            src="/svgs/grey_logos/equifax.svg"
            alt=""
            className="w-[88px] h-[16px] lg:w-[124px] xl:w-[190px] lg:h-[34px]"
            width={106}
            height={18}
          />
          <Image
            src="/svgs/grey_logos/mono.svg"
            alt=""
            width={110}
            height={20}
            className="w-[104px] h-[16px] lg:w-[124px] xl:w-[179px] lg:h-[28px]"
          />
          <Image
            src="/svgs/grey_logos/first_central.svg"
            alt=""
            width={110}
            height={20}
            className="w-[88px] h-[16px] lg:w-[124px] xl:w-[221px] lg:h-[40px]"
          />
        </div>
      </Marque>
    </div>
  );
}
