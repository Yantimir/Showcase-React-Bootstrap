import React from "react";
import { Container, Carousel } from "react-bootstrap";

export const Slider = ({ goods }) => {

    return (
        <Container>
            <Carousel style={{ marginTop: "10px", marginBottom: "10px" }} fade>
                {goods.map(item => (
                    <Carousel.Item key={item.id} style={{ maxHeight: "600px" }}>
                        <img
                            className="d-block w-100"
                            src={item.full_background}
                            alt={item.name}
                        />
                        {/* <Carousel.Caption>
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                    </Carousel.Caption> */}
                    </Carousel.Item>
                ))
                }
            </Carousel>
        </Container>
    )
}
