import Image from 'next/image'
import React from 'react'
import Nav from '../components/Nav'
import Resultados from '../img/resultados.png'
import styles from '../styles/resultados.module.scss';
function resultados() {
  return (
    <>
      
      <Nav />
      <section className={styles.resultados}>
        <div className={styles.resultadosContenedor}>
          <div className='texto'>
            <div className={styles.resultadosHead}>
              <Image
                src={Resultados}

                alt='CoachingImg '
                className={styles.logo}
                width='86px'
                height='86px'
              />
              <div className={styles.texto}>
              <h1 className={styles.textGradient}>RESULTADOS</h1>
              <h2 className={styles.textGradient}>PROXIMAMENTE</h2>
             </div>
            </div>
          </div>
          </div>
          
      </section>
    </>
  )
}

export default resultados