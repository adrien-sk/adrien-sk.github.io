import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faItchIo } from '@fortawesome/free-brands-svg-icons'
import { faCode} from '@fortawesome/free-solid-svg-icons'

const Header = () => {
	return(
		<header data-sal="fade" data-sal-delay="0" data-sal-easing="ease" data-sal-duration="500">
			<div className="overlay"></div>
			<div className="name">
				<h1 data-sal="fade" data-sal-delay="300" data-sal-easing="ease" data-sal-duration="500">Adrien Skrzypczak</h1>
				<h2 data-sal="fade" data-sal-delay="400" data-sal-easing="ease" data-sal-duration="500">Full-Stack Software Engineer</h2>
			</div>
			<div className="contacts">
				<h3 data-sal="fade" data-sal-delay="600" data-sal-easing="ease" data-sal-duration="500">You can also find me on</h3>
				<div className="inner">
					<a href="https://github.com/adrien-sk" target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faGithub} data-sal="slide-down" data-sal-delay="700" data-sal-easing="ease" data-sal-duration="500"/>
						</a>
					<a href="https://www.linkedin.com/in/adrien-skrzypczak/" target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faLinkedin} data-sal="slide-down" data-sal-delay="800" data-sal-easing="ease" data-sal-duration="500"/>
						</a>
					<a href="https://adrien-s.itch.io/" target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faItchIo} data-sal="slide-down" data-sal-delay="900" data-sal-easing="ease" data-sal-duration="500"/>
						</a>
					<a href="https://leetcode.com/u/Nadriel/" target="_blank" rel="noopener noreferrer">
						<FontAwesomeIcon icon={faCode} data-sal="slide-down" data-sal-delay="1000" data-sal-easing="ease" data-sal-duration="500"/>
						</a>
				</div>
			</div>
		</header>
	);
}

export default Header;