import { GoodsItem } from "../GoodsItem/GoodsItem";
import { Container, Row } from "react-bootstrap";
import { Cart } from "../Cart/Cart";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Navigation, Pagination, Scrollbar, A11y, EffectFade } from 'swiper';
// swiper bundle styles
import 'swiper/css/bundle';

// swiper core styles
import 'swiper/css';

// modules styles
import 'swiper/css/navigation';
import 'swiper/css/pagination';
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, EffectFade])

export const GoodsList = (props) => {

    const { goods = [] } = props;

    return (
        <Container style={{
            paddingTop: "1rem",
            paddingBottom: "1rem",
        }}
        >
            <Cart />
            {goods.length
                ? <Swiper
                    effect="fade"
                    // install Swiper modules
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    spaceBetween={20}
                    slidesPerView={4}
                    navigation
                    pagination={{ clickable: true }}
                    // scrollbar={{ draggable: true }}
                    onSlideChange={() => console.log('slide change')}
                    onSwiper={(swiper) => console.log(swiper)}>
                    {goods.map(item => (
                        <SwiperSlide key={item.id} className="slide">
                            <GoodsItem {...item} />
                        </SwiperSlide>
                    ))}
                </Swiper>
                : <h3>Nothing here</h3>
            }
        </Container>

    )
}
