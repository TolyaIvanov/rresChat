import {
	SET_CURRENT_USER,
	REGISTER_INPUTS,
	LOGIN_INPUTS,
	CLEAR_INPUTS,
} from '../../constants/defaultConstants';
import isEmpty from '../../validation/isEmpty';

const initialAuthState = {
	isAuthenticated: false,
	user: {}
};

const initialValuesState = {
	'name': '',
	'email': '',
	'password': '',
	'password_confirm': '',
};

export const auth = (state = initialAuthState, {type, payload}) => {
	switch (type) {
		case SET_CURRENT_USER:
			return {
				...state,
				isAuthenticated: !isEmpty(payload),
				user: payload
			};
		default:
			return state;
	}
};

export const inputsValues = (state = initialValuesState, {type, values}) => {
	switch (type) {
		case REGISTER_INPUTS:
			return {
				...state,
				...values
			};
		case LOGIN_INPUTS:
			return {
				...state,
				...values
			};
		case CLEAR_INPUTS:
			return {
				...initialValuesState
			};
		default:
			return state
	}
};
