import { Card, Button, Col } from 'react-bootstrap';
import { Favorite } from "../Favorite/Favorite";
import "./style.css";

export const GoodsItem = (props) => {
    const {
        id,
        name,
        description,
        price,
        // full_background,
        // icon,
        image,
        addToBasket = Function.prototype,
    } = props;

    return (
        <Col>
            <Card style={{
                height: "26rem",
                width: '15rem',
                margin: "1rem auto 1rem auto",
                // border: "2px solid #000000",
                background: "rgba( 255, 255, 255, 0.25 )",
                boxShadow: "0 8px 32px 0 rgba( 31, 38, 135, 0.37 )",
                backdropFilter: "blur( 1px )",
                borderRadius: "20px",
                border: "1px solid rgba( 255, 255, 255, 0.18 )",
                overflow: "hidden"
            }}
            >
                {/* <Card.Img variant="top" src={full_background} /> */}
                {/* <Card.Img variant="top" src={icon} /> */}
                <Card.Img variant="top" src={image} />
                <Card.Body style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between"
                }}
                >
                    <div className="card__favorite">
                        <Favorite color="#57bee6" />
                    </div>
                    <Card.Title>
                        {name.toUpperCase()}
                    </Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <div className="title-wrapper">
                        <Card.Title>
                            {`₽ ${price} `}
                        </Card.Title>
                        <Button
                            variant="outline-secondary"
                            onClick={() => {
                                addToBasket({
                                    id,
                                    name,
                                    price
                                });
                            }}
                        >Купить
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    )
}
