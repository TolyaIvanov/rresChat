import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {withRouter, Switch, Route} from 'react-router-dom';

import Chat from '../../components/chat/Chat';
import RegisterContainer from "../auth/RegisterContainer";
import LoginContainer from "../auth/LoginContainer";

class ChatContainer extends React.Component {
	render() {
		const {isAuthenticated} = this.props.auth;

		return isAuthenticated && (
			<Chat>

			</Chat>
		);
	}
}

ChatContainer.propTypes = {
	auth: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	auth: state.auth
});

const mapDispatchToProps = dispatch => ({});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(ChatContainer));
