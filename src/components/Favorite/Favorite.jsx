// import { Icon28FavoriteOutline } from '@vkontakte/icons';
import { Icon24HealthOutline } from '@vkontakte/icons';
import "./style.css";
// import Modal from "../Modal/Modal";

export const Favorite = (props) => {

    const { favoritesCount = 0 } = props;

    return (
        <>
            <div className="favorite">
                <div className="favorite__inner">
                    <Icon24HealthOutline width={30} height={30} fill="#57bee6" />
                </div>
                {favoritesCount
                    ? <div className="favorite__favoritesCount">
                        {favoritesCount}
                    </div>
                    : null
                }
            </div>
        </>
    )
}
