import { Icon24DeleteOutline } from '@vkontakte/icons';
import "./style.css";

export const ModalCartItem = ({
  id,
  name,
  icon,
  price,
  cartCount,
  removeTobasket = Function.prototype,
  setIncrementOrder = Function.prototype,
  setDecrementOrder = Function.prototype
}) => {

  // const { name, icon, price, cartCount } = props

  return (
    <>
      <div className="modal-body-name">
        <div style={{ display: "flex" }}>
          <img
            src={icon}
            alt={name}
            style={{
              width: "100px",
              height: "100px",
              marginRight: "20px",
              borderRadius: "10px"
            }}
          />
          <div>
            <h6>{name.toUpperCase()}</h6>
            {/* <h6 style={{ fontWeight: "400", fontSize: "0.8rem", color: "#747474" }}>
                        Количество:
                      </h6> */}
            <h6 style={{ fontWeight: "400", fontSize: "1rem", color: "#57bee6", marginBottom: "12px" }}>
              {price}₽ x {cartCount} = {price * cartCount}₽
            </h6>
            <div className="btnWrap">
              <div className="btnLeft">
                <button className="minus" onClick={() => setDecrementOrder(id)}> - </button>
                <span className="amount">{cartCount}</span>
                <button className="plus" onClick={() => setIncrementOrder(id)}> + </button>
              </div>
            </div>
          </div>
        </div>
        <div style={{ cursor: "pointer" }} onClick={() => removeTobasket(id)}>
          <Icon24DeleteOutline width={20} height={20} fill="#57bee6" />
        </div>
      </div>
      <hr style={{ margin: "15px 0" }} />
    </>
  )
}
