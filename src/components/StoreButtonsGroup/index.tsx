import React from 'react';
import Image from 'next/image';

export default function Index() {
  return (
    <div className="flex justify-center my-10">
      <a
        target="_blank"
        href="https://apps.apple.com/gb/app/ndewo/id1662882346"
      >
        <Image
          src="/images/applestore_button.png"
          alt=""
          className="w-[165px] h-[50px] xl:w-[205px] xl:h-[64px] mr-4"
          width={180}
          height={64}
        />
      </a>
      <a
        target="_blank"
        href="https://play.google.com/store/apps/details?id=com.betascore.betascore&pcampaignid=web_sha"
      >
        <Image
          src="/images/playstore_button.png"
          alt=""
          className="w-[165px] h-[50px] xl:w-[180px] xl:h-[64px] "
          width={180}
          height={64}
        />
      </a>
    </div>
  );
}
