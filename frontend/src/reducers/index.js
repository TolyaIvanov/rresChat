import {combineReducers} from 'redux';
import {
	errors
} from './auth/errorReducer';
import {
	auth,
	inputsValues
} from './auth/authReducer';
import {
	modal
} from "./modal/modalReducer";
import {
	roomInput
} from "./chat/chatReducer";


export default combineReducers({
	errors,
	auth,
	inputsValues,
	modal,
	roomInput,
});