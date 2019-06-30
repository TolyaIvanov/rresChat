import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {Link, withRouter} from 'react-router-dom';

import {
	logoutUser
} from "../../actions/auth/authentication";

import Navbar from './../../components/header/Navbar'

class NavbarContainer extends React.Component {
	onLogout(e) {
		e.preventDefault();
		this.props.logoutUser();
	}

	render() {
		const {isAuthenticated, user} = this.props.auth;

		const authLinks = (
			<ul className={'link-list'}>
				<li>
					<Link to="/users">users</Link>
				</li>
				<li className={'rooms-link'}>
					<Link to="/rooms">rooms</Link>
				</li>
				<li>
					<a href="/" onClick={this.onLogout.bind(this)}>
						<img
							src={user.avatar}
							alt={user.name}
							title={user.name}
							style={{width: '25px', marginRight: '5px'}}
						/>
						Logout
					</a>
				</li>
			</ul>
		);
		const guestLinks = (
			<ul className={'link-list'}>
				<li>
					<Link to="/register">Sign Up</Link>
				</li>
				<li>
					<Link to="/login">Sign In</Link>
				</li>
			</ul>
		);

		return (
			<Navbar>
				{isAuthenticated ? authLinks : guestLinks}
			</Navbar>
		);
	}
}

NavbarContainer.propTypes = {
	logoutUser: PropTypes.func.isRequired,
	auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	auth: state.auth
});

const mapDispatchToProps = dispatch => ({
	logoutUser: () => dispatch(logoutUser())
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(NavbarContainer));
