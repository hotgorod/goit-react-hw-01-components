import css from './Friendslist.module.css'

const FriendListItem = ({ avatar, name, isOnline }) => {
    return <><span className={isOnline ? css.statusOnline : css.statusOffline}></span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{ name}</p></>
    
}
export default FriendListItem