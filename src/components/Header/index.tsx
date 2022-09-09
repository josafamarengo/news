import React from 'react';
import { useRouter } from 'next/router';
import Image from '../../../node_modules/next/image';
import Link from '../../../node_modules/next/link';
import SignInButton from '../SignInButton';
import style from './styles.module.scss';

const Header = () => {
  const { asPath } = useRouter();

  return (
    <header className={style.container}>
        <div className={style.content}>
            <Image src="/images/logo.svg" alt="logo" width={100} height={30}  />
            <nav>
              <Link href="/">
                <a id={asPath == '/' ? style.active : ''} className={style.link}>
                  Home
                </a>
              </Link>
              <Link href="/posts" prefetch>
                <a id={asPath == '/posts' ? style.active : ''} className={style.link}>
                  Posts
                </a>
              </Link>
            </nav>
            <SignInButton />
        </div>
    </header>
  )
}

export default Header;