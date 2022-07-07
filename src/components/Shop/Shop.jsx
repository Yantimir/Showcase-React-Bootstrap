import { useContext } from "react";
import { ShopContext } from "../../context/context";

import { Preloader } from "../Preloader/Preloader";
import { GoodsList } from "../GoodsList/GoodsList";

export const Shop = () => {

    const { loading } = useContext(ShopContext);

    return (
        <>
            {loading
                ? <Preloader />
                : <GoodsList />
            }
        </>
    )
}
