import { useState, useEffect } from "react";
import api from "./components/utils/Api";

import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider';

import { Header } from "./components/Header/Header";
import { Shop } from "./components/Shop/Shop";
import Footer from "./components/Footer/Footer";

function App() {

    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(false);
    const [order, setOrder] = useState([])
    
    useEffect(() => {
        setLoading(true);
        api.getGoodsList()
            .then((data) => {
                data.featured && setGoods(data.featured);
            })
            .catch(err => console.log(err))
            .finally(() => {
                setLoading(false);
            })
        // eslint-disable-next-line
    }, []);

    const addToBasket = (item) => {
        const itemIndex = order.findIndex(oderItem => oderItem.id === item.id);
        if (itemIndex < 0) {
            const newItem = {
                ...item,
                quantity: 1
            }
            setOrder([...order, newItem])
        } else {
            const newOrder = order.map((orderItem, index) => {
                if(index === itemIndex){
                    return {
                        ...orderItem,
                        quantity: orderItem.quantity + 1
                    }
                } else {
                    return orderItem;
                }
            });
            setOrder(newOrder);
        }
    };

    return (
        <ThemeProvider
            breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        >
            <Header />
            <div className="content">
                <Shop
                    goods={goods}
                    loading={loading}
                    order={order}
                    addToBasket={addToBasket}
                />
            </div>
            <Footer />
        </ThemeProvider>
    );
}

export default App;
