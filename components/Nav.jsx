import Image from 'next/image';
import Logo from '../img/logo.png';
import styles from '../styles/Navbar.module.scss';
import Link from 'next/link'
function Nav() {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.contenedorNav}>
      
            <Image
              src={Logo}
              alt='Rally Apoyandote®'
              width={170}
              height={50}
              className={styles.logoNav}
            />
         
          
          <div className={styles.menu}>
            <ul>
              <Link href='/rallyapoyandote'>
                <li className={styles.item}>RALLY APOYÁNDOTE<sup>®</sup>  </li>
              </Link>
              <Link href='/pits'>
                <li className={styles.item}>PITS</li>
              </Link>
              <Link href='/coaching'>
                <li className={styles.item}>COACHING</li>
              </Link>
              <Link href='/corredores'>
                <li className={styles.item}>CORREDORES</li>
              </Link>
              <Link href='/resultados'>
                <li className={styles.item}>RESULTADOS</li>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Nav;
