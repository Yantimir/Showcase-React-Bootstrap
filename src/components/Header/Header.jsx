import { useState } from "react";
import { Navbar, Container } from "react-bootstrap";
import "./style.css";

import { Cart } from "../Cart/Cart";
import { Favorite } from "../Favorite/Favorite";
import { ModalCart } from "../ModalCart/ModalCart";
import { ModalFavorites } from "../ModalFavorites/ModalFavorites";



export const Header = ({ order, favoritesCards }) => {
    console.log(favoritesCards)
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
                    <Navbar.Brand href="#"><div>Showcase</div></Navbar.Brand>
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
                content={order}
                show={showModalCart}
                handleClick={handleClickShowModalCart}
                title="Корзина"
                text="Ваша корзина пуста"
                textButton="Перейти в каталог"
            />

            <ModalFavorites
                content={favoritesCards}
                show={showModalFavorite}
                handleClick={haldleClickShowModalFavorite}
                title="Избранное"
                text="Список пуст"
                textButton="Перейти в каталог"
            />
        </>

    )
}