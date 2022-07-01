import { Navbar, Container } from "react-bootstrap";

export const Header = () => {
    return (
        <>
            <Navbar 
            collapseOnSelect 
            bg="dark" 
            variant="dark" 
            expand="lg"
            sticky="top"
            >
                <Container>
                    <Navbar.Brand href="#">Showcase-React-Bootstrap</Navbar.Brand>
                    {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mr-auto">
                            <Nav.Link href="#">Home</Nav.Link>
                            <Nav.Link href="#">Link</Nav.Link>
                            <Nav.Link href="#">About</Nav.Link>
                        </Nav>
                    </Navbar.Collapse> */}
                </Container>
            </Navbar>
        </>
    )
}