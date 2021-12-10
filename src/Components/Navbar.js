import react from "react";
import { Link } from  "react-scroll";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
	return (
		<nav className="navbar navbar-expand-lg bg-color fixed-top">
			<div className="container">
  				<h2 className="name">Jonathan Bunnell</h2>
  					<button className="navbar-toggler" 
  						type="button" 
  						data-toggle="collapse" 
  						data-target="#navbarSupportedContent" 
  						aria-controls="navbarSupportedContent" 
  						aria-expanded="false" 
  						aria-label="Toggle navigation">
  						<FontAwesomeIcon  icon={faBars} 
  															className="menu-icon"/>
  					</button>
 				 <div className="collapse navbar-collapse"
 				 			id="navbarSupportedContent">
    				<ul className="navbar-nav ms-auto">
      					<li className="nav-item active">
        					<Link 
        						smooth={true} 
        						to="home" 
        						offset={-110} 
        						className="nav-link" 
        						href="#">Home
        					</Link>
      					</li>
      					<li className="nav-item">
        					<Link 
        						smooth={true} 
        						to="about" 
        						offset={-110} 
        						className="nav-link" 
        						href="#">About
        					</Link>
     					 </li>
     					 <li className="nav-item">
        					<Link 
        						smooth={true} 
        						to="resume" 
        						offset={-110} 
        						className="nav-link" 
        						href="#">Resume
        					</Link>
     					 </li>
     					 <li className="nav-item">
        					<Link  
        						smooth={true} 
        						to="contact" 
        						offset={-110} 
        						className="nav-link" 
        						href="#">Contact
        					</Link>
     					 </li>
   					 </ul>
  				</div>
  			</div>
		</nav>
	)
}

export default Navbar;