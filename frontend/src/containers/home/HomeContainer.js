import React from 'react'
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {Link, withRouter} from 'react-router-dom';

import Home from './../../components/home/Home';

import ChatContainer from '../chat/ChatContainer'

class HomeContainer extends React.Component {
	render() {
		const {isAuthenticated, user} = this.props.auth;
		const guestInfo = (
			<div className={'preview'}>
				sign up for chat
			</div>
		);

		return (
			<Home

			>
				{isAuthenticated ? (<ChatContainer/>) : guestInfo}
			</Home>
		);
	}
}

const mapStateToProps = (state) => ({
	auth: state.auth
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HomeContainer));
