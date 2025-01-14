import { FieldLayout } from './FieldLayout';
import PropTypes from 'prop-types';

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
