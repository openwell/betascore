'use client';
import Script from 'next/script';

const GTM_ID = 'GTM-M452H5G7';
export const GTMScript = () => {
  return (
    <>
      <Script
        id="gtm-init-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${GTM_ID}');`,
        }}
      />
    </>
  );
};

export const GTMNoScript = () => {
  return (
    <noscript id="gtm-init-no-script">
      <iframe
        src="https://www.googletagmanager.com/ns.html?id=GTM-M452H5G7"
        height="0"
        width="0"
        style={{ display: 'none', visibility: 'hidden' }}
      />
    </noscript>
  );
};
