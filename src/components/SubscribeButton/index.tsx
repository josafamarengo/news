import styles from './styles.module.scss';

interface SubscribeButtonProps {
  priceId: string;
}

function SubscribeButton({ priceId }: SubscribeButtonProps) {
  return (
    <button type="button" className={styles.button}>Acesso completo</button>
  )
}

export default SubscribeButton;