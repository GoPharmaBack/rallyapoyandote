import Head from 'next/head'
import React from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import styles from '../styles/envivo.module.scss';
import ProgressBar from '../components/ProgressBar';

const RaceData = [
  { bgcolor: "#F0BFE0", completed: 0, ruta: "/lalocarro.png", name: "110 Lalo" },
  { bgcolor: "#E284C2", completed: 0, ruta: "/rosycarro.png", name: "107 Mago" },
  { bgcolor: "#D74EA4", completed: 30, ruta: "/CARROMARIA.png", name: "103 María" },
  { bgcolor: "#9FDDEF", completed: 80, ruta: "/rosycarro.png", name: "102 Rosy" },
  { bgcolor: "#55BEE0", completed: 60, ruta: "/CARROANABEL.png", name: "104 Anabel" },
  { bgcolor: "#11A1D0", completed: 0, ruta: "/CARROHECTOR.png", name: "105 Héctor" },
];
function envivo() {

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
      <section className={styles.envivo}>
        <div className={styles.envivoContenedor}>
          <h1 className={styles.textGradient}>
            EN VIVO
          </h1>
          <div className={styles.contenedorBarras}>
            {RaceData.map((item, idx) => (
              <ProgressBar key={idx} bgcolor={item.bgcolor} completed={item.completed} name={item.name} ruta={item.ruta}  />
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  )
}

export default envivo