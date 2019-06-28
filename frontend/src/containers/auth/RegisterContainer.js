import React from 'react'
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';

import {
	registerUser
} from "../../actions/auth/authentication";

import {
	registerInputsValue
} from "../../actions/auth/actionCreator";

import {
	getErrors
} from "../../actions/auth/actionCreator";

import Register from './../../components/auth/Register'

class RegisterContainer extends React.Component {
	componentWillReceiveProps(nextProps) {
		if (nextProps.auth.isAuthenticated) {
			this.props.history.push('/')
		}
	}

	componentDidMount() {
		if (this.props.auth.isAuthenticated) {
			this.props.history.push('/');
		}
	}

	render() {
		return (
			<Register
				onInput={this.props.change}
				onSubmit={this.props.register}
				name={this.props.values['name']}
				email={this.props.values['email']}
				password={this.props.values['password']}
				password_confirm={this.props.values['password_confirm']}
				errors={this.props.errors.data}
			/>
		);
	}
}

RegisterContainer.propTypes = {
	registerUser: PropTypes.func,
	registerInputsValue: PropTypes.func,
	auth: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
	auth: state.auth,
	errors: state.errors,
	values: state.inputsValues,
});

const mapDispatchToProps = dispatch => ({
	register: (event) => dispatch(registerUser(event)),
	change: (key, value) => dispatch(registerInputsValue(key, value)),
	handleErrors: (data) => dispatch(getErrors(data)),
});


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(RegisterContainer))
