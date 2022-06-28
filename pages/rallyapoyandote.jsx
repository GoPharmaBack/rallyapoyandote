import Head from 'next/head';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Image from 'next/image';
import Mapa from '../img/mapa.png';
import styles from '../styles/RA.module.scss';
function rallyapoyandote() {
  return (
    <div>
      <Head>
        <title>Rally Apoyandote®</title>
        <meta name='description' content='Rally Apoyandote®' />
        <link rel='icon' href='/icon.png' />
        <meta property='og:image' content='/portada.png' />
        <meta property='og:title' content='Rally Apoyandote® Eisai' />
        <meta property='og:description' content='Rally Apoyandote® Eisai' />
        <meta property='og:image:width' content='768' />
        <meta property='og:image:height' content='768' />
      </Head>
      <Nav />
      <section className={styles.rallyapoyandote}>
        <div className={styles.contenedor}>
          <Image
            src={Mapa}
            alt='Rally Apoyandote®'
            className={styles.mapa}
            width="500px"
            height="285.41"
            
          />
          <div className={styles.contenedorTexto}>
            <h2 className={styles.header}>¡HOLA, PILOTO!</h2>
            <p>
              Bienvenido al  
              <span style={{marginLeft:"3px"}}>
                 RALLY MÉXICO APOYANDOTE<sup>®</sup>,
              </span>
              <br /> a continuación te contamos todo sobre esta gran carrera:
            </p>
            <p>
              <span className={styles.numero}>1.BASES:</span> en esta sección podrás seguir tu
              puntuación, se te otorgará un <span>punto por cada paciente</span>
              que integres al programa.
            </p>
            <p>
              <span className={styles.numero}>2.COACHING:</span> si necesitas
              <span>apoyo y entrenamientos específico</span> podrás ponerte en
              contacto con nuestros grandes <span>coaches,</span> expertos en el
              programa, en esta sección.
            </p>
            <p>
              <span className={styles.numero}>3.PITS:</span> en esta sección podrás seguir tu puntuación,
              se te otorgará un <span>punto por cada paciente</span> que
              integres al programa.
            </p>
            <p>
              <span className={styles.numero}>4.RESULTADOS:</span> en esta sección podrás seguir tu puntuación,
              se te otorgará un <span>punto por cada paciente</span> que
              integres al programa.
            </p>

            <p>
              <span>Muchas gracias,pilotos,</span> <br />
              por ser parte de eta gran carrera,
              <br />
              <span>RALLY MÉXICO APOYÁNDOTE</span>
            </p>
          </div>
        </div>
      </section>
      <Footer/>
    </div>
  );
}

export default rallyapoyandote;
