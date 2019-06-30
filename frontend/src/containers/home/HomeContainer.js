import React from 'react'
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {Link, withRouter} from 'react-router-dom';

import Home from './../../components/home/Home';

class HomeContainer extends React.Component {
	render() {
		const {isAuthenticated, user} = this.props.auth;
		const guestInfo = (
			<div className={'preview'}>
				sign up for chat
			</div>
		);

		const chatInfo = (
			<div>
				<p>
					это превью страница, пользователи и комнаты в навбаре
				</p>
				<hr/>
				<hr/>
				<hr/>
				<p>
					Я знаю, что чат - плох, от аутентификации до его самого, но это же тестовое(хотя это не оправдание),
					да и хороший чат за
					неделю не сдалаешь))))
				</p>
				<hr/>
				<p>
					хотя может и сделаешь, но я бы не смог
				</p>
			</div>
		);

		return (
			<Home>
				{isAuthenticated ? chatInfo : guestInfo}
			</Home>
		);
	}
}

const mapStateToProps = (state) => ({
	auth: state.auth
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(HomeContainer));
