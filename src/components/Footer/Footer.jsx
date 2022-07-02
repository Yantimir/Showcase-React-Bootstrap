import { Container } from "react-bootstrap";

const Footer = () => {

    return (
        <>
            <Container fluid style={{ backgroundColor: "#212529", color: "#57bee6" }}>
                <Container style={{ display: "flex", justifyContent: "center", padding: "10px" }}>
                    <h6>2022</h6>
                </Container>
            </Container>
        </>
    )
}
export default Footer;