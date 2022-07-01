import Head from 'next/head';
import Nav from '../components/Nav';
import Footer from '../components/Footer';
import Image from 'next/image';
import Mapa from '../img/pista.gif';
import styles from '../styles/RA.module.scss';
import Link from 'next/link';
function rallyapoyandote() {
  return (
    <div>
      <Head>
        <title>Rally Apoyándote®</title>
        <meta name='description' content='Rally Apoyándote®' />
        <link rel='icon' href='/icon.png' />
        <meta property='og:image' content='/portada.png' />
        <meta property='og:title' content='Rally Apoyandote® Eisai' />
        <meta property='og:description' content='Rally Apoyandote® Eisai' />
        <meta property='og:image:width' content='768' />
        <meta property='og:image:height' content='768' />
      </Head>
      <Nav />
      <section className={styles.rallyapoyandote}>
        <div className={styles.contenedor}>
          <div className={styles.contenedorTexto}>
            <h2 className={styles.header}>¡HOLA, PILOTO!</h2>
            <p>
              Bienvenido al
              <span style={{ marginLeft: '3px' }}>
                RALLY MÉXICO APOYÁNDOTE<sup>®</sup>,
              </span>
              <br /> a continuación te contamos todo sobre esta gran carrera.
            </p>
            <p>
              Este circuito fue diseñado para ti, que eres un gran competidor y
              parte esencial de este equipo de alto rendimiento dentro de
              <span>EISAI.</span>{' '}
            </p>
            <p>
            Sabemos que te gustan los retos y que llegar a la meta es tú principal objetivo, por ello, como parte de esta iniciativa te invitamos a formar parte del:
              <span>
                RALLY MÉXICO APOYÁNDOTE<sup>®</sup>{' '}
              </span>
            </p>
            <br />
            <p>
              <span className={styles.numero}>Requisitos: </span>
            </p>
            <ol>
              <li>Actitud</li>
              <li>Compromiso</li>
              <li>Consistencia</li>
              <li>Estrategia</li>
              <li>Objetivos Claros</li>
              <li>¡Y beneficiar a muchos pacientes! </li>
            </ol>
          </div>
          <div className={styles.grupo}>
            <div className={styles.boton}>
              <Link href='/envivo'>En vivo</Link>
            </div>
            <small>Da clic y sigue la carrera en vivo</small>
            <br />
            <Image
              src={Mapa}
              alt='Rally Apoyandote®'
              className={styles.mapa}
              width='500px'
              height='285.41'
            />
          </div>
        </div>
        <div className={styles.contenedor}>
          <div className={styles.contenedorTexto}>
            <p>
              Lo único que tienes que hacer es ayudarnos a materializar el
              enfoque de nuestra misión <i>hhc</i> en donde
              <span>
                nuestro primer pensamiento es para los pacientes y sus familias,
                y para aumentar los beneficios que brinda la atención de la
                salud.
              </span>
            </p>
            <p>
              Por ello, te brindamos los Key Points de esta carrera para estar
              siempre en la <span>POLE POSITION </span>
            </p>
            <ol>
              <li>
                Promover con tus médicos el programa “Apoyándote” dándole a
                conocer los grandes beneficios de este valioso programa para
                pacientes.
              </li>
              <li>
                Sensibilizar al médico sobre la gran aportación de este programa
                para sus pacientes.
              </li>
              <li>
                Lograr la misión de ingresar constantemente a pacientes a través
                del médico. Cada paciente contará como un punto que te acerará a
                la gran meta.
              </li>
            </ol>
            <p>
              En este circuito contarás con expertos en el programa que te
              ayudarán a mejorar tus resultados por lo que podrás buscar un
              warm-up en la zona de Coaching y en la zona de Pits
            </p>
            <ul>
              <li>
                <span>Coaching:</span> Podrás solicitar apoyo para entrenamientos específicos
                que te llevarán a mejorar tu estrategia promocional.
              </li>
              <li>
                <span> Pits: </span>
                Podrás solicitar materiales promocionales autorizados para
                entregarlos a tus médicos.
              </li>
            </ul>
            <p>
              Podrás seguir de cerca la carrera a través de esta{' '}
              <Link href='/envivo'>
                <span style={{ cursor: 'pointer' }}>página </span>
              </Link>{' '}
              y saber la posición de los demás pilotos. <br />{' '}
            </p>
            <p>
              Cada PoA habrá revisión de resultados y podrás revisar los avances
              que has tenido, así como, conocer al Piloto del Q que se encuentra
              en la ¡POLE POSITION!
            </p>
            <p>
              ¡Los resultados se actualizarán mensualmente y al final de la
              carrera (marzo 2023) podremos saber quién fue el piloto ganador.
            </p>
            <p>
              ¡Tú podrías subirte al podio ganador y ser acreedor a un gran
              premio!{' '}
            </p>
            <h2 className={styles.unete}>¡Únete a este reto! </h2>
            <p>
              Sólo podremos tener verdadero éxito en nuestro negocio si
              mejoramos los beneficios que ofrecemos a nuestros pacientes, sus
              familias y al público en general.
            </p>

            <h3 className={styles.unete}>Muchas gracias, pilotos,<br/>
            por ser parte de esta gran carrera, </h3>
            <p>
              <span style={{margin:"0px"}}>
              RALLY MÉXICO APOYÁNDOTE<sup>®</sup>.
              </span>
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default rallyapoyandote;
