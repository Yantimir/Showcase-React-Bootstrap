import { Navbar, Container } from "react-bootstrap";
import { Cart } from "../Cart/Cart";
import { Favorite } from "../Favorite/Favorite";
import "./style.css";

export const Header = ({ order, haldleClickOpenModal }) => {

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
                        <div className="container__favorite">
                            <Favorite color="#57bee6"/>
                        </div>
                        <div className="container__cart" onClick={haldleClickOpenModal}>
                            <Cart quantity={order.length} />
                        </div>
                    </div>
                </Container>
            </Navbar>
        </>
    )
}