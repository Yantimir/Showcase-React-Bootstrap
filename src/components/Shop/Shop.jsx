import { Preloader } from "../Preloader/Preloader";
import { GoodsList } from "../GoodsList/GoodsList";

export const Shop = ({ goods, loading }) => {

    return (
        <>
            {loading ? <Preloader /> : <GoodsList goods={goods} />}
        </>
    )
}
