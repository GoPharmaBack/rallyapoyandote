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
       
      </main>
      
      <footer className={styles.footer}>
      <span className={styles.logo}>
            <Image src='/logos.png' alt='Vercel Logo' width={344.75} height={46} />
          </span>
      </footer>
    </div>
  );
}
