import { Icon28ShoppingCartOutline } from '@vkontakte/icons';

export const Cart = (props) => {

  const { quantity = 0 } = props;

  return (
      <div className="cart">
        <div style={{marginRight: "3px"}}>
          <Icon28ShoppingCartOutline width={30} height={30} fill="#ffffff" />
        </div>
        {quantity
          ? <div style={{
            fontSize: "16px",
            fontWeight: "500",
            marginLeft: "2px",
            marginRight: "5px"
          }}
          >
            {quantity}
          </div>
          : null
        }
      </div>
  )
}
