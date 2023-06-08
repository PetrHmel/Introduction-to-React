import styles from './Information.module.css';

export const InformationLayout = ({ isDraw, isGameEnded, currenPlayer }) => {
	let status = '';
	if (isDraw === true) {
		status = 'Ничья';
		currenPlayer = '';
	} else if (isDraw === false && isGameEnded === true) {
		status = 'Победа:';
	} else if (isDraw === false && isGameEnded === false) {
		status = 'Ходит:';
	}
	return <div className={styles.info}>{`${status} ${currenPlayer}`}</div>;
};
