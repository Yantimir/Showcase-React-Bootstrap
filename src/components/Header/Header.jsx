import { useState } from "react";
import { Navbar, Container } from "react-bootstrap";
import { Cart } from "../Cart/Cart";
import { Favorite } from "../Favorite/Favorite";
import "./style.css";
import Modal from "../Modal/Modal";

export const Header = ({
    order,
    favoritesCards,
}) => {

    const [showModalCart, setShowModalCart] = useState(false);
    const [showModalFavorite, setShowModalFavorite] = useState(false);

    const haldleClickOpenModalFavorite = () => {
        setShowModalFavorite(!showModalFavorite)
    }

    const handleClickShowModalCart = () => {
        setShowModalCart(!showModalCart);
    }



    return (
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



                <Modal
                    order={order}
                    show={showModalCart}
                    handleClick={handleClickShowModalCart}
                    title="Корзина"
                    text="Ваша корзина пуста"
                    textButton="Перейти в каталог"
                />

                <Modal
                    order={order}
                    show={showModalFavorite}
                    haldleClick={haldleClickOpenModalFavorite}
                    title="Избранное"
                    text="Список пуст"
                    textButton="Перейти в каталог"
                />


            </Container>
        </Navbar>
    )
}