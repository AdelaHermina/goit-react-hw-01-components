import React from 'react';
import Profile from './Profile/Profile'; 
import Statistics from './Statistics/Statistics';
import FriendList from './FriendList/FriendList';
import TransactionHistory from './TransactionHistory/TransactionHistory';
import user from '../components/user.json'; 
import data from '../components/data.json'; 
import friends from '../components/friends.json'; 
import transaction from '../components/transaction.json'; 

function App() {
    return (
        <div>
            <Profile
                username={user.username}
                tag={user.tag}
                location={user.location}
                avatar={user.avatar}
                stats={user.stats}
            />
            <Statistics title="Upload stats" stats={data} />
            <FriendList friends={friends} /> 
             <TransactionHistory items={transaction} />
        </div>
    );
}
export default App;
