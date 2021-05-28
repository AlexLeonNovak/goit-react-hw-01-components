import styles from './Statistics.module.css';

export default function Statistics({ title, stats }) {
	const colors = ['#c62828', '#1e88e5', '#f9a825', '#388e3c', '#ff5722'];
	return (
		<section className={styles.statistics}>
			{title ? <h2 className={styles.title}>{title}</h2> : ''}

			<ul className={styles.statList}>
				{stats.map(({ id, label, percentage }, index) => (
					<li
						key={id}
						className={styles.item}
						style={{ backgroundColor: colors[index] }}
					>
						<span className={styles.label}>{label}</span>
						<span className={styles.percentage}>{percentage}</span>
					</li>
				))}
			</ul>
		</section>
	);
}
