import axios from 'axios'
import store from './../../store'

import {
	room
} from "./actionCreator";

export const createChatRoom = () => {
	return dispatch => {
		let data = {
			title: store.getState().roomInput.value || '',
			user_id: store.getState().auth.user.id,
		};

		axios.post('/api/chat/create', data)
			.then(res => {
				dispatch(room(res))
			})
			.catch(err => {
				console.log('owibka v sozdanii');
			})
	}
};

