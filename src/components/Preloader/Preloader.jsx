import style from "./style.module.css";
import classnames from "classnames";

export const Preloader = () => {
  return (
    <div className={style["wrapper-spinner"]}>
      <div className={classnames(style.spinner, style.spinner__gray)}></div>
    </div>
  )
}
