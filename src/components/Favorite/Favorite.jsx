import { Icon28FavoriteOutline } from '@vkontakte/icons';
import "./style.css";

export const Favorite = ({ favoritesCards }) => {

    console.log(favoritesCards?.lenght);
    return (
        <div>
            <div className="favorite">
                <Icon28FavoriteOutline width={25} height={25} fill="#57bee6" />
            </div>
            {/* {value
                ? <div>
                    {value}
                </div>
                : null
            } */}
        </div>

    )
}
