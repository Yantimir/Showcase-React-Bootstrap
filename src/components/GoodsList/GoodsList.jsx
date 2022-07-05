import {useContext} from "react";
import {ShopContext} from "../../context/context";

import { GoodsItem } from "../GoodsItem/GoodsItem";
import { Container, Row } from "react-bootstrap";


export const GoodsList = () => {

    const {goods = []} = useContext(ShopContext);

    return (
        <Container style={{
            paddingTop: "1rem",
            paddingBottom: "1rem",
        }}
        >
            {goods.length
                ? <Row xxl={5} xl={4} lg={3} md={2} sm={2} xs={1} className="g-1">
                    {goods.map(item => (
                        <GoodsItem
                            key={item.id}
                            {...item}
                        />
                    ))}
                </Row>
                : <h3>Nothing here</h3>
            }
        </Container >
    )
}
