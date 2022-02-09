import propTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';
import s from './FriendList.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={s.friendList}>
      {friends.map(({ avatar, name, isOnline, id }) => {
          return <FriendListItem
              avatar={avatar}
              name={name}
              isOnline={isOnline}
              key={id}
          />;
      })}
    </ul>
  );
};

FriendList.propTypes = {
    friends: propTypes.arrayOf(propTypes.object),
}

export default FriendList;
