import 'modern-normalize/modern-normalize.css';

import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';

import userProfileData from './assets/json/user.json';
import statisticalData from './assets/json/statistical-data.json';
import friendsData from './assets/json/friends.json';
import transactionsData from './assets/json/transactions.json';

import './App.css';

function App() {
	return (
		<div className="container">
			<Profile
				name={userProfileData.name}
				tag={userProfileData.tag}
				location={userProfileData.location}
				avatar={userProfileData.avatar}
				stats={userProfileData.stats}
			/>
			<Statistics title="Upload stats" stats={statisticalData} />
			<Statistics stats={statisticalData} />
			<FriendList friends={friendsData} />
			<TransactionHistory transactions={transactionsData} />
		</div>
	);
}

export default App;
