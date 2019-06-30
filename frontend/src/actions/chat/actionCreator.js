import {
	CREATE_CHAT_ROOM,
	CHAT_ROOM_INPUT_VALUE
} from "../../constants/defaultConstants";

export const inputRoom = value => ({
	type: CHAT_ROOM_INPUT_VALUE,
	value
});

export const room = data => ({
	type: CREATE_CHAT_ROOM,
	data
});
