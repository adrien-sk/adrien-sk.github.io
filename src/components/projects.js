import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import soundboardThumb from '../images/thumbs/soundboard.png';
import battleshipsThumb from '../images/thumbs/battleships.png';

import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'


const Projects = () =>{
	return(
		<section id="projects">
			<div className="inner">
				<h2 data-sal="slide-right" data-sal-delay="200" data-sal-easing="ease" data-sal-duration="600">Projects</h2>
				<h4 data-sal="slide-right" data-sal-delay="200" data-sal-easing="ease" data-sal-duration="600">Some Client Projects, Side Projects and Experiments</h4>
				<div className="projects-container">
					<div className="project">
						<div className="project-image" data-sal="slide-right" data-sal-delay="300" data-sal-easing="ease" data-sal-duration="600">
							<a href="https://github.com/adrien-sk/Discord-Web-Soundboard" target="_blank" rel="noopener noreferrer">
								<img src={soundboardThumb} alt="Discord Soundboard" />
							</a>
						</div>
						<div className="project-content" data-sal="slide-left" data-sal-delay="400" data-sal-easing="ease" data-sal-duration="600">
							<h3 className="project-title">Discord Web Soundboard</h3>
							<div className="project-description">
								<p>Web app built with React, Redux, Passport, Node.js, Express, Socket.IO and PostgreSQL. It provides a live interactive web interface to upload and play sounds into Discord voice channels.</p>
							</div>
							<ul className="project-tech-list">
								<li>React</li>
								<li>Redux</li>
								<li>Passport</li>
								<li>Node.JS</li>
								<li>Express</li>
								<li>Socket.IO</li>
								<li>SASS</li>
								<li>PostgreSQL</li>
								<li>Knex</li>
								<li>Redis</li>
							</ul>
							<div className="project-links">
								<a href="https://github.com/adrien-sk/Discord-Web-Soundboard" target="_blank" className="git-link" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} aria-label="Visit" /></a>
							</div>
						</div>
					</div>

					<div className="project">
						<div className="project-image" data-sal="slide-left" data-sal-delay="300" data-sal-easing="ease" data-sal-duration="600">
							<a href="https://github.com/adrien-sk/Battleships" target="_blank" rel="noopener noreferrer">
								<img src={battleshipsThumb} alt="Battleships" />
							</a>
						</div>
						<div className="project-content" data-sal="slide-right" data-sal-delay="500" data-sal-easing="ease" data-sal-duration="600">
							<h3 className="project-title">Battleships</h3>
							<div className="project-description">
								<p>A singleplayer SPA Battleships game created with Create-react-app</p>
							</div>
							<ul className="project-tech-list">
								<li>Javascript</li>
								<li>React</li>
								<li>SASS</li>
							</ul>
							<div className="project-links">
								<a href="https://adrien-s-battleships.netlify.app/" target="_blank" className="site-link" rel="noopener noreferrer"><FontAwesomeIcon icon={faExternalLinkAlt} aria-label="Visit" /></a>
								<a href="https://github.com/adrien-sk/Battleships" target="_blank" className="git-link" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} aria-label="Visit" /></a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Projects;