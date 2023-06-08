import { useState } from 'react';
import styles from './Game.module.css';
import { FieldLayout } from '../Field/Field';
import { InformationLayout } from '../Information/Information';

const GameLayout = () => {
	return <button className={styles.updateField}>Начать заново</button>;
};

export const GameContainer = () => {
	const [currenPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);
	const [field, setField] = useState(Array(9).fill(''));
	const WIN_PATTERNS = [
		[0, 1, 2],
		[3, 4, 5],
		[6, 7, 8],
		[0, 3, 6],
		[1, 4, 7],
		[2, 5, 8],
		[0, 4, 8],
		[2, 4, 6],
	];

	// setCurrentPlayer(currenPlayer === 'X' ? 'O' : 'X');
	return (
		<div className={styles.container}>
			<InformationLayout
				isDraw={isDraw}
				isGameEnded={isGameEnded}
				currenPlayer={currenPlayer}
			></InformationLayout>
			<FieldLayout
				field={field}
				setField={setField}
				currenPlayer={currenPlayer}
				setCurrentPlayer={setCurrentPlayer}
				isGameEnded={isGameEnded}
				setIsGameEnded={setIsGameEnded}
				isDraw={isDraw}
				setIsDraw={setIsDraw}
				WIN_PATTERNS={WIN_PATTERNS}
			></FieldLayout>
			<GameLayout></GameLayout>
		</div>
	);
};
