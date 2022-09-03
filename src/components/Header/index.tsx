import React from 'react';
import Image from '../../../node_modules/next/image';
import SignInButton from '../SignInButton';
import style from './styles.module.scss';

const Header = () => {
  return (
    <header className={style.container}>
        <div className={style.content}>
            <Image src="/images/logo.svg" alt="logo" width={100} height={30}  />
            <nav>
                <a id={style.active} className={style.link} href="#">Home</a>
                <a className={style.link} href="#">Posts</a>
            </nav>
            <SignInButton />
        </div>
    </header>
  )
}

export default Header;