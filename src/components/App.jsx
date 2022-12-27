import { Profile } from "./Profile/Profile";
import user from './Profile/user'
import { Statistic } from './Statistics/Statistics';
import data from './Statistics/data';
import { FriendsList } from './FriendsList/FriendsList';
import friends from './FriendsList/friends'
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import transactions from './TransactionHistory/transactions'


export const App = () => {
  return (
    <>
      <Profile 
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
        style={{
          height: '100vh',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 40,
          color: '#010101'
        }}
        title="title"
      />
      <Statistic title="Upload stats" datas={data} />
      <FriendsList friends={friends} />
      <TransactionHistory transactions={transactions}/>
    </>
  );
};


