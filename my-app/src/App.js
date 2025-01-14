import Information from './Components/Information/Information.js';
import Field from './Components/Field/Field.js';
import styles from './App.module.css';
import { useEffect, useState } from 'react';
import { INITIAL_FIELD } from './constants/constants.js';
import { checkWin, checkEmpty } from './utils/utils.js';

import PropTypes from 'prop-types';

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

	const [fields, setFields] = useState(INITIAL_FIELD);
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
		setFields(INITIAL_FIELD);

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
