import Information from './Components/Information/Information.js';
import Field from './Components/Field/Field.js';
import styles from './App.module.css';

export const AppLayout = ({ isDraw, isGameEnded, currentPlayer, fields, makeMove, reset}) => {

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
