import { useEffect } from 'react';
import AOS from 'aos';

import 'aos/dist/aos.css';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      once: true,
      offset: 50,
      throttleDelay: 30,
    });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
