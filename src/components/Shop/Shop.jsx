import {useContext} from "react";
import { ShopContext } from "../../context/context";

import { Preloader } from "../Preloader/Preloader";
import { GoodsList } from "../GoodsList/GoodsList";


export const Shop = ({
    // goods = [],
    // loading,
    // order,
    favoritesCards,
    // addToBasket = Function.prototype,
    addToFavorite = Function.prototype,
}) => {

    const {loading} = useContext(ShopContext);
    return (
        <>
            {loading
                ? <Preloader />
                : <GoodsList
                    // goods={goods}
                    // order={order}
                    favoritesCards={favoritesCards}
                    // addToBasket={addToBasket}
                    addToFavorite={addToFavorite}
                />
            }
        </>
    )
}
