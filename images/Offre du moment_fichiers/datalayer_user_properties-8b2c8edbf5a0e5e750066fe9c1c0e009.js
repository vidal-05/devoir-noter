$( document ).ready(function() {
  if (typeof drupalSettings.ga4 !== "undefined") {
    window.dataLayer = window.dataLayer || []; dataLayer.push({'user_id' : drupalSettings.ga4.user_id, 'user_status' : drupalSettings.ga4.user_status, 'user_formule' : drupalSettings.ga4.user_formule, 'user_options' : drupalSettings.ga4.user_options, 'user_last_entry_date' : drupalSettings.ga4.last_entry_date,'user_last_club' : drupalSettings.ga4.last_entry_club});
    (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
    new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
    j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
    'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
    })(window,document,'script','dataLayer','GTM-KSFPP5Q');
  }
});