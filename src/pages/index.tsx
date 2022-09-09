import Head from '../../node_modules/next/head';
import Image from '../../node_modules/next/image';
import { GetStaticProps } from 'next';
import SubscribeButton from '../components/SubscribeButton/index';
import styles from './home.module.scss';
import { stripe } from '../services/stripe';

interface HomeProps {
  product: {
    priceId: string;
    amount: number;
  }
}

export default function Home({ product }: HomeProps) {
  return (
    <>
      <Head>
        <title>Home | ig.news</title>
      </Head>
      <main className={styles.container}>
        <section className={styles.hero}>
          <span>👏 Oii, bem-vindo!</span>
          <h1>Notícias sobre o universo <span>React</span>.</h1>
          <p>
            Obtenha acesso a todos os posts <br />
            por <span>{product.amount}</span> por mês
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>
        <div className={styles.imageContainer}>
          <Image 
            className={styles.image} 
            src="/images/avatar.svg" 
            alt="Girl coding" 
            width={320} 
            height={520}
          />
        </div>
      </main>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const price =await stripe.prices.retrieve('price_1LdySKA0lVMmesP3DZ8Hex6b')

  const product ={
    priceId: price.id,
    amount: new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL'
    }).format(price.unit_amount / 100)
  }

  return {
    props: {
      product
    },
    revalidate: 60 * 60 * 24 // 24 hours
  }
}