import Head from 'next/head';
import Image from 'next/image'
import React from 'react'
import Nav from '../components/Nav'
import Resultados from '../img/resultados.png'
import styles from '../styles/resultados.module.scss';
function resultados() {
  return (
    <>
        <Head>
        <title>Rally Apoyándote®</title>
        <meta name='description' content='Rally Apoyandote® Eisai' />
        <link rel='icon' href='/icon.png' />
        <meta property='og:image' content='/portada.png' />
        <meta property='og:title' content='Rally Apoyandote® Eisai' />
        <meta property='og:description' content='Rally Apoyandote® Eisai' />
        <meta property='og:image:width' content='768' />
        <meta property='og:image:height' content='768' />
      </Head>
      <Nav />
      <section className={styles.resultados}>
        <div className={styles.resultadosContenedor}>
          <div className='texto'>
            <div className={styles.resultadosHead}>
              <Image
                src={Resultados}

                alt='CoachingImg '
                className={styles.logo}
                width='86px'
                height='86px'
              />
              <div className={styles.texto}>
              <h1 className={styles.textGradient}>RESULTADOS</h1>
              <h2 className={styles.textGradient}>PRÓXIMAMENTE</h2>
             </div>
            </div>
          </div>
          </div>
          
      </section>
    </>
  )
}

export default resultados