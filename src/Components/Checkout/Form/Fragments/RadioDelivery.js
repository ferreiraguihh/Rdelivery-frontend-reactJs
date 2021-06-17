import React from 'react';
import styles from './RadioDelivery.module.css';

const Radio = () => {
  const [typeBuy, setTypeBuy] = React.useState('');

  return (
    <div className={styles.radioDelivery}>
      <label className={styles.label}>
        <input name="store" type="radio" value="store" className={styles.radio} checked={typeBuy === "store"} onChange={({ target }) => setTypeBuy(target.value)} />
        Retirar na loja
      </label>
      <label className={styles.label}>
        <input name="delivery" type="radio" value="delivery" className={styles.radio} checked={typeBuy === "delivery"} onChange={({ target }) => setTypeBuy(target.value)} />
        Delivery
      </label>
      {typeBuy === 'delivery' ? (
        <p>delivery</p>
      ) : (
        ''
      )}
    </div>
  )
}

export default Radio;