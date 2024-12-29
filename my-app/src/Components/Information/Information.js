import styles from './Information.module.css';
import PropTypes from 'prop-types';

const InformationLayout = ({isDraw, isGameEnded, currentPlayer}) => (
	<h3 className={styles.info}>
		{isDraw === false ? isGameEnded === true ? <>Победа <span className={currentPlayer === 'X' ? styles.playerX : styles.playerO}>{currentPlayer}</span>!</> : <>Ходит: <span className={currentPlayer === 'X' ? styles.playerX : styles.playerO}>{currentPlayer}</span></> : 'Ничья!'}
	</h3>
);

const Information = ({isDraw, isGameEnded, currentPlayer}) => {
	return <InformationLayout isDraw={isDraw} isGameEnded={isGameEnded} currentPlayer={currentPlayer}/>;
};

InformationLayout.propTypes = {
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	currentPlayer: PropTypes.string
}

Information.propTypes = {
	isDraw: PropTypes.bool,
	isGameEnded: PropTypes.bool,
	currentPlayer: PropTypes.string
}

export default Information;
