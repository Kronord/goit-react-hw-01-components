import propTypes from "prop-types";
import s from './FriendListItem.module.css';

const FriendsListItem = ({avatar, name, isOnline}) => { 
    return (
        <li className={s.item}>
            <span className={isOnline ? s.online : s.offline}></span>
            <img className={s.avatar} src={avatar} alt="User avatar" width="48" />
            <p className={s.name}>{name}</p>
        </li>
    );
};

FriendsListItem.propTypes = {
    avatar: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    isOnline: propTypes.bool.isRequired,
};

export default FriendsListItem;