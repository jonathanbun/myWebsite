import React from 'react';
import me from "../Assets/me.jpeg";

const About = () => {
	return (
		<div id = "about" className="container py-5">
			<div className="row">
				<div className="col-lg-6 col-xm-12">
					<div className="photo-wrap mb-5">
					<img className="profile-img"
								src={me} 
								alt="My photo"/>
					</div>
				</div>
				<div className="col-lg-6 col-xm-12">
					<h1 className="about-heading">About me</h1>
					<p>
						Hello! Thank you for taking the time to check out my website! 
					<p>
						I am currently studying Computer Science (BS) and Math (Minor) at Colorado State
						University. My dream job is in Web Development.
					<p>
						Prior to my studies, I served in the U.S. Coast Guard for six years. I've fixed buoys,
						pulled people out of the water, and enforced commerical fishing laws.
					<p>
						This website is a work in-progress. I created it to learn React, and 
						it will evolve as I learn more skills.
					</p> 
					</p>
					</p>
					</p>
				</div>
			</div>
		</div>
	)
}

export default About;