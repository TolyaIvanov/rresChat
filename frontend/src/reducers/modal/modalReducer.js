import {
	SHOW_MODAL,
	HIDE_MODAL
} from "../../constants/defaultConstants";

const initialState = {
	isVisible: false
};

export const modal = (state = initialState, {type, isVisible}) => {
	switch (type) {
		case SHOW_MODAL :
			return {
				...state,
				isVisible
			};
		case HIDE_MODAL :
			return {
				...state,
				isVisible
			};
		default:
			return state;
	}
};