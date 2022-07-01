import { GoodsItem } from "../GoodsItem/GoodsItem";
import { Container, Row } from "react-bootstrap";

export const GoodsList = ({ goods, addToBasket = Function.prototype }) => {

    return (
        <Container style={{
            paddingTop: "1rem",
            paddingBottom: "1rem",
        }}
        >
            {goods.length
                ? <Row>
                    {goods.map(item => (
                        <GoodsItem
                            key={item.id}
                            {...item}
                            addToBasket={addToBasket}
                        />
                    ))}
                </Row>
                : <h3>Nothing here</h3>
            }
        </Container >
    )
}
