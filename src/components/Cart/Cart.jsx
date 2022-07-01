import { Icon28ShoppingCartOutline } from '@vkontakte/icons';

export const Cart = (props) => {

  const { quantity = 0 } = props;

  return (
    <div className="cart__wrapper">
      <div className="cart__item">
        <div>
          <Icon28ShoppingCartOutline width={30} height={30} fill="#ffffff" />
        </div>
        <div style={{
          fontSize: "16px",
          fontWeight: "500",
          marginLeft: "5px",
          marginRight: "5px"
        }}
        >
          {quantity ? <span>{quantity}</span> : null}
        </div>
      </div>
    </div>
  )
}
