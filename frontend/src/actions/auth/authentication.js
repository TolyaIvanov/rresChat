import axios from 'axios';
import setAuthToken from '../../setAuthToken';
import jwt_decode from 'jwt-decode';
import store from './../../store';
import history from './../../history';

import {
	getErrors,
	setCurrentUser
} from "./actionCreator";

import {
	clearInputs,
} from "./actionCreator";

export const registerUser = (event) => {
	event.preventDefault();

	return dispatch => {
		let user = store.getState().inputsValues;

		axios.post('/api/users/register', user)
			.then(res => history.push('/login'))
			.catch(err => {
				dispatch(getErrors(err.response));
			});
	}
};

export const loginUser = (event) => {
	event.preventDefault();

	return dispatch => {
		let user = {
			email: store.getState().inputsValues.login_email,
			password: store.getState().inputsValues.login_password
		};

		axios.post('/api/users/login', user)
			.then(res => {
				const {token} = res.data;
				const decoded = jwt_decode(token);

				localStorage.setItem('jwtToken', token);
				setAuthToken(token);

				dispatch(setCurrentUser(decoded));
				// dispatch()
			})
			.catch(err => {
				dispatch(getErrors(err.response));
			});
	};
};

export const logoutUser = () => dispatch => {
	localStorage.removeItem('jwtToken');
	setAuthToken(false);
	dispatch(setCurrentUser({}));
	dispatch(clearInputs());
	history.push('/login');
};