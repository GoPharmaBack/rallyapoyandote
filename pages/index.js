import Head from 'next/head';
//import Image from 'next/image';
import styles from '../styles/Home.module.scss';
import Link from 'next/link';

export default function Home() {
  return (
    <div data-aos='fade-in' className={styles.container}>
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
      <main className={styles.main}>
        <div className={styles.contenedor}>
          <h1 className={styles.textGradient}>
            Nuestra meta:
            <br /> el cuidado de la
            <br /> salud humana
          </h1>
          <div className={styles.botonesHome}>
            <Link href='/rallyapoyandote'>
              <p className={styles.boton}>
                RALLY APOYÁNDOTE<sup>®</sup>{' '}
              </p>
            </Link>
            <Link href='/pits'>
              <p className={styles.boton}>PITS</p>
            </Link>
            <Link href='/coaching'>
              <p className={styles.boton}>COACHING</p>
            </Link>
            <Link href='/pilotos'>
              <p className={styles.boton}>PILOTOS</p>
            </Link>
            <Link href='/resultados'>
              <p className={styles.boton}>RESULTADOS</p>
            </Link>
            <Link href='/ruedaDePrensahhc'>
              <p className={styles.boton}>RUEDA DE PRENSA HHC</p>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
}
