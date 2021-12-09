import React from 'react';
import me from "../Assets/me.jpeg";

const About = () => {
	return (
		<div className="container py-5">
			<div className="row">
				<div className="col-lg-6 col-xm-12">
					<div className="photo-wrap mb-5">
					<img className="profile-img"
								src={me} 
								alt="My photo"/>
					</div>
				</div>
				<div className="col-lg-6 col-xm-12">
					<h1 className="about-heading"> About me</h1>
					<p>
						the dihao troajth ohaoiht ohaoi oaihtrr aoiohaio, 
						akhtok oahor odfhadofh. dlafadlfj faljad;fj dfh adk 
						adfdlafkjh  adlfhad kfllh fal dfhkdlhfakl f
						gfkangkfghf
					</p>
				</div>
				 </div>
			</div>
		)
}

export default About;