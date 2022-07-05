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
    api.getGoodsList()
      .then((data) => {
        setGoods(data.featured);
      })
    .catch(err => console.log(err))
    //eslint-disable-next-line
  }, []);

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
