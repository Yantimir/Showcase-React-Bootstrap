import "./style.css";
import Spinner from 'react-bootstrap/Spinner'

export const Preloader = () => {
  return (
    <div className="wrapper-spinner">
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>

  )
}
