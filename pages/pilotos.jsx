import Image from 'next/image';
import React from 'react'
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import styles from '../styles/corredores.module.scss';
import Corredores from '../img/corredores.png';

import Head from 'next/head';
import Link from 'next/link';

function pilotos({ pilotos }) {
  return (
    <>
        <Head>
        <title>Rally Apoyándote® | Pilotos</title>
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
            <h1 className={styles.textGradient}>PILOTOS</h1>
          </div>

          

          <div className={styles.corredoresContenedor}>
              
          {
              pilotos
                .sort((a, b) => a.number.localeCompare(b.number))
                .map((item, idx) => (
                  <Link key={idx} href={`/piloto/${item._id}`}>
                    <a  className={styles.fondo}>
                    <div   >
                <div className={styles.corredor}>
                    <div className={styles.puntos}> <span>{ item.points}</span>
                <p>PTS</p>
                </div>
                <div className={styles.name}>
                  <h3>{item.number}</h3>
                  <p>{item.name}</p>
                </div>
                <Image
                  src={item.image}
                  alt={item.image}
                  width={"95%"}
                  height={120}
                  className={styles.corredorImg}
                />
                  </div>
                  </div>
                    </a>
                  </Link>
              ))
            }
        </div>

          
          
          </div>

      </section>
      <Footer/>
    </>
  )
}

export default pilotos



export const getServerSideProps = async (ctx) => { 
  const res = await fetch('https://rallyapoyandote.eisaiconnect.com.mx/api/pilotos')
  const pilotos = await res.json()
  
  console.log(pilotos);
  return {
    props: { pilotos}
  }
}