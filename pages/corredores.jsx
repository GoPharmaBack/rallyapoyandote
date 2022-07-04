import Image from 'next/image';
import React from 'react'
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import styles from '../styles/corredores.module.scss';
import Corredores from '../img/corredores.png';
import Corredor from '../img/corredor.png';
import Head from 'next/head';
function corredores() {
  return (
    <>
        <Head>
        <title>Rally Apoyándote® | Corredores</title>
        <meta name='description' content='Rally Apoyandote® Eisai' />
        <link rel='icon' href='/icon.png' />
        <meta property='og:image' content='/portada.png' />
        <meta property='og:title' content='Rally Apoyandote® Eisai' />
        <meta property='og:description' content='Rally Apoyandote® Eisai' />
        <meta property='og:image:width' content='768' />
        <meta property='og:image:height' content='768' />
      </Head>
      <Nav />
      <section className={styles.corredores}>
        <div className={styles.contendor}>
          <div className={styles.corredoresHead}>
            <Image
              src={Corredores}
              alt='Rally Apoyandote®'
              width={66}
              height={66}
              className={styles.imgHead}

            />
            <h1 className={styles.textGradient}>CORREDORES</h1>
          </div>
          <div className={styles.corredoresContenedor}>
            <div className={styles.corredor}>
              <div className={styles.puntos}> <span>0</span>
              <p>PTS</p>
              </div>
              <div className={styles.name}>
                <h3>102</h3>
                <p>Rosy</p>
              </div>
              <Image
                src={Corredor}
                alt='Rally Apoyandote®'
                width={"100%"}
                height={120}
                className={styles.corredorImg}
              />
            </div>
            <div className={styles.corredor}>
              <div className={styles.puntos}> <span>0</span>
              <p>PTS</p>
              </div>
              <div className={styles.name}>
                <h3>103</h3>
                <p>María</p>
              </div>
              <Image
                src={Corredor}
                alt='Rally Apoyandote®'
               width={"100%"}
                height={120}
                className={styles.corredorImg}
              />
            </div>
            <div className={styles.corredor}>
              <div className={styles.puntos}> <span>0</span>
              <p>PTS</p>
              </div>
              <div className={styles.name}>
                <h3>104</h3>
                <p>Anabel</p>
              </div>
              <Image
                src={Corredor}
                alt='Rally Apoyandote®'
               width={"100%"}
                height={120}
                className={styles.corredorImg}
              />
            </div>
            <div className={styles.corredor}>
              <div className={styles.puntos}> <span>0</span>
              <p>PTS</p>
              </div>
              <div className={styles.name}>
                <h3>105</h3>
                <p>Héctor</p>
              </div>
              <Image
                src={Corredor}
                alt='Rally Apoyandote®'
               width={"100%"}
                height={120}
                className={styles.corredorImg}
              />
            </div>
            <div className={styles.corredor}>
              <div className={styles.puntos}> <span>0</span>
              <p>PTS</p>
              </div>
              <div className={styles.name}>
                <h3>107</h3>
                <p>Mago</p>
              </div>
              <Image
                src={Corredor}
                alt='Rally Apoyandote®'
               width={"100%"}
                height={120}
                className={styles.corredorImg}
              />
            </div>
            <div className={styles.corredor}>
              <div className={styles.puntos}> <span>0</span>
              <p>PTS</p>
              </div>
              <div className={styles.name}>
                <h3>110</h3>
                <p>Lalo</p>
              </div>
              <Image
                src={Corredor}
                alt='Rally Apoyandote®'
               width={"100%"}
                height={120}
                className={styles.corredorImg}
              />
            </div>

          </div>
</div>
      </section>
      <Footer/>
    </>
  )
}

export default corredores