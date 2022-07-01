import style from "./style.module.css";
// import classnames from "classnames";
import Spinner from 'react-bootstrap/Spinner'

export const Preloader = () => {
  return (
    // <div className={style["wrapper-spinner"]}>
    //   <div className={classnames(style.spinner, style.spinner__gray)}></div>
    // </div>
    <div className={style["wrapper-spinner"]}>
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
    </div>

  )
}
