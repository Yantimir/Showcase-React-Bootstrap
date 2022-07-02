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
        addToFavorite = Function.prototype
    } = props;

    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <div className="card__favorite" onClick={() => {
                        addToFavorite({
                            id,
                            name,
                            price
                        });
                    }}>
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
