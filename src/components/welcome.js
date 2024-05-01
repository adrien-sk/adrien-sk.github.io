import React from 'react';

import profileImage from '../images/avatar.png';

const Welcome = () =>{
	return(
		<section id="welcome" data-sal="slide-up" data-sal-delay="200" data-sal-easing="ease" data-sal-duration="800">
			<div className="inner">
				<img src={profileImage} alt="Profile"/>
				<div class="profile-description">
					<h3>Hello, I'm Adrien,</h3>
					<h3>a Full-Stack Software Engineer</h3>
					<p>I have ~<strong>10 years of experience</strong> in different languages and platforms, but a longer affinity for <strong>Computer Science</strong>.</p>
					<br />
					<p>I'm working with multiples Front-end technologies like <strong>HTML</strong>, <strong>CSS</strong>, <strong>Typescript</strong> and its latest friends (<strong>NodeJS</strong>, <strong>Angular</strong>, <strong>React</strong>, <strong>Next.JS</strong>, <strong>Express</strong>, ...)</p>
					<br />
					<p>Also proficient with <strong>C#</strong>, working with <strong>.Net Core</strong>, <strong>SQL Server</strong> and <strong>Oracle</strong>. </p>
					<br />
					<p>Currently digging into <strong>Go</strong> Language, I've also worked with <strong>PHP</strong>, <strong>Python</strong>, <strong>Java</strong>, ...</p>
					<p>Very <strong>Curious</strong> and <strong>Interested</strong> in new technologies, I love <strong>Learning</strong>, <strong>Discovering</strong>, and <strong>Building things</strong>.</p>
					<br />
					<p>I focus on developing <strong>Quality</strong> and <strong>Functional</strong> products.</p>
				</div>
			</div>
		</section>
	);
}

export default Welcome;
