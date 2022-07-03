import Image from 'next/image';
import React from 'react';
import Nav from '../components/Nav';
import styles from '../styles/pits.module.scss';
import Invitaciones from '../img/invitacion.svg';
import Pits from '../img/pits.svg';
import Link from 'next/link';
import Footer from '../components/Footer';
function pitsLenvatinib() {
  return (
    <>
      <Nav />
      <div className={styles.back}>
          <Link href="/pits">Regresar</Link>
        </div>
      <section className={styles.section}>
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
              <h1 className={styles.textGradient}>PITS ERIBULINA</h1>
            </div>
            
          </div>
            <h2 style={{textAlign:'center'}}>
              <span className={styles.rosa}>¿Has venido por más herramientas?</span><br />
              <span className={styles.azul}> 
                Elige los materiales</span><br /> que
              necesitas para esta gran carrera
            </h2>
          </div>
          <div className={styles.botones}>
            <div className={styles.botonr}>
              <a href='/static/brand-resources/Brand-Icons.zip' download>
                Invitaciones pacientes
                <Image
                  src={Invitaciones}
                  alt='Invitaciones pacientes'
                  className={styles.mapa}
                  width='500px'
                  height='285.41'
                />
              </a>
            </div>
            <div className={styles.boton}>
              <a href='/static/brand-resources/Brand-Icons.zip' download>
                Invitaciones pacientes
                <Image
                  src={Invitaciones}
                  alt='Invitaciones pacientes'
                  className={styles.mapa}
                  width='500px'
                  height='285.41'
                />
              </a>
            </div>
            <div className={styles.boton}>
              <a href='/static/brand-resources/Brand-Icons.zip' download>
                Invitaciones pacientes
                <Image
                  src={Invitaciones}
                  alt='Invitaciones pacientes'
                  className={styles.mapa}
                  width='500px'
                  height='285.41'
                />
              </a>
            </div>
            <div className={styles.botonr}>
              <a href='/static/brand-resources/Brand-Icons.zip' download>
                Invitaciones pacientes
                <Image
                  src={Invitaciones}
                  alt='Invitaciones pacientes'
                  className={styles.mapa}
                  width='500px'
                  height='285.41'
                />
              </a>
            </div>
          </div>
        </div>
      </section>
      <Footer/>
    </>
  );
}

export default pitsLenvatinib;
