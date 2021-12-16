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
						I have just graduated from Colorado State University with a B.S. in Computer Science and a minor in Math.
					<p>
						Prior to my studies, I served in the U.S. Coast Guard for six years. I've fixed buoys,
						pulled people out of the water, and enforced commerical fishing laws.
					<p>
						This website is a work-in-progress. I am building this site to teach myself React. My next addition will be a carousel component that will include links to my future personal projects!
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