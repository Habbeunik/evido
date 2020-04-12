import React from 'react';
import PropTypes from 'prop-types';
import { Input as SematicInput } from 'semantic-ui-react';

import styles from './input.module.scss';

const Input = ({ label, ...restProps }) => {
	return (
		<div className={styles.wrapper}>
			<label className={styles.label}>{label}</label>
			<SematicInput {...restProps} className={styles.input} />
		</div>
	);
};

Input.propTypes = {
	label: PropTypes.string
};

export default Input;
