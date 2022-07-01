import { Card, Button, Col } from 'react-bootstrap';

export const GoodsItem = (props) => {
    const {
        // id,
        name,
        description,
        price,
        full_background,
        // icon,
        // image
    } = props;

    return (
        <Col>
            <Card style={{ width: '18rem', margin: "1rem auto 1rem auto" }}>
                <Card.Img variant="top" src={full_background} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
                        <Button variant="primary">В корзину</Button>
                        <Card.Title>
                            {`${price} ₽`}
                        </Card.Title>
                    </div>
                </Card.Body>
            </Card>
        </Col >

    )
}
