import Head from 'next/head'
import React from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import styles from '../styles/envivo.module.scss';
import ProgressBar from '../components/ProgressBar';


function envivo({ pilotos }) {
  
  console.log(pilotos);

  return (
    <div>

      <Head>
        <title>Rally Apoyándote® | En vivo</title>
        <meta name='description' content='Rally Apoyandote® Eisai' />
        <link rel='icon' href='/icon.png' />
        <meta property='og:image' content='/portada.png' />
        <meta property='og:title' content='Rally Apoyandote® Eisai' />
        <meta property='og:description' content='Rally Apoyandote® Eisai' />
        <meta property='og:image:width' content='768' />
        <meta property='og:image:height' content='768' />
      </Head>
      <Nav />
      <section data-aos='fade-in' className={styles.envivo}>
        <div className={styles.envivoContenedor}>
          <h1 className={styles.textGradient}>
            EN VIVO
          </h1>
          <div className={styles.contenedorBarras}>
            {pilotos
              .sort((a, b) => b.totalPacientes - a.totalPacientes)
              .map((item, idx) => (
              <ProgressBar key={idx} bgcolor={item.bgcolor} totalPacientes={item.totalPacientes} number={item.number} name={item.name} carImage={item.carImage}  />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}



export default envivo


export const getServerSideProps = async (ctx) => { 
  const res = await fetch('https://rallyapoyandote.eisaiconnect.com.mx/api/pilotos')
  const pilotos = await res.json()
  
  console.log(pilotos);
  return {
    props: { pilotos}
  }
}