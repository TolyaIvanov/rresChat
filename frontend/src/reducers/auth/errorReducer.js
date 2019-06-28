import {
	GET_ERRORS
} from "../../constants/defaultConstants";

const initialState = {};

export const errors = (state = initialState, action) => {
	switch (action.type) {
		case GET_ERRORS:
			return action.data;
		default:
			return state;
	}
};