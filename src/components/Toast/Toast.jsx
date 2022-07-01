import { Toast, ToastContainer } from "react-bootstrap";

const _Toast = ({show, setShow}) => {
    return (
        <ToastContainer position="bottom-center" className="p-3">
            <Toast onClose={() => setShow(false)} show={show} delay={3000} autohide>
                <Toast.Header>
                    <img
                        src="holder.js/20x20?text=%20"
                        className="rounded me-2"
                        alt=""
                    />
                    <strong className="me-auto">Товар добавлен в корзину</strong>
                </Toast.Header>
            </Toast>
        </ToastContainer>
    );
}
export default _Toast;