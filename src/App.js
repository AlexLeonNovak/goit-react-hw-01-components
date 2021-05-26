import 'modern-normalize/modern-normalize.css';

import Profile from './components/Profile/Profile';

import userProfileData from './assets/json/user.json';
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
		</div>
	);
}

export default App;
