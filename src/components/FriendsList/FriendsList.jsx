import PropTypes from 'prop-types';
import { FriendsItem } from "./FriendItem";
import style from './FriendsList.module.scss'

console.log(style)

export const FriendsList = ({friends}) => {
    return (
        <ul className={style["friend-list"]}>
            {friends.map(friend => (<FriendsItem avatar={friend.avatar} name={friend.name} isOnline={friend.isOnline} key={friend.id} />))}
        </ul>
    )
}


FriendsList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired
    })).isRequired
}
