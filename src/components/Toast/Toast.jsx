import { Toast, ToastContainer } from "react-bootstrap";
import { Icon28ShoppingCartOutline } from '@vkontakte/icons';

const _Toast = ({ show, setShow }) => {
    return (
        <ToastContainer position="middle-center" className=" p-3">
            <Toast bg="secondary" onClose={() => setShow(false)} show={show} delay={3000} autohide>
                <Toast.Header>
                    <strong className="me-auto">
                        {/* <Icon28ShoppingCartOutline width={25} height={25} fill="#747474" /> */}
                    </strong>
                </Toast.Header>
                <Toast.Body className='secondary text-white'>
                    <h6>
                        Товар добавлен в корзину
                    </h6>
                </Toast.Body>
            </Toast>
        </ToastContainer>
    );
}
export default _Toast;