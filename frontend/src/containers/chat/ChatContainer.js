import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {Link, withRouter} from 'react-router-dom';

import Chat from '../../components/chat/Chat';

class ChatContainer extends React.Component {
	render() {
		return (
			<Chat

			>

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
