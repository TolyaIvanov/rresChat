import {
	GET_ERRORS,
	SET_CURRENT_USER,
	REGISTER_INPUTS,
	LOGIN_INPUTS,
	CLEAR_INPUTS
} from "../../constants/defaultConstants";

export const getErrors = data => ({
	type: GET_ERRORS,
	data
});

export const setCurrentUser = decoded => ({
	type: SET_CURRENT_USER,
	payload: decoded
});

export const registerInputsValue = (key, value) => {
	let values = [];

	values[key] = value;

	return ({
		type: REGISTER_INPUTS,
		values,
	});
};

export const loginInputsValue = (key, value) => {
	let values = [];

	values[key] = value;

	return ({
		type: LOGIN_INPUTS,
		values,
	});
};

export const clearInputs = () => ({
	type: CLEAR_INPUTS,
});