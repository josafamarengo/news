import styles from './styles.module.scss';
import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

const SignInButton = () => {
  const isUserLoggedIn = true;

  return isUserLoggedIn ? (
    <>
      <button type="button" className={styles.signInButton}><FaGithub color="#04d361" />Josafá Marengo <FiX color="#737388" className={styles.closeIcon} /></button>
    </>
  ) : (
    <>
      <button type="button" className={styles.signInButton}><FaGithub color="#eba417" />Sign in whit GitHub</button>
    </>
  )
}

export default SignInButton;