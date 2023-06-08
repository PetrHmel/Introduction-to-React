import React from 'react';
import styles from './Field.module.css';

export const FieldLayout = (props) => {
	const onClick = (event) => {
		if (props.isGameEnded === false) {
			for (let i = 0; i < props.WIN_PATTERNS.length; i++) {
				let arrayPlayerValues = props.WIN_PATTERNS[i].map(
					(index) => props.field[index],
				);
				let ferstElem = arrayPlayerValues[0];
				let examination = arrayPlayerValues.every(
					(elem) => elem === ferstElem && ferstElem,
				);
				console.log(examination);
				// if (examination) {
				// 	props.setIsGameEnded(!props.isGameEnded);
				// }
			}
			let currentState = [...props.field];
			props.setCurrentPlayer(props.currenPlayer === 'X' ? 'O' : 'X');
			let data = event.target.getAttribute('data');
			if (currentState[data] === '' && props.isGameEnded !== true) {
				currentState.splice(data, 1, props.currenPlayer);
				props.setField(currentState);
			}
		}
	};

	return (
		<div className={styles.app}>
			{props.field.map((item, index) => {
				return (
					<button
						key={index}
						className={styles.blocks}
						onClick={onClick}
						data={index}
					>
						{item}
					</button>
				);
			})}
		</div>
	);
};
