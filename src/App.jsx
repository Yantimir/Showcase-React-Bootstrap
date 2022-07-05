import { useEffect, useContext } from "react";
import api from "./utils/Api";
import { ShopContext } from "./context/context.js";

// import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast"; /* https://react-hot-toast.com/ */

import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider';

import { Header } from "./components/Header/Header";
import { Shop } from "./components/Shop/Shop";
import Footer from "./components/Footer/Footer";

function App() {

  const { setGoods } = useContext(ShopContext);

  useEffect(() => {
    // setLoading(true);
    api.getGoodsList()
      .then((data) => {
        setGoods(data.featured)
      })
    .catch(err => console.log(err))
    // .finally(() => {
    //   setLoading(false);
    // })
    //eslint-disable-next-line
  }, []);


  // увеличение количества товара
  // const setIncrementOrder = (itemId) => {
  //   let newOrder = order.map(item => {
  //     if (item.id === itemId) {
  //       let newCartCount = item.cartCount + 1;
  //       return {
  //         ...item,
  //         cartCount: newCartCount
  //       }
  //     } else {
  //       return item;
  //     }
  //   });
  //   setOrder(newOrder);
  // }

  // уменьшение количества товара
  // const setDecrementOrder = (itemId) => {
  //   let newOrder = order.map(item => {
  //     if (item.id === itemId) {
  //       let newCartCount = item.cartCount - 1;
  //       return {
  //         ...item,
  //         cartCount: newCartCount >= 0 ? newCartCount : 0
  //       }
  //     } else {
  //       return item;
  //     }
  //   });
  //   setOrder(newOrder);
  // }

  return (
    <ThemeProvider
      breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
    >
      <Header />
      <div className="content">
        <Shop />
      </div>
      <Footer />
      <Toaster />
    </ThemeProvider>
  );
}

export default App;
