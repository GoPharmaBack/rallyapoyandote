import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../styles/globals.scss';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    AOS.init({
      easing: 'ease-out-cubic',
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      offset: 50,
      duration: 500,
    });
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp;
