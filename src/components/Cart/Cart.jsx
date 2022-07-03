import { Icon28ShoppingCartOutline } from '@vkontakte/icons';
// import Modal from "../Modal/Modal";
import "./style.css";

export const Cart = (props) => {

  const { cartCount = 0 } = props

  return (
    <>
      <div className="cart">
        <div className="cart__inner">
          <Icon28ShoppingCartOutline width={30} height={30} fill="#57bee6" />
        </div>
        {cartCount
          ? <div className="cart__quantity">
            {cartCount}
          </div>
          : null
        }
      </div>
    </>

  )
}
