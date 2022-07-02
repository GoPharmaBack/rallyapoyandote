import Image from 'next/image';
import React from 'react';
import Nav from '../components/Nav';
import styles from '../styles/pits.module.scss';
import Invitaciones from '../img/invitacion.svg';
function pitsLenvatinib() {
  return (
    <>
      <Nav />
      <section className={styles.section}>
        <div className={styles.contenedorl}>
          <div className={styles.texto}>
            <div className={styles.textoImg}>
              <h1>Pits</h1>
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
    </>
  );
}

export default pitsLenvatinib;
