import { Icon32ErrorCircle } from "@vkontakte/icons";
import { Button, Modal } from "react-bootstrap";
import { ModalCartItem } from "../ModalCartItem/ModalCartItem";
import "./style.css";

export const ModalCart = ({ order = [], show, handleClick = Function.prototype }) => {

  const totalPrice = order.reduce((sum, element) => {
    return sum + element.price * element.cartCount;
  }, 0);

  return (
    <Modal
      size="lg"
      show={show}
      onHide={handleClick}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          <h6>Корзина</h6>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {order?.length
          ? (
            order.map(item => <ModalCartItem key={item.id} {...item} />)

          ) : (
            <div className="modal-error">
              <Icon32ErrorCircle width={30} height={30} fill="#57bee6" />
              <h5>
                Ваша корзина пуста
              </h5>
              <Button
                style={{ fontWeight: "500", borderRadius: "10px", marginBottom: "15px" }}
                variant="outline-secondary"
                onClick={handleClick}
              >Перейти в каталог
              </Button>
            </div>
          )
        }
      </Modal.Body>
      {
        order.length > 0
        && <div style={{padding: "0 0 20px 20px"}}><h6>Общая стоимость: {totalPrice}₽</h6></div>
      }
    </Modal >
  )
}
