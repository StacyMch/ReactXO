import styles from './Field.module.css';
import PropTypes from 'prop-types';

const FieldLayout = ({ fields, makeMove }) => {
	return <div className={styles.container}>
		<div className={styles.board}>
			{fields.map(({ cell, key, winner }) => (
				<div key={key} className={styles.cell + ' ' + (winner ? styles.winner : '')} onClick={() => makeMove(cell, key)}>
					<span className={cell === 'X' ? styles.playerX : styles.playerO}>{cell}</span>
				</div>
			))}
		</div>
	</div>
};

const Field = ({ fields, makeMove}) => {
	return <FieldLayout fields={fields} makeMove={makeMove}/>;
};

FieldLayout.propTypes = {
	field: PropTypes.array,
	makeMove: PropTypes.func
}

Field.propTypes = {
	field: PropTypes.array,
	makeMove: PropTypes.func
}

export default Field;
