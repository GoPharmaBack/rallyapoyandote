import React from 'react'
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import styles from '../styles/rueda.module.scss';
function ruedaDePrensa() {
  return (
    <>
    <Nav  />
      <section className={styles.ruedaDePrensa}>
        <div className={styles.contendorRueda}>
          <h1 className={styles.textGradient}>
            Rueda de prensa hhc
          </h1>
        </div>
      </section>
  <Footer/>
    </>
  )
}

export default ruedaDePrensa