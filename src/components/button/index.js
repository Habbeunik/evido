import React from 'react';
import { Button as SemanticButton } from 'semantic-ui-react';

import styles from './button.module.scss';

const Button = props => <SemanticButton {...props} className={styles.button} />;

export default Button;
