import React from 'react';
import Image from 'next/image';
import Marque from 'react-fast-marquee';

export default function Index() {
  return (
    <div className="text-center bg-b-grey-500 mx-auto pb-10 xl:pb-[90px]">
      <p className="text-b-black-grey font-semibold py-11">
        TRUSTED BY MERCHANTS AND BUSINESSES
      </p>

      <Marque>
        <div className="w-full relative flex justify-start items-center gap-10 lg:gap-20 xl:gap-32  px-10">
          <Image
            src="/svgs/grey_logos/okra.svg"
            alt=""
            className="w-[62px] h-[24px] lg:w-[124px] xl:w-[224px] lg:h-[80px]"
            width={84}
            height={30}
          />
          <Image
            src="/svgs/grey_logos/barclays.svg"
            alt=""
            width={106}
            height={18}
            className="w-[94px] h-[16px] lg:w-[124px] xl:w-[351px] lg:h-[59px]"
          />
          <Image
            src="/svgs/grey_logos/equifax.svg"
            alt=""
            className="w-[88px] h-[16px] lg:w-[124px] xl:w-[337px] lg:h-[61px]"
            width={106}
            height={18}
          />
          <Image
            src="/svgs/grey_logos/mono.svg"
            alt=""
            width={110}
            height={20}
            className="w-[104px] h-[16px] lg:w-[124px] xl:w-[317px] lg:h-[49px]"
          />
          <Image
            src="/svgs/grey_logos/first_central.svg"
            alt=""
            width={110}
            height={20}
            className="w-[88px] h-[16px] lg:w-[124px] xl:w-[391px] lg:h-[72px]"
          />
        </div>
      </Marque>
    </div>
  );
}
