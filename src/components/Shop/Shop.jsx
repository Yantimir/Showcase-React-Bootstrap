import { Preloader } from "../Preloader/Preloader";
import { GoodsList } from "../GoodsList/GoodsList";
// import {Cart} from "../Cart/Cart";

export const Shop = ({
    goods = [],
    loading, 
    order,
    addToBasket = Function.prototype
}) => {
    return (
        <>
            {/* <Cart quantity={goods.length}/> */}
            {loading
                ? <Preloader />
                : <GoodsList
                    goods={goods}
                    order={order}
                    addToBasket={addToBasket}
                />
            }
        </>
    )
}
