import { GoodsItem } from "../GoodsItem/GoodsItem";
import { Container, Row } from "react-bootstrap";
import  {Cart} from "../Cart/Cart";

export const GoodsList = (props) => {

    const { goods = [] } = props;

    return (
        <Container style={{ paddingTop: "1rem", paddingBottom: "1rem"}}>
            <Cart/>
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
