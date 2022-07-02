import { Icon28ShoppingCartOutline } from '@vkontakte/icons';
import "./style.css";

export const Cart = (props) => {

  const { quantity = 0 } = props;

  return (
      <div className="cart">
        <div className="cart__inner">
          <Icon28ShoppingCartOutline width={30} height={30} fill="#57bee6" />
        </div>
        {quantity
          ? <div className="cart__quantity">
            {quantity}
          </div>
          : null
        }
      </div>
  )
}
