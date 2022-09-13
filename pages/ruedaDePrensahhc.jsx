import Head from 'next/head';
import Image from 'next/image';
import React from 'react';
import Footer from '../components/Footer';
import Formulario from '../components/Formulario';
import Nav from '../components/Nav';
import styles from '../styles/rueda.module.scss';
import Hhc from '../img/hhc.png';
import Corredor from '../img/RUEDA_DE_PRENSA.png';
function ruedaDePrensa() {
  return (
    <>
      <Head>
        <title>Rally Apoyándote® | Rueda de prensa hhc</title>
        <meta name='description' content='Rally Apoyandote® Eisai' />
        <link rel='icon' href='/icon.png' />
        <meta property='og:image' content='/portada.png' />
        <meta property='og:title' content='Rally Apoyandote® Eisai' />
        <meta property='og:description' content='Rally Apoyandote® Eisai' />
        <meta property='og:image:width' content='768' />
        <meta property='og:image:height' content='768' />
      </Head>
      <Nav />
      <section data-aos='fade-in' className={styles.ruedaDePrensa}>
        <div className={styles.contendorRueda}>
          <div className={styles.contenedorTexto}>
            <div className={styles.col}>
              <h1 className={styles.textGradient}>Rueda de prensa hhc</h1>
              <br />
              <Image
                src={Hhc}
                alt='hhc'
                className={styles.hhc}
                width='95px'
                height='39px'
              />
              <br />
              <p className={styles.inicio}>
                En <span className={styles.rosa}>Eisai</span>, cada uno de
                nosotros está comprometido con los mejores intereses de los
                pacientes, sus familias y el público en general.
              </p>
              <p>
                La esencia de estas convicciones se expresa mejor en una sola
                frase{' '}
                <span className={styles.azul}>
                  “cuidado de la salud humana”,
                </span>{' '}
                o{' '}
                <span className={styles.azul}>
                  <i>“hhc”</i>
                </span>
                .
              </p>
              <p>
                Uno de los propósitos centrales de EI{' '}
                <span className={styles.rosa}>(Innovación Eisai)</span> es
                fortalecer el sentido de solidaridad -que todos estamos en el
                mismo barco en Eisai. Cada uno de nosotros es una parte del
                destino del grupo Eisai.{' '}
              </p>
              <p>
                Las actividades{' '}
                <span className={styles.azul}>
                  <i>hhc </i>
                </span>{' '}
                no son simplemente objetivos para expandir las ventas o
                incrementar las utilidades también deben funcionar como fuentes
                de motivación para revitalizar nuestra organización y
                transformarla en una compañía respetada por la sociedad.{' '}
              </p>

              <div className={styles.hhcManager}>
                <div className={styles.titulo}>
                  <h2>Xilace Díaz</h2>
                  <p>HHC Manager</p>
                </div>
               
                  <Image
                    src={Corredor}
                    alt='hhc'
                    className={styles.hhcimg}
                    width={199}
                    height={158}
                  />
              
              </div>
            </div>
            <div className={styles.col}>
              <Formulario />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default ruedaDePrensa;
