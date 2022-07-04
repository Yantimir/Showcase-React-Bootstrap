import { Icon28ShoppingCartOutline } from '@vkontakte/icons';
// import Modal from "../Modal/Modal";
import "./style.css";

export const Cart = (props) => {

  const { cartCount = 0 } = props

  return (
    <>
      <div className="cart">
        <div className="cart__inner">
          <Icon28ShoppingCartOutline width={32} height={32} fill="#57bee6" />
        </div>
        {cartCount
          ? <div className="cart__quantity">
            <h6>{cartCount}</h6>
          </div>
          : null
        }
      </div>
    </>

  )
}
