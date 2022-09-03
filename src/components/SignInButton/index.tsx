import { signIn, useSession, signOut } from 'next-auth/react'
import styles from './styles.module.scss';
import { FaGithub } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';

const SignInButton = () => {
  const { data: session, status } = useSession()
  const loading = status === "loading"

  return session ? (
    <>
      <button 
        type="button" 
        className={styles.signInButton}
        onClick={() => signOut()}
      >
        <FaGithub color="#04d361" />
        Josafá Marengo 
        <FiX color="#737388" className={styles.closeIcon} />
      </button>
    </>
  ) : (
    <>
      <button 
        type="button" 
        className={styles.signInButton}
        onClick={() => signIn('github')}>
      <FaGithub color="#eba417" />
        Sign in whit GitHub
      </button>
    </>
  )
}

export default SignInButton;