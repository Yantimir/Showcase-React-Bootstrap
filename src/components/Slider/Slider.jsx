import React from "react";
import { Container, Carousel } from "react-bootstrap";

export const Slider = ({ goods }) => {

    return (
        <Container>
            <Carousel
                style={{ marginTop: "2rem" }}
                fade
                variant="dark"
            >
                {goods.map(item => (
                    <Carousel.Item
                        key={item.id}
                        style={{
                            maxHeight: "512px",
                            maxWidth: "512px",
                        }}
                    >
                        <img
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "contain"
                            }}
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
