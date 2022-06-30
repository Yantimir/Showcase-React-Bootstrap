import { Container } from "react-bootstrap";

const Footer = () => {

    return (
        <>
            <Container fluid style={{ backgroundColor: "#212529", color: "#ffffff" }}>
                <Container style={{ display: "flex", justifyContent: "center", padding: "10px" }}>
                    <p>2022</p>
                </Container>
            </Container>
        </>
    )
}
export default Footer;