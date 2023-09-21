export const GTM_ID = 'GTM-M452H5G7';
export const pageView = (url) => {
  if (typeof window.dataLayer !== 'undefined') {
    if (window.location.hostname.includes('betascore.io')) {
      window.dataLayer.push({
        event: 'pageview',
        page: url,
      });
    }
  }
};
