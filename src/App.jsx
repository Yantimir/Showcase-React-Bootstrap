import { useState, useEffect } from "react";
import api from "./components/utils/Api";

import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast"; /* https://react-hot-toast.com/ */

import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider';

import { Header } from "./components/Header/Header";
import { Shop } from "./components/Shop/Shop";
import Footer from "./components/Footer/Footer";


function App() {

  const [goods, setGoods] = useState([]);
  const [loading, setLoading] = useState(false);
  const [order, setOrder] = useState([]);
  // const [showModalCart, setShowModalCart] = useState(false);
  // const [showModalFavorite, setShowModalFavorite] = useState(false);
  const [favoritesCards, setFavoritesCards] = useState([]);
  // console.log(favoritesCards)
  useEffect(() => {
    setLoading(true);
    api.getGoodsList()
      .then((data) => {
        data.featured && setGoods(data.featured);
      })
      .catch(err => console.log(err))
      .finally(() => {
        setLoading(false);
      })
    // eslint-disable-next-line
  }, []);

  const addToBasket = (item) => {
    let itemIndex = order.findIndex(oderItem => oderItem.id === item.id);
    if (itemIndex < 0) {
      const newItem = {
        ...item,
        cartCount: 1
      }
      setOrder([...order, newItem]);
    } else {
      const newOrder = order.map((orderItem, index) => {
        if (index === itemIndex) {
          return {
            ...orderItem,
            cartCount: orderItem.cartCount + 1
          }
        } else {
          return orderItem;
        }
      });
      setOrder(newOrder);

    }
    toast('Товар добавлен в корзину',
      {
        icon: '🆕',
        style: {
          borderRadius: '20px',
          background: '#ffffff',
          color: '#000000',
        },
      }
    );
  };

  const addToFavorite = (item) => {
    let like = favoritesCards.some(favoritesItem => favoritesItem.like === item.id)
    if (!like) {
      const newItem = {
        ...item,
        like: item.id
      }
      setFavoritesCards([...favoritesCards, newItem]);
      // toast("Товар добавлен в избранные",
      //   {
      //     icon: '❤️',
      //     style: {
      //       borderRadius: '20px',
      //       background: '#ffffff',
      //       color: '#000000',
      //     },
      //   }
      // );
    } else {
      setFavoritesCards(prevState => {
        return prevState.filter(prev => prev.like !== item.id)
      });
      // toast("Товар удален из избранных",
      //   {
      //     icon: '⛔',
      //     style: {
      //       borderRadius: '20px',
      //       background: '#ffffff',
      //       color: '#000000',
      //     },
      //   }
      // );
    }
  }

  // const haldleClickOpenModalCart = () => {
  //   setShowModalCart(true);
  // }


  // const haldleClickOpenModalFavorite = () => {
  //   setShowModalFavorite(true);
  // }

  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
    >
      <Header
        order={order}
        favoritesCards={favoritesCards}
        // showModalCart={showModalCart}
        // setShowModalCart={setShowModalCart}
        // showModalFavorite={showModalFavorite}
        // haldleClickOpenModalFavorite={haldleClickOpenModalFavorite}
      />
      <div className="content">
        <Shop
          goods={goods}
          loading={loading}
          order={order}
          addToBasket={addToBasket}
          addToFavorite={addToFavorite}
          favoritesCards={favoritesCards}
        />
      </div>
      <Footer />
      <Toaster />

    </ThemeProvider>
  );
}

export default App;
