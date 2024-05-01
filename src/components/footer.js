import React from 'react';

const Footer = () => {
	return(
		<footer>
			<p><span role="img" aria-label="Pixelated Icon">👾</span></p>
			<p>SKRZYPCZAK ADRIEN ©{new Date().getFullYear()}</p>
		</footer>
	);
}

export default Footer;