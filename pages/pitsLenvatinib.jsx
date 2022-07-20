import Image from 'next/image';
import React from 'react';
import Nav from '../components/Nav';
import styles from '../styles/pits.module.scss';
import Invitaciones from '../img/invitacion.svg';
import Carta from '../img/carta.svg';
//import Material from '../img/material.svg';
import Ipps from '../img/ipps.svg';
import Pits from '../img/pits.svg';
import Link from 'next/link';
import Footer from '../components/Footer';
import { BsArrowLeft } from 'react-icons/bs';
import Head from 'next/head';
function pitsLenvatinib() {
  return (
    <>
        <Head>
        <title>Rally Apoyándote® | Pits Levantinib</title>
        <meta name='description' content='Rally Apoyandote® Eisai' />
        <link rel='icon' href='/icon.png' />
        <meta property='og:image' content='/portada.png' />
        <meta property='og:title' content='Rally Apoyandote® Eisai' />
        <meta property='og:description' content='Rally Apoyandote® Eisai' />
        <meta property='og:image:width' content='768' />
        <meta property='og:image:height' content='768' />
      </Head>
      <Nav />
      <section data-aos='fade-in' className={styles.section}>
      <div className={styles.back}>
        <Link href="/pits">
        <p> < BsArrowLeft className={styles.backArrow} />
          Regresar</p>
        </Link>
        </div>

        <div className={styles.contenedorl}>
          <div className={styles.texto}>
            <div className={styles.selectorhead}>
              <div className={styles.iconHead}>
                <Image
                  src={Pits}
                  alt='Pits'
                  className={styles.pits}
                  width='100px'
                  height='100px'
                />
                <h1 className={styles.textGradient}>PITS LEVANTINIB</h1>
              </div>
            </div>
            <h2 style={{ textAlign: 'center', fontSize: '1.3rem' }}>
              <span className={styles.rosa}>
                ¿Has venido por más herramientas?
              </span>
              <br />
              <span className={styles.azul}>Elige los materiales</span>
              <br /> que necesitas para esta gran carrera
            </h2>
          </div>
          <div className={styles.botones}>
            <div className={styles.botonr}>
              <a href='/Digital_InvitacionPaciente_Lenvatinib.pdf' download>
                Invitaciones pacientes
                <Image
                  src={Invitaciones}
                  alt='Invitaciones pacientes'
                  className={styles.mapa}
                  width='60px'
                  height='60px'
                />
              </a>
            </div>
            <div className={styles.boton}>
              <a href='/Digital_InformacionProgramaMedico.pdf' download>
                CARTA A MEDICOS
                <Image
                  src={Carta}
                  alt='Invitaciones pacientes'
                  className={styles.mapa}
                  width='60px'
                  height='60px'
                />
              </a>
            </div>
            {/* <div className={styles.boton}>
              <a href='/static/brand-resources/Brand-Icons.zip' download>
               MATERIAL MÉDICO
                <Image
                  src={Material}
                  alt='Invitaciones pacientes'
                  className={styles.mapa}
                  width='60px'
                  height='60px'
                />
              </a>
            </div> */}
            <div className={styles.botonr}>
              <a href='/10_IPPA_LENVIXI_EISAI.pdf' download>
                ipp
                <Image
                  src={Ipps}
                  alt='Invitaciones pacientes'
                  className={styles.mapa}
                  width='60px'
                  height='60px'
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default pitsLenvatinib;
