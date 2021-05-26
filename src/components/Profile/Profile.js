import PropTypes from 'prop-types';
import ProfileStat from '../ProfileStat/ProfileStat';

import styles from './Profile.module.css';

export default function Profile({ name, tag, location, avatar, stats }) {
	return (
		<>
			<div className={styles.profile}>
				<div className={styles.description}>
					<img src={avatar} alt={name} className={styles.avatar} />
					<p className={styles.name}>{name}</p>
					<p className={styles.tag}>@{tag}</p>
					<p className={styles.location}>{location}</p>
				</div>

				<ul className={styles.stats}>
					{Object.keys(stats).map(key => (
						<li key={key} className={styles.statsItem}>
							<ProfileStat label={key} quantity={stats[key]} />
						</li>
					))}
				</ul>
			</div>
		</>
	);
}

Profile.propTypes = {
	name: PropTypes.string.isRequired,
	tag: PropTypes.string.isRequired,
	location: PropTypes.string.isRequired,
	avatar: PropTypes.string.isRequired,
	stats: PropTypes.object.isRequired,
};
