import React from 'react';
import Image from 'next/image';

export default function Index() {
  return (
    <div className="flex justify-center my-10">
      <a
        target="_blank"
        href="https://play.google.com/store/apps/details?id=com.betascore.betascore&pcampaignid=web_sha"
      >
        <Image
          src="/images/applestore_button.png"
          alt=""
          className="w-[165px] h-[50px] xl:w-[238px] xl:h-[72px] mr-4"
          width={238}
          height={72}
        />
      </a>
      <a
        target="_blank"
        href="https://play.google.com/store/apps/details?id=com.betascore.betascore&pcampaignid=web_sha"
      >
        <Image
          src="/images/playstore_button.png"
          alt=""
          className="w-[165px] h-[50px] xl:w-[238px] xl:h-[72px] "
          width={238}
          height={72}
        />
      </a>
    </div>
  );
}
