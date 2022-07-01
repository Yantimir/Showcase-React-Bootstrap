import { useState, useEffect } from "react";
import api from "./components/utils/Api";

import 'bootstrap/dist/css/bootstrap.min.css';
import ThemeProvider from 'react-bootstrap/ThemeProvider';

import { Header } from "./components/Header/Header";
// import { Slider } from "./components/Slider/Slider";
import { Shop } from "./components/Shop/Shop";
import Footer from "./components/Footer/Footer";


function App() {

    const [goods, setGoods] = useState([]);
    const [loading, setLoading] = useState(false);

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

    return (
        <ThemeProvider
            breakpoints={['xxxl', 'xxl', 'xl', 'lg', 'md', 'sm', 'xs', 'xxs']}
        >
            <Header/>
            <div className="content">
                {/* <Slider goods={goods} /> */}
                <Shop goods={goods} loading={loading} />
            </div>
            <Footer />
        </ThemeProvider>
    );
}

export default App;
