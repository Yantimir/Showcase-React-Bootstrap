import { useState, useContext } from "react";
import { ShopContext } from "../../context/context";

import { Navbar, Container } from "react-bootstrap";
import "./style.css";
import { Icon36MarketOutline } from '@vkontakte/icons';
import { Cart } from "../Cart/Cart";
import { Favorite } from "../Favorite/Favorite";
import { ModalCart } from "../ModalCart/ModalCart";
import { ModalFavorites } from "../ModalFavorites/ModalFavorites";


export const Header = () => {

  const { order, favoritesCards } = useContext(ShopContext);
  const [showModalCart, setShowModalCart] = useState(false);
  const [showModalFavorite, setShowModalFavorite] = useState(false);

  const handleClickShowModalCart = () => {
    setShowModalCart(!showModalCart);
  }

  const haldleClickShowModalFavorite = () => {
    setShowModalFavorite(!showModalFavorite);
  }

  return (
    <>
      <Navbar
        bg="dark"
        variant="dark"
        expand="lg"
        sticky="top"
      >
        <Container>
          <Navbar.Brand href="https://github.com/Yantimir/Showcase-React-Bootstrap" target="_blank">
            <div>
              <Icon36MarketOutline />
              <div style={{ padding: "0 0 0 10px" }}>SHOWCASE</div>
            </div>
          </Navbar.Brand>
          <div className="container__inner">
            <div className="container__favorite"
              onClick={() => setShowModalFavorite(!showModalFavorite)}
            >
              <Favorite
                order={order}
                favoritesCount={favoritesCards?.length}
              />
            </div>
            <div className="container__cart"
              onClick={() => setShowModalCart(!showModalCart)}
            >
              <Cart
                order={order}
                cartCount={order?.length}
              />
            </div>
          </div>
        </Container>
      </Navbar>

      <ModalCart
        show={showModalCart}
        handleClick={handleClickShowModalCart}
      />

      <ModalFavorites
        show={showModalFavorite}
        handleClick={haldleClickShowModalFavorite}
      />
    </>
  )
}