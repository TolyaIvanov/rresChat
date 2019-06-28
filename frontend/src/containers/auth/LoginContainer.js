import React from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {withRouter} from 'react-router-dom';

import {
	getErrors,
	loginInputsValue,
} from "../../actions/auth/actionCreator";

import {
	loginUser
} from "../../actions/auth/authentication";

import Login from './../../components/auth/Login';

class LoginContainer extends React.Component {
	componentDidMount() {
		if (this.props.auth.isAuthenticated) {
			this.props.history.push('/');
		}
	}

	componentWillReceiveProps(nextProps) {
		if (nextProps.auth.isAuthenticated) {
			this.props.history.push('/')
		}
	}

	render() {
		return (
			<Login
				onInput={this.props.change}
				onSubmit={this.props.login}
				email={this.props.values.login_email}
				password={this.props.values.login_password}
				errors={this.props.errors.data}
			/>
		);
	}
}

LoginContainer.propTypes = {
	loginUser: PropTypes.func,
	auth: PropTypes.object.isRequired,
	errors: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
	auth: state.auth,
	errors: state.errors,
	values: state.inputsValues,
});

const mapDispatchToProps = dispatch => ({
	login: (event) => dispatch(loginUser(event)),
	change: (key, value) => dispatch(loginInputsValue(key, value)),
	handleErrors: (data) => dispatch(getErrors(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(LoginContainer))
