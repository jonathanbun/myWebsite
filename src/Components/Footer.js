import React from 'react';

const Footer = () => {
	return (
		<div className="footer">
			<div className="container">
				<div className="row">
					<div className="col-lg-4 col-md-6 col-sm-6">
						<div className="d-flex">
							<p>This website is open-sourced on <a href="https://github.com/jonathanbun/myWebsite"> Github </a> </p>
						</div>
						
					</div>
					<div className="col-lg-3 col-md-2 col-sm-6">
						<div className="row">
							<div className="col">
								<a className="footer-nav">Home</a>
								<br />
								<a className="footer-nav">About</a>
								<br />
								<a className="footer-nav">Contact</a>
							</div>
						</div>
					</div>
					</div>
				</div>
			</div>
		)
}

export default Footer;