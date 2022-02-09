import PropTypes from "prop-types";
import s from './Profile.module.css';


const Profile = ({ username, tag, location, avatar, stats: { followers, views, likes } }) => {
  return (
        <div className={s.profile}>
  <div className={s.description}>
    <img
      src={avatar}
      alt="User avatar"
      className={s.avatar}
    />
    <p className={s.name}>{username}</p>
    <p className={s.tag}>{tag}</p>
    <p className={s.location}>{location}</p>
  </div>

  <ul className={s.stats}>
    <li className={s.item}>
      <span className={s.label}>Followers</span>
      <span className={s.qua}>{followers}</span>
    </li>
    <li className={s.item}>
      <span className={s.label}>Views</span>
      <span className={s.qua}>{views}</span>
    </li>
    <li className={s.item}>
      <span className={s.label}>Likes</span>
      <span className={s.qua}>{likes}</span>
    </li>
  </ul>
    </div>
    );
};

Profile.propTypes = {
    username: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    stats: PropTypes.objectOf(PropTypes.number.isRequired)
};

export default Profile;