import { useContext } from "react";
import { ShopContext } from "../../context/context";

import { Button, Modal } from "react-bootstrap";
import { Icon24Like, Icon32ErrorCircle } from '@vkontakte/icons';
import "./style.css";

export const ModalFavorites = ({ show, handleClick = Function.prototype }) => {

  const { favoritesCards, addToBasket, removeFromFavorite } = useContext(ShopContext);

  return (
    <Modal
      size="lg"
      show={show}
      onHide={handleClick}
      aria-labelledby="example-modal-sizes-title-lg"
    >
      <Modal.Header closeButton>
        <Modal.Title id="example-modal-sizes-title-lg">
          <h6>Избранное</h6>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        {favoritesCards.length
          ? favoritesCards.map(item => (
            <div key={item.id}>
              <div className="modal-body-name">
                <div style={{ display: "flex" }}>
                  <img
                    src={item.icon}
                    alt={item.name}
                    style={{
                      width: "100px",
                      height: "100px",
                      marginRight: "20px",
                      borderRadius: "10px"
                    }}
                  />
                  <div>
                    <h6>
                      {item.name.toUpperCase()}
                    </h6>
                    <h6 style={{ fontWeight: "400", fontSize: "1rem", color: "#747474" }}>
                      {item.description}
                    </h6>
                    <h6>
                      {item.price}₽
                    </h6>
                    <Button
                      variant="outline-secondary"
                      onClick={() => {
                        addToBasket(item);
                      }}
                    >В корзину
                    </Button>
                  </div>
                </div>
                <div onClick={() => removeFromFavorite(item.like)} style={{ cursor: "pointer" }}>
                  <Icon24Like width={25} height={25} fill="#57bee6" />
                </div>
              </div>
              <hr />
            </div>
          ))
          : <div className="modal-error">
            <Icon32ErrorCircle width={30} height={30} fill="#57bee6" />
            <h5>Список пуст</h5>
            <Button
              style={{ fontWeight: "500", borderRadius: "10px", marginBottom: "15px" }}
              variant="outline-secondary"
              onClick={handleClick}
            >Перейти в каталог
            </Button>
          </div>
        }
      </Modal.Body>
    </Modal >
  )
}
