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
            <Card style={{
                height: "30rem",
                width: '18rem',
                margin: "1rem auto 1rem auto",
            }}
                className="slide-content"
            >
                <Card.Img variant="top" src={full_background} />
                <Card.Body style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between"
                }}
                >
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text>
                    <div style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "5px"
                    }}
                    >
                        <Button variant="primary">В корзину</Button>
                        <Card.Title>
                            {`${price} ₽`}
                        </Card.Title>
                    </div>
                </Card.Body>
            </Card>
        </Col>
    )
}
