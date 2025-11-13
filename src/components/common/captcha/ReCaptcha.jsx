import { useEffect, useRef } from 'react';

const ReCaptcha = ({ onChange }) => {
  const siteKey = import.meta.env.VITE_RECAPTCHA_SITE_KEY;
  const isLoadedRef = useRef(false);

  useEffect(() => {
    if (!siteKey || isLoadedRef.current) return;

    const loadRecaptcha = () => {
      if (window.grecaptcha) {
        window.grecaptcha.ready(() => {
          window.grecaptcha.execute(siteKey, { action: 'login' }).then((token) => {
            onChange(token);
          });
        });
        return;
      }

      const script = document.createElement('script');
      script.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
      script.async = true;
      document.body.appendChild(script);

      script.onload = () => {
        window.grecaptcha.ready(() => {
          window.grecaptcha.execute(siteKey, { action: 'login' }).then((token) => {
            onChange(token);
          });
        });
      };
    };

    isLoadedRef.current = true;
    loadRecaptcha();
  }, [siteKey]);

  return null;
};

export default ReCaptcha;
