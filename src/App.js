import 'modern-normalize/modern-normalize.css';

import Profile from './components/Profile/Profile';
import Statistics from './components/Statistics/Statistics';

import userProfileData from './assets/json/user.json';
import statisticalData from './assets/json/statistical-data.json';

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
		</div>
	);
}

export default App;
