import React from 'react';
import PropTypes from 'prop-types';
import {connect} from "react-redux";
import {withRouter} from 'react-router-dom';

import Rooms from './../../components/chat/Rooms';

import {
	inputRoom,
} from "../../actions/chat/actionCreator";

import {
	showModal,
	hideModal,
} from "../../actions/modal/actionCreator";

import {
	createChatRoom
} from "../../actions/chat/chat";

class RoomsContainer extends React.Component {
	componentDidMount() {

	}

	render() {
		const {isAuthenticated} = this.props.auth;

		return isAuthenticated && (
			<Rooms
				name={this.props.auth.user.name}
				showModal={this.props.show}
				hideModal={this.props.hide}
				isVisible={this.props.modal.isVisible}
				createRoom={this.props.create}
				onInputValueRoom={this.props.input}
				inputRoomValue={this.props.roomInput.value}
			>

			</Rooms>
		);
	}
}


const mapStateToProps = (state) => ({
	auth: state.auth,
	modal: state.modal,
	roomInput: state.roomInput,
});

const mapDispatchToProps = dispatch => ({
	create: () => {
		dispatch(createChatRoom());
		dispatch(inputRoom(''));
	},
	show: () => dispatch(showModal()),
	hide: () => dispatch(hideModal()),
	input: (value) => dispatch(inputRoom(value)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(RoomsContainer));
