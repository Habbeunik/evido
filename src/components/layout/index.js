import React from 'react';
import PropTypes from 'prop-types';
import Header from 'components/header';
import { Container } from 'semantic-ui-react';

import styles from './layout.module.scss';

const Layout = ({ children }) => {
	return (
		<Container>
			<Header />
			<div className={styles.body}>{children}</div>
		</Container>
	);
};

Layout.propTypes = {
	children: PropTypes.any
};

export default Layout;
