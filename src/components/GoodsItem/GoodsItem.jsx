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
            <Card style={{ width: '18rem', marginBottom: "2rem", margin: "0 auto" }}>
                <Card.Img variant="top" src={full_background} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <Card.Text>
                        {`Цена: ${price} рублей`}
                    </Card.Text>
                    <Button variant="primary" size="sm">Купить</Button>
                </Card.Body>
            </Card>
        </Col>

    )
}
