import React from 'react';
import Input from 'components/input';
import Button from 'components/button';
import { Link } from 'react-router-dom';

import styles from './form.module.scss';
import { Checkbox } from 'semantic-ui-react';

const LoginForm = () => {
	return (
		<form className={styles.form}>
			<div className={styles.underlineBottom}>
				<h3 className={styles.header}>Welcome Back!</h3>
				<Input label='Email' />
				<Input label='Password' type='password' />
				<div className={`${styles.section} flexBetween`}>
					<div>
						<Checkbox className='caption' label='Keep me logged in' />
					</div>
					<Link className={styles.link} to='/'>
						Forgot Password
					</Link>
				</div>
				<Button primary>Submit</Button>
			</div>
			<div className={styles.section} style={{ textAlign: 'center' }}>
				<span className='caption'>
					Don&apos;t have an account yet ?{' '}
					<Link to='/' className={styles.link}>
						Sign up
					</Link>
				</span>
			</div>
		</form>
	);
};

export default LoginForm;
