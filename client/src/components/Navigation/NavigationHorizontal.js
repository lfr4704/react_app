import React from 'react'
import './Navigation.css'
import {Fabars} from 'react-icons/lib/fa';

class Navigation extends React.Component {
	render(){
		return (
			<nav>
				<div className="toggle">
					<i className="fa fa-bars" aria-hidden="true" onClick={this.props.toggleMenu}></i>				
				</div>
				<div>
					{this.props.isHidden &&
					<ul>
						<li><a href="#">Home</a></li>
						<li><a href="#">About</a></li>
						<li><a href="#">Services</a></li>	
						<li><a href="#">Testimonials</a></li>
						<li><a href="#">Contact</a></li>															
					</ul>
					}
				</div>
			</nav>

		);
	}
}

export default Navigation; 
