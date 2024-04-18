import React from 'react';
import Image from 'next/image';
import Marquee from 'react-fast-marquee';

export default function Index() {
  return (
    <div className="text-center bg-b-grey-500 mx-auto pb-[90px]">
      <p className="text-b-black-grey font-semibold py-11">
        TRUSTED BY MERCHANTS AND BUSINESSES
      </p>
      <Marquee>
        <div className="flex justify-center items-center flex-wrap gap-32 overflow-scroll">
          <Image
            src="/svgs/grey_logos/okra.svg"
            alt=""
            className="w-[62px] h-[24px] lg:w-[224px] lg:h-[80px]"
            width={84}
            height={30}
          />
          <Image
            src="/svgs/grey_logos/barclays.svg"
            alt=""
            width={106}
            height={18}
            className="w-[94px] h-[16px] lg:w-[351px] lg:h-[59px]"
          />
          <Image
            src="/svgs/grey_logos/equifax.svg"
            alt=""
            className="w-[88px] h-[16px] lg:w-[337px] lg:h-[61px]"
            width={106}
            height={18}
          />
          <Image
            src="/svgs/grey_logos/mono.svg"
            alt=""
            width={110}
            height={20}
            className="w-[104px] h-[16px] lg:w-[317px] lg:h-[49px]"
          />
          <Image
            src="/svgs/grey_logos/first_central.svg"
            alt=""
            width={110}
            height={20}
            className="w-[88px] h-[16px] lg:w-[391px] lg:h-[72px]"
          />
        </div>
      </Marquee>
    </div>
  );
}
