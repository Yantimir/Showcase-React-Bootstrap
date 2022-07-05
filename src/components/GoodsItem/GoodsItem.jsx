import { useContext } from "react";
import { ShopContext } from "../../context/context";

import { Card, Button, Col } from "react-bootstrap";
import "./style.css";
import { FavoriteCard } from "../FavoriteCard/FavoriteCard";


export const GoodsItem = (props) => {
    const {
        id,
        name,
        description,
        price,
        // full_background,
        icon,
        image,
    } = props;

    const { addToFavorite, addToBasket } = useContext(ShopContext);

    return (
        <Col>
            <Card>
                <Card.Img variant="top" src={image} alt={name} />
                <Card.Body>
                    <div className="card__favorite" onClick={() => {
                        addToFavorite({
                            id,
                            name,
                            price,
                            icon,
                            description
                        });
                    }}>
                        <FavoriteCard id={id} />
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
                                    price,
                                    icon,
                                    description
                                });
                            }}
                        >В корзину
                        </Button>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    )
}
