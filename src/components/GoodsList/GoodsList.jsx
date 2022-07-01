import { GoodsItem } from "../GoodsItem/GoodsItem";
import { Container, Row } from "react-bootstrap";
import { Cart } from "../Cart/Cart";

// Import Swiper React components
// import { Swiper, SwiperSlide } from 'swiper/react';
// import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper';
// swiper bundle styles
// import 'swiper/css/bundle';

// swiper core styles
// import 'swiper/css';

// modules styles
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
// SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade])

export const GoodsList = ({
    goods,
    order,
    addToBasket = Function.prototype,
    // handleClickCart
}) => {

    return (
        <Container style={{
            paddingTop: "1rem",
            paddingBottom: "1rem",
        }}
        >
            <Cart quantity={order.length} />
            {goods.length
                // ? <Swiper
                //     effect="fade"
                //     // install Swiper modules
                //     modules={[Navigation, Pagination, Scrollbar, A11y]}
                //     spaceBetween={20}
                //     slidesPerView={4}
                //     navigation
                //     pagination={{ clickable: true }}
                //     // scrollbar={{ draggable: true }}
                //     onSlideChange={() => console.log('slide change')}
                //     onSwiper={(swiper) => console.log(swiper)}
                // >
                ? <Row>
                    {goods.map(item => (
                        // <SwiperSlide key={item.id} className="slide">
                        <GoodsItem
                            key={item.id}
                            {...item}
                            addToBasket={addToBasket}
                            // handleClickCart={handleClickCart}
                        />
                        // </SwiperSlide>
                    ))}
                </Row>

                // </Swiper>
                : <h3>Nothing here</h3>
            }
        </Container >
    )
}
