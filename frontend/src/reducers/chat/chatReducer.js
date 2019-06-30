import {
	CHAT_ROOM_INPUT_VALUE,
} from "../../constants/defaultConstants";

const initialState = {
	value: '',
};

export const roomInput = (state = initialState, {type, value}) => {
	switch (type) {
		case CHAT_ROOM_INPUT_VALUE:
			return {
				...state,
				value
			};
		default:
			return state;
	}
};
