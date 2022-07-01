import { Navbar, Container } from "react-bootstrap";
import { Cart } from "../Cart/Cart";

export const Header = ({ order }) => {

    return (
        <>
            <Navbar
                bg="dark"
                variant="dark"
                expand="lg"
                sticky="top"
            >
                <Container>
                    <Navbar.Brand href="#">Showcase-React-Bootstrap</Navbar.Brand>
                    <Cart quantity={order.length} />
                </Container>
            </Navbar>
        </>
    )
}