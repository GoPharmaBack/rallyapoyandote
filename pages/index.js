import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import Logo from '../public/logo.png';
export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rally Apoyandote®</title>
        <meta name='description' content='Rally Apoyandote® Eisai' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <Image src={Logo} alt='Rally Apoyandote®' width={296.54} height={78} />
        <h1 className={styles.title}>Bienvenid@ a Rally Apoyandote</h1>
      </main>
      a
      <footer className={styles.footer}>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'>
          Powered by{' '}
          <span className={styles.logo}>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}
