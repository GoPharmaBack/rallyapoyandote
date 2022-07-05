import Head from 'next/head'
import React from 'react'
import Footer from '../components/Footer'
import Nav from '../components/Nav'

function envivo() {
  return (
    <div>
      
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
      <Nav />
      <section className={styles.envivo}>
        <div className={styles.envivoContenedor}>
          <div className='texto'>
            <div className={styles.envivoHead}>
             
            </div>
          </div>
          </div>
      </section>
    <Footer />
    </div>
  )
}

export default envivo