import Head from 'next/head'
import React from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import styles from '../styles/envivo.module.scss';
import ProgressBar from '../components/ProgressBar';

const RaceData = [
  { bgcolor: "#F0BFE0", totalPacientes: 5, carImage: "/lalocarro.png", name: "110 Lalo" },
  { bgcolor: "#E284C2", totalPacientes: 4, carImage: "/rosycarro.png", name: "107 Mago" },
  { bgcolor: "#D74EA4", totalPacientes: 30, carImage: "/CARROMARIA.png", name: "103 María" },
  { bgcolor: "#9FDDEF", totalPacientes: 80, carImage: "/rosycarro.png", name: "102 Rosy" },
  { bgcolor: "#55BEE0", totalPacientes: 60, carImage: "/CARROANABEL.png", name: "104 Anabel" },
  { bgcolor: "#11A1D0", totalPacientes: 40, carImage: "/CARROHECTOR.png", name: "105 Héctor" },
];
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
      <section className={styles.envivo}>
        <div className={styles.envivoContenedor}>
          <h1 className={styles.textGradient}>
            EN VIVO
          </h1>
          <div className={styles.contenedorBarras}>
            {RaceData.map((item, idx) => (
              <ProgressBar key={idx} bgcolor={item.bgcolor} totalPacientes={item.totalPacientes} name={item.name} carImage={item.carImage}  />
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
  const res = await fetch('http://localhost:3000/api/pilotos')
  const pilotos = await res.json()
  
  console.log(pilotos);
  return {
    props: { pilotos}
  }
}