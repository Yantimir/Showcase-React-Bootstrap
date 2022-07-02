import { Button, Modal } from "react-bootstrap";
import { Icon32ErrorCircle } from '@vkontakte/icons';
import { Icon24DeleteOutline } from '@vkontakte/icons';
import "./style.css";

const _Modal = ({ order, title, showModal, haldleClickOpenModal }) => {

    console.log(order)

    return (
        <Modal
            // centered
            size="sm"
            show={showModal}
            onHide={haldleClickOpenModal}
            aria-labelledby="example-modal-sizes-title-sm"
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-sm">
                    <h6>{title}</h6>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {order.length
                    ? order.map(item => (
                        <div key={item.id}>
                            <div className="modal-body-name">
                                <h6>
                                    {item.name.toUpperCase()}
                                </h6>
                                <Icon24DeleteOutline width={20} height={20} fill="57bee6" />
                            </div>

                            <h6 style={{ fontWeight: "400", fontSize: "1rem", color: "#747474" }}>
                                Цена: {item.price} ₽
                            </h6>
                            <h6 style={{ fontSize: "0.8rem", color: "#464646" }}>
                                Количество: {item.quantity}
                            </h6>
                            <hr />
                        </div>
                    ))
                    : <div className="modal-error">
                        <Icon32ErrorCircle width={30} height={30} fill="#57bee6" />
                        <h5>
                            Ваша корзина пуста
                        </h5>
                        <Button
                            style={{ fontWeight: "500", borderRadius: "10px" }}
                            variant="outline-secondary"
                            onClick={haldleClickOpenModal}
                        >Перейти в каталог
                        </Button>
                    </div>
                }
            </Modal.Body>
        </Modal >
    )
}
export default _Modal;