import Image from 'next/image';
import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import styles from '../styles/pits.module.scss';
import Link from 'next/link';
import Pits from '../img/pits.svg';
function pits() {
  return (
    <>
      <Nav />
      <section className={styles.section}>
        <div className={styles.contenedor}>
          <div className={styles.selectorhead}>
            <div className={styles.iconHead}>
            <Image
                  src={Pits}
                  alt='Pits'
                  className={styles.pits}
                  width='100px'
                  height='100px'
                />
              <h2 className={styles.textGradient}>PITS</h2>
            </div>
            <h2>Escoge la marca de la que requieras un material </h2>
          </div>
          <div className={styles.selector}>
            <Link href='/pitsLenvatinib'>
              <div className={styles.selectorItemr}>Lenvatinib</div>
            </Link>
            <Link href='/pitsEribulina'>
              <div className={styles.selectorItema}>Eribulina</div>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default pits;
