import Information from './Components/Information/Information.js';
import Field from './Components/Field/Field.js';
import styles from './App.module.css';
import { useEffect, useState } from 'react';

import PropTypes from 'prop-types';

const initialField = [];
for (let i = 0; i < 9; i++) {
	initialField.push({cell: '', key: i, winner: 0});
}
//console.log(initialField);

const WIN_PATTERNS = [
	[0, 1, 2], [3, 4, 5], [6, 7, 8], // Варианты побед по горизонтали
	[0, 3, 6], [1, 4, 7], [2, 5, 8], // Варианты побед по вертикали
	[0, 4, 8], [2, 4, 6] // Варианты побед по диагонали
];

// Проверка на наличие паттернов победы
const checkWin = (field) => {
	for (let pattern of WIN_PATTERNS) {
		const [a, b, c] = pattern;
		if (field[a]['cell'] && field[a]['cell'] === field[b]['cell'] && field[a]['cell'] === field[c]['cell']) {
			field[a]['winner'] = 1;
			field[b]['winner'] = 1;
			field[c]['winner'] = 1;
			return field[a]['cell']; // Возвращаем значение игрока, который выиграл
		}
	}
	return null; // Если выигрышной комбинации нет
}

// Проверка на пустые ячейки, возвращает true, если они есть
const checkEmpty = (field) => (
	field.some(item => !item.cell) // выдает true, если есть хотя бы одна пустая клетка
)

const AppLayout = ({ isDraw, isGameEnded, currentPlayer, fields, makeMove, reset}) => {

	return <div className={styles.app}>
		<h1 className={styles.header}>Крестики-нолики</h1>
		<Information
			isDraw={isDraw}
			isGameEnded={isGameEnded}
			currentPlayer={currentPlayer}
		/>
		<Field fields={fields} makeMove={makeMove} currentPlayer={currentPlayer}/>
		<button className={styles.reset} onClick={reset}>Начать заново</button>
	</div>
};

export const App = () => {

	const [fields, setFields] = useState(initialField);
	//console.log(typeof fields);

	useEffect(function(){
		console.log(fields);
	}, [fields]);

	const [currentPlayer, setCurrentPlayer] = useState('X');
	const [isGameEnded, setIsGameEnded] = useState(false);
	const [isDraw, setIsDraw] = useState(false);

	const makeMove = (cell, key) => {

		const updatedFields = fields.map(item => {
			if (item.key === key && cell === '' && !isGameEnded) {
				return {
					...item, // Копируем все свойства
					'cell': currentPlayer, // Обновляем только нужное поле cell
				};
			}

			return item; // Возвращаем элемент без изменений
		});

		setFields(updatedFields);

		if(checkWin(updatedFields)) {
			setIsGameEnded(true);
		} else if (!checkEmpty(updatedFields)) {
			setIsDraw(true); //если нет пустых полей, ничья
			//console.log(`isDraw ${isDraw}`)
		} else {
			currentPlayer === 'X' ? setCurrentPlayer('O') : setCurrentPlayer('X');
		}

	}

	const reset = () => {
		setFields(initialField);

		setCurrentPlayer('X');
		setIsGameEnded(false);
		setIsDraw(false);
	}

	//console.log(field);

	return (
		<AppLayout
			fields={fields}
			isDraw={isDraw}
			isGameEnded={isGameEnded}
			currentPlayer={currentPlayer}
			makeMove={makeMove}
			reset={reset}
		/>
	);
};

AppLayout.propTypes = {
	field: PropTypes.array,
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	currentPlayer: PropTypes.string,
	makeMove: PropTypes.func,
	reset: PropTypes.func
}
