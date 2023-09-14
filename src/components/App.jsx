import Profile from "./Profile";
import user from '../data/user.json'
import Statistics from "./Statistics";
import data from '../data/data.json'
import FriendList from "./FriendList";
import friends from '../data/friends.json'


export const App = () => {
  return (
    <div>
      <Profile
        src={user.avatar}
        name={user.username}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
    
      <Statistics
        title="Upload stats"
        stats={data}
      />

      <FriendList
        friends = {friends}
      />    
      
    </div>
   
  );
};
