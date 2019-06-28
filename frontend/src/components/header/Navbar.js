import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './Navbar.css'

class Navbar extends Component {
	render() {
		return (
			<nav className={'navbar'}>
				<Link to="/">home</Link>
				<div className={'auth-links'}>
					{this.props.children}
				</div>
			</nav>
		)
	}
}

export default Navbar