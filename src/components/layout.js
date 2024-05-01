import React from 'react';
import Footer from './footer';
import Header from './header';

import '../styles/site.scss'

const Layout = (props) => {
	return(
		<div id="root">
			<div className="site-container">
				<Header />
				<div className="page-content">
					{props.children}
				</div>
			</div>
			<Footer />
		</div>
	);
}

export default Layout;