import Image from 'next/image';
import React from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import styles from '../styles/coaching.module.scss';
import CoachingA from '../img/coachingA.png';
import logo from '../img/logo.png';
function coaching() {
  return (
    <>
      <Nav />
      <section className={styles.coaching}>
        <div className={styles.coachingContenedor}>
          <div className='texto'>
            <h2>COACHING</h2>
           
            <p>¡Has venido al lugar adecuado!<br />
              Para <span>conocer a profundidad</span> la <span>estrategia </span><br />
              que tenemos para <span>triunfar</span> en
            </p>
            <Image
              src={logo}
              alt='Rally Apoyandote®'
              width={170}
              height={50}
              className={styles.logoNav}
            />
          </div>
          <div className={styles.botoneCoaching}>
            <div className={styles.card1}>
              <Image
                src={CoachingA}
                alt='coaching1'
                className={styles.coachingImagen}
                width='267px'
                height='331px'
              />
              <div className={styles.coachingTexto}>
                <h3>
                  <span>Carlos</span> Gavira
                </h3>
                <p>ASSOCIATE DIRECTOR OF MARKETING</p>
              </div>
            </div>
            <div className={styles.card2}>
              <Image
                src={CoachingA}
                alt='coaching1'
                className={styles.coachingImagen}
                width='267px'
                height='331px'
              />
              <div className={styles.coachingTexto}>
                <h3>Xochitl Gomez</h3>
                <p>MEDICAL DIRECTOR</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default coaching;
