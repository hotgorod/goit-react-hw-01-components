import PropTypes from 'prop-types';
import css from './Profile.module.css'

const Profile = ({ src, name, tag, location, followers, views, likes }) => { 
  
  return <div className={css.profile}>
  <div className={css.description}>
    <img
      src={src}
      alt={name}
      className={css.avatar}
    />
    <p className="name">{name}</p>
    <p className="tag">@{tag}</p>
    <p className="location">{location}</p>
  </div>

  <ul className={css.stats}>
    <li className={css.liItem}>
      <span className="label">Followers</span>
      <span className="quantity">{followers}</span>
    </li>
    <li className={css.liItem}>
      <span className="label">Views</span>
      <span className="quantity">{views}</span>
    </li>
    <li className={css.liItem}>
      <span className="label">Likes</span>
      <span className="quantity">{likes}</span>
    </li>
  </ul>
</div>
}

Profile.propTypes = {
  src: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  name: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
}
export default Profile;