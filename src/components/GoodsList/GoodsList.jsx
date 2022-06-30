import { GoodsItem } from "../GoodsItem/GoodsItem";
import { Container, Row } from "react-bootstrap";

export const GoodsList = (props) => {

    const { goods = [] } = props;

    return (
        <Container style={{ paddingTop: "2rem", paddingBottom: "2rem"}}>
            {goods.length
                ? <Row>
                    {goods.map(item => (
                        <GoodsItem key={item.id} {...item} />
                    ))}
                </Row>
                : <h3>Nothing here</h3>
            }
        </Container>

    )
}
