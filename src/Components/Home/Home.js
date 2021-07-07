import React from 'react';
import HomeNav from './Nav/HomeNav';
import { Routes, Route } from 'react-router-dom';
import { GlobalContext } from '../../GlobalContext';
import useMedia from '../../Hooks/useMedia';
import Products from './Product/Products';
import Cart from './Cart/Cart';
import styles from './Home.module.css';

const Home = () => {
  const mobile = useMedia('(max-width: 480px)');
  const { openCart, setOpenCart } = React.useContext(GlobalContext);

  function handleOpenMenu() {
    setOpenCart(!openCart);
  }

  return (
    <div className={styles.home}>
      {mobile && (
        <div className={styles.btnCart}>
          <button onClick={handleOpenMenu}>
            {!openCart ? (
              <ion-icon name="cart-outline"></ion-icon>
            ) : (
              <ion-icon name="close-outline"></ion-icon>
            )}
          </button>
        </div>
      )}
      <HomeNav />
      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/:product" element={<Products />} />
      </Routes>
      <Cart />
    </div>
  );
};

export default Home;