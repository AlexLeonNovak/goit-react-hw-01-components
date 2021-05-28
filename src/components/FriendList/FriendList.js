import PropTypes from 'prop-types';
import FriendListItem from '../FriendListItem/FriendListItem';

import styles from './FriendList.module.css';

export default function FriendList({ friends }) {
	return (
		<ul className={styles.friendList}>
			{friends.map(({ id, avatar, name, isOnline }) => (
				<FriendListItem
					key={id}
					isOnline={isOnline}
					avatar={avatar}
					name={name}
				/>
			))}
		</ul>
	);
}

FriendList.defaultProps = {
	friends: [],
};

FriendList.propTypes = {
	friends: PropTypes.array,
};
