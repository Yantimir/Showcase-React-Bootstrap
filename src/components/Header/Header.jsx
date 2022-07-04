import { useState } from "react";
import { Navbar, Container } from "react-bootstrap";
import "./style.css";
import { Icon36MarketOutline } from '@vkontakte/icons';
import { Cart } from "../Cart/Cart";
import { Favorite } from "../Favorite/Favorite";
import { ModalCart } from "../ModalCart/ModalCart";
import { ModalFavorites } from "../ModalFavorites/ModalFavorites";

export const Header = ({ 
    order = [], 
    favoritesCards, 
    removeTobasket = Function.prototype,
    removeToFavorite = Function.prototype,
    setIncrementOrder = Function.prototype,
    setDecrementOrder = Function.prototype 
}) => {

    const [showModalCart, setShowModalCart] = useState(false);
    const [showModalFavorite, setShowModalFavorite] = useState(false);

    const handleClickShowModalCart = () => {
        setShowModalCart(!showModalCart);
    }

    const haldleClickShowModalFavorite = () => {
        setShowModalFavorite(!showModalFavorite)
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
                    <Navbar.Brand href="#">
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
                order={order}
                show={showModalCart}
                handleClick={handleClickShowModalCart}
                removeTobasket={removeTobasket}
                setIncrementOrder={setIncrementOrder}
                setDecrementOrder={setDecrementOrder}
            />

            <ModalFavorites
                favoritesCards={favoritesCards}
                removeToFavorite={removeToFavorite}
                show={showModalFavorite}
                handleClick={haldleClickShowModalFavorite}
                title="Избранное"
                text="Список пуст"
                textButton="Перейти в каталог"
            />
        </>
    )
}