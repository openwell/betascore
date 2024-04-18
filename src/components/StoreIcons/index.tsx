import React from 'react';
import Image from 'next/image';

export default function Index() {
  return (
    <div className="flex">
      <a
        target="_blank"
        href="https://play.google.com/store/apps/details?id=com.betascore.betascore&pcampaignid=web_sha"
      >
        <Image
          src="/images/app_store.png"
          alt=""
          width={40}
          height={40}
          className="mr-4"
        />
      </a>
      <a
        target="_blank"
        href="https://play.google.com/store/apps/details?id=com.betascore.betascore&pcampaignid=web_sha"
      >
        <Image src="/images/play_store.png" alt="" width={40} height={40} />
      </a>
    </div>
  );
}
