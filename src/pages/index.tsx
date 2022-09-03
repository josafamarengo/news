import Head from '../../node_modules/next/head';
import Image from '../../node_modules/next/image';
import SubscribeButton from '../components/SubscribeButton/index';
import styles from './home.module.scss';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <main className={styles.container}>
        <section className={styles.hero}>
          <span>👏 Hey, welcome</span>
          <h1>News about the <span>React</span> world.</h1>
          <p>
            Get access to all the publications <br />
            <span>for {`$9.90`}</span> month
          </p>
          <SubscribeButton />
        </section>
        <Image src="/images/avatar.svg" alt="Girl coding" width={320} height={500} />
      </main>
    </>
  )
}
