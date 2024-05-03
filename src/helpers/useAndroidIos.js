import React, { useEffect, useState } from 'react';

export default function useAndroidIos() {
  const [agent, setAgent] = useState('unknown');
  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    // Windows Phone must come first because its UA also contains "Android"
    if (/windows phone/i.test(userAgent)) {
      return setAgent('Windows Phone');
    }

    if (/android/i.test(userAgent)) {
      return setAgent('Android');
    }

    // iOS detection from: http://stackoverflow.com/a/9039885/177710
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      return setAgent('iOS');
    }

    return () => {};
  }, []);

  let appLink = '';
  if (agent === 'iOS') {
    appLink = 'https://apps.apple.com/gb/app/ndewo/id1662882346';
  } else {
    appLink =
      'https://play.google.com/store/apps/details?id=com.betascore.betascore&pcampaignid=web_sha';
  }

  return [agent, appLink];
}
