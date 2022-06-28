import React from 'react';
import Image from 'next/image';
import styles from '../styles/Home.module.scss';
function Footer() {
  return (
    <>
      <footer className={styles.footer}>
        <span className={styles.logo}>
          <Image
            src='/logos.png'
            alt='Rally Apoyandote®'
            width={344.75}
            height={46}
          />
        </span>
      </footer>
    </>
  );
}

export default Footer;
