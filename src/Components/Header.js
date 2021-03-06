import react from "react";
import Typed from "react-typed";
const Header = () => {
	return (
		<div id="home" className="header-wrapper">
			<div className="main-info">
				<Typed 
					className="typed-text"
					strings={["Computer Science", "Web Development", "Javascript", "React", "Python"]}
					typeSpeed={70}
					backSpeed={60}
					loop
				/>
				<a href='#contact'
					className="btn-main-offer"> Contact me
				</a>
			</div>
		</div>
		)
}

export default Header;