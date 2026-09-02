// Google tag helpers. The tag itself is loaded once in app/layout.tsx; these
// wrappers keep the call sites typed and safe to run before gtag.js lands.
export const GA_MEASUREMENT_ID = "G-D2WTCHW6BH";
export const ADS_CONVERSION_ID = "AW-11058192048";

// Google Ads "Submit lead form" conversion action.
const LEAD_FORM_CONVERSION = `${ADS_CONVERSION_ID}/apV8CLjs4-wcELC9-pgp`;

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
  }
}

// Fired once the quote form submits successfully. This site has no separate
// "thank you" page, so the conversion is reported from the success state.
export function trackLeadFormConversion() {
  window.gtag?.("event", "conversion", {
    send_to: LEAD_FORM_CONVERSION,
    value: 1.0,
    currency: "USD",
  });
}
