const FriendListItem = ({avatar, name, isOnline}) => {
    return <><span className={isOnline ? "statusOnline":"statusOffline"}></span>
        <img className="avatar" src={avatar} alt="User avatar" width="48" />
        <p className="name">{ name}</p></>
    
}
export default FriendListItem