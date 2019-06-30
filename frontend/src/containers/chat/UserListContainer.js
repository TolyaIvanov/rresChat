import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';
import socketIOClient from 'socket.io-client';

import UserList from './../../components/chat/UserList';


class UserListContainer extends React.Component {
	componentDidMount() {
		this.socket = socketIOClient('http://localhost:5000/', {
			query: 'uid=' + this.props.auth.user.id
		});
		this.socket.on('updateUsersList', function (users) {
			console.log(users);

			this.setState({
				users: users
			});
		}.bind(this));
	}

	render() {
		const {isAuthenticated} = this.props.auth;

		return isAuthenticated && (
			<UserList

			>

			</UserList>
		);
	}
}


const mapStateToProps = (state) => ({
	auth: state.auth
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(UserListContainer));
