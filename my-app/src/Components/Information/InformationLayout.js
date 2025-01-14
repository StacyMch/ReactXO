import styles from './Information.module.css';

export const InformationLayout = ({isDraw, isGameEnded, currentPlayer}) => (
	<h3 className={styles.info}>
		{isDraw === false ? isGameEnded === true ? <>Победа <span className={currentPlayer === 'X' ? styles.playerX : styles.playerO}>{currentPlayer}</span>!</> : <>Ходит: <span className={currentPlayer === 'X' ? styles.playerX : styles.playerO}>{currentPlayer}</span></> : 'Ничья!'}
	</h3>
);
