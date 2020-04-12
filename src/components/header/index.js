import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

import styles from './header.module.scss';

const Link = ({ anchor, to }) => (
	<NavLink to={to} className={styles.navLink}>
		{anchor}
	</NavLink>
);

Link.propTypes = {
	anchor: PropTypes.string,
	to: PropTypes.string
};

/**
 * @return {*}
 */
export default function Header() {
	return (
		<div className={styles.container}>
			<h3 className={styles.logo}>Evido</h3>
			<div className={styles.nav}>
				<Link anchor='Join a Meeting' to='/join' />
				<Link anchor='Schedule Meeting' to='/join' />
			</div>
		</div>
	);
}

Header.propType = {
	title: PropTypes.string
};

Header.defaultProps = {
	title: 'Header'
};
