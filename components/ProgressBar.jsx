import Image from 'next/image';
import carro from '../img/rosycarro.png';
import styles from '../styles/envivo.module.scss';
const ProgressBar = (props) => {
  const { bgcolor, totalPacientes, carImage, name, number } = props;

  const containerStyles = {
    height: 50,
    width: '100%',
    backgroundColor: '#e0e0de',
    borderRadius: 5,
    margin: 3,
    boxSizing: 'border-box',
  };

  const fillerStyles = {
    height: '100%',
    width: `${totalPacientes}% `,
    backgroundColor: bgcolor,
    borderRadius: 'inherit',
    textAlign: 'right',
    boxShadow: '0px 3px 13px #4241415e',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  };

  const labelStyles = {
    padding: 15,
    color: 'white',
    fontWeight: 'bold',
    display: 'flex',
    allignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    height: '100%',
    fontSize: '1.1rem',
    boxSizing: 'content-box',
    position: 'absolute',
    minWidth: '240px',
    borderRadius: 'inherit',
    boxSizing: 'border-box',
    left: '0',
  };

  const ml = {
    marginRight: '0.5rem',
    fontSize:"1.2rem"
  }

  return (
    <>
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <span style={labelStyles}>
            <div>
              {' '}
              <span style={ml}>{`${number}`}</span>
              <span>{`${name}`}</span>
            </div>
            <span>
              {`${totalPacientes}`}
              <Image
                src={carImage}
                width={'66px'}
                height={'14px'}
                className={styles.carro}
                alt='Carro'
                layout='intrinsic'
              />
            </span>
          </span>
        </div>
      </div>
    </>
  );
};

export default ProgressBar;
