import Nav from 'components/Nav';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';
import styles from '/styles/pilotos.module.scss';
import { BsArrowLeft } from 'react-icons/bs';
import Footer from 'components/Footer';
function PilitoView({ piloto }) {
  const { bgcolor } = piloto;
  const fillerStyles = {
    height: '100%',
    width: `100%`,
    background: `linear-gradient(to bottom, #fff 50%, ${bgcolor} 100%)`,
    textAlign: 'right',
    boxShadow: '0px 3px 13px #4241415e',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  };
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
      <section data-aos='fade-in' className={styles.piloto}>
        <div className={styles.back}>
          <Link href='/pilotos'>
            <span>
              {' '}
              <BsArrowLeft className={styles.backArrow} />
              Regresar
            </span>
          </Link>
        </div>
        <div data-aos='fade-in' className={styles.contenedor}>
          <div className='col'>
            <div className={styles.card}>
              <div style={fillerStyles} className={styles.top}>
                <span className={styles.shadow}>{piloto.number}</span>
                <figure>
                  <img src={piloto.image} alt={piloto.name} />
                </figure>
              </div>
              <div className={styles.bottom}>
                <h1>{piloto.name}</h1>
              </div>
            </div>
          </div>
          <div className='col'>
            <ul className='datos'>
              <li>
                <span>Equipo</span> {piloto.team}
              </li>
              <li>
                <span>País</span> {piloto.country}
              </li>
              <span>Pacientes Halaven</span>
              <ul>
                <li>item1</li>
                <li>item2</li>
              </ul>
              <span>Pacientes Levinxi</span>
              <ul>
                <li>item1</li>
                <li>item2</li>
              </ul>
            </ul>
          </div>
          <div className='col'>
            <div className='resultados'>
              <h2>{piloto.points}</h2>
              <span>PTS</span>
            </div>
          </div>
        </div>
        <div className='imagen-carro'>
          <Image
            style={{ maxWidth: '600px' }}
            src={piloto.carImage}
            alt={piloto.name}
            width={600}
            height={150}
          />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default PilitoView;

export const getServerSideProps = async (ctx) => {
  const res = await fetch(
    'https://rallyapoyandote.eisaiconnect.com.mx/api/pilotos/' + ctx.query.id
  );
  const piloto = await res.json();

  console.log(piloto);
  return {
    props: { piloto },
  };
};
