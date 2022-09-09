import React from 'react';
import Head from '../../../node_modules/next/dist/shared/lib/head';
import styles from './styles.module.scss';

function index() {
  return (
    <>
        <Head>
            <title>Posts</title>
        </Head>
        <main className={styles.container}>
            <div className={styles.posts}>
                <a href="/posts/first-post">
                    <time>07 de setembro de 2022</time>
                    <strong>First Post in The Blog</strong>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda a iusto ipsa quis nobis minima deleniti dolores ad tempora cupiditate quasi, quae in magni nulla facilis voluptas accusamus repellendus adipisci?</p>
                </a>
                <a href="/posts/first-post">
                    <time>07 de setembro de 2022</time>
                    <strong>First Post in The Blog</strong>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda a iusto ipsa quis nobis minima deleniti dolores ad tempora cupiditate quasi, quae in magni nulla facilis voluptas accusamus repellendus adipisci?</p>
                </a>
                <a href="/posts/first-post">
                    <time>07 de setembro de 2022</time>
                    <strong>First Post in The Blog</strong>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda a iusto ipsa quis nobis minima deleniti dolores ad tempora cupiditate quasi, quae in magni nulla facilis voluptas accusamus repellendus adipisci?</p>
                </a>
            </div>
        </main>
    </>
  )
}

export default index