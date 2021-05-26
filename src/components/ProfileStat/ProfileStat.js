import PropTypes from 'prop-types';

import styles from './ProfileStat.module.css';

export default function ProfileStat({ label, quantity }) {
	return (
		<>
			<span className={styles.label}>{label}</span>
			<span className={styles.quantity}>{quantity}</span>
		</>
	);
}

ProfileStat.propTypes = {
	label: PropTypes.string.isRequired,
	quantity: PropTypes.number.isRequired,
};
