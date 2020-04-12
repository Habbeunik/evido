import React from 'react';
import Layout from 'components/layout';
import { Grid } from 'semantic-ui-react';
import LoginForm from 'components/form/loginForm';

/**
 * @param {*} props
 * @return {*}
 */
export default function HomePage() {
	return (
		<Layout>
			<Grid>
				<Grid.Row>
					<Grid.Column width={12}>
						<div className='homePageBanner'>
							<img
								src='https://media.gettyimages.com/photos/many-people-portrait-on-a-tablet-screen-picture-id534158277?s=2048x2048'
								alt='banner'
							/>
						</div>
					</Grid.Column>
					<Grid.Column width={4}>
						<div className='homePageForm'>
							<LoginForm />
						</div>
					</Grid.Column>
				</Grid.Row>
			</Grid>
		</Layout>
	);
}
