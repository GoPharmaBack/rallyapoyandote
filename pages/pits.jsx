import Image from 'next/image';
import React from 'react';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import styles from '../styles/pits.module.scss';
import Link from 'next/link';
function pits() {
  return (
    <>
      <Nav />
      <section className={styles.section}>
        <div className={styles.contenedor}>
          <div className={styles.selector}>
            <h1>Escoge la marca de la que requieras un material </h1>
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
