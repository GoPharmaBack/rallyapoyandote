import Image from 'next/image';
import React from 'react';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import styles from '../styles/coaching.module.scss';
import CoachingA from '../img/coachingA.png';
import logo from '../img/logo.png';
import CoachingImg from '../img/coaching.png';
import Head from 'next/head';
import Charlie from '../img/CHARLIE.png';
import Xochitl from '../img/XOCHITL.png';

function Coaching() {
  const Mailto = ({ email, subject = '', body = '', children }) => {
    let params = subject || body ? '?' : '';
    if (subject) params += `subject=${encodeURIComponent(subject)}`;
    if (body) params += `${subject ? '&' : ''}body=${encodeURIComponent(body)}`;

    return <a href={`mailto:${email}${params}`}>{children}</a>;
  };
  return (
    <>
      <Nav />
      <Head>
        <title>Rally Apoyándote® | Coaching</title>
        <meta name='description' content='Rally Apoyandote® Eisai' />
        <link rel='icon' href='/icon.png' />
        <meta property='og:image' content='/portada.png' />
        <meta property='og:title' content='Rally Apoyandote® Eisai' />
        <meta property='og:description' content='Rally Apoyandote® Eisai' />
        <meta property='og:image:width' content='768' />
        <meta property='og:image:height' content='768' />
      </Head>
      <section className={styles.coaching}>
        <div className={styles.coachingContenedor}>
          <div className='texto'>
            <div className={styles.coachingHead}>
              <Image
                src={CoachingImg}
                alt='CoachingImg '
                className={styles.logo}
                width='86px'
                height='86px'
              />
              <h1 className={styles.textGradient}>COACHING</h1>
            </div>

            <p>
              <span className={styles.rosa}>
                ¡Has venido al lugar adecuado!
              </span>
              <br />
              Para <span className={styles.azul}>
                conocer a profundidad
              </span> la <span className={styles.azul}>estrategia </span>
              <br />
              que tenemos para <span className={styles.azul}>triunfar</span> en
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
            <Mailto
              email='carlos_gavira@eisai.com'
              subject='Hola, quiero agendar una sesion de Coaching'
              body='Hola Carlos, me gustaría agendar una sesion de coaching'>
            
              <div className={styles.card1}>
                <Image
                  src={Charlie}
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
            </Mailto>
            <Mailto
              email='xochitl_gomez@eisai.com'
              subject='Hola, quiero agendar una sesion de Coaching'
              body='Hola Dra. Xochitl, me gustaría agendar una sesion de coaching'>
            
            <div className={styles.card2}>
              <Image
                src={Xochitl}
                alt='coaching1'
                className={styles.coachingImagen}
                width='267px'
                height='331px'
              />
              <div className={styles.coachingTexto}>
                <h3>Xóchitl Gómez</h3>
                  <p>MEDICAL DIRECTOR</p>
                  
              </div>
            </div>
            </Mailto>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Coaching;
