import {
	SHOW_MODAL,
	HIDE_MODAL
} from "../../constants/defaultConstants";

export const showModal = () => ({
	type: SHOW_MODAL,
	isVisible: true,
});

export const hideModal = () => ({
	type: HIDE_MODAL,
	isVisible: false,
});
