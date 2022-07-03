import { Icon24LikeOutline } from '@vkontakte/icons';
import { Icon24Like } from '@vkontakte/icons';

export const FavoriteCard = ({ favoritesCards, id }) => {

    let isLike = favoritesCards.some(item => item.like === id);

    return (
        <> {isLike
            ? <Icon24Like width={25} height={25} fill="#57bee6" />
            : <Icon24LikeOutline width={25} height={25} fill="#57bee6" />
        }
        </>
    )
}
