import { Button, Modal } from "react-bootstrap";
import { Icon32ErrorCircle } from '@vkontakte/icons';
import { Icon24DeleteOutline } from '@vkontakte/icons';
import "./style.css";

const _Modal = (props) => {

    const {
        order,
        title,
        text,
        textButton,
        show,
        handleClick = Function.prototype
    } = props;
// console.log(props)
    return (
        <Modal
            size="lg"
            show={show}
            onHide={handleClick}
            aria-labelledby="example-modal-sizes-title-lg"
        >
            <Modal.Header closeButton>
                <Modal.Title id="example-modal-sizes-title-lg">
                    <h6>{title}</h6>
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {order.length
                    ? order.map(item => (
                        <div key={item.id}>
                            <div className="modal-body-name">
                                <div style={{ display: "flex" }}>
                                    <img
                                        src={item.icon}
                                        alt={item.name}
                                        style={{
                                            width: "100px",
                                            height: "100px",
                                            marginRight: "20px"
                                        }}
                                    />
                                    <div>
                                        <h6>
                                            {item.name.toUpperCase()}
                                        </h6>
                                        <h6 style={{ fontWeight: "400", fontSize: "1rem", color: "#747474" }}>
                                            Цена: {item.price} ₽
                                        </h6>
                                        <h6 style={{ fontSize: "0.8rem", color: "#464646" }}>
                                            Количество: {item.cartCount}
                                        </h6>
                                    </div>
                                </div>

                                <Icon24DeleteOutline width={20} height={20} fill="57bee6" />
                            </div>
                            <hr />
                        </div>
                    ))
                    : <div className="modal-error">
                        <Icon32ErrorCircle width={30} height={30} fill="#57bee6" />
                        <h5>
                            {text}
                        </h5>
                        <Button
                            style={{ fontWeight: "500", borderRadius: "10px", marginBottom: "15px" }}
                            variant="outline-secondary"
                            onClick={handleClick}
                        >{textButton}
                        </Button>
                    </div>
                }
            </Modal.Body>
        </Modal >
    )
}
export default _Modal;