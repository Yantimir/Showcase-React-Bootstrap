import { Icon28FavoriteOutline } from '@vkontakte/icons';
import "./style.css";

export const Favorite = ({color}) => {
    return (
        <div className="favorite">
            <Icon28FavoriteOutline width={25} height={25} fill={color} />
        </div>
    )
}
