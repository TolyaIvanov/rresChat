import openSocket from "socket.io-client";

const socket = openSocket("http://localhost:5000/");

function connectio(cb) {
	// listen for any messages coming through
	// of type 'chat' and then trigger the
	// callback function with said message
	socket.on("chat", message => {
		// console.log the message for posterity
		console.log(message);
		// trigger the callback passed in when
		// our App component calls connect
		// cb(message);
	});
}

export {connectio};


//
// export default () => {
// 	const socket = io.connect('http://localhost:5000');
//
// 	function join(chatroomName, cb) {
// 		socket.emit('join', chatroomName, cb)
// 	}
//
// 	function leave(chatroomName, cb) {
// 		socket.emit('leave', chatroomName, cb)
// 	}
//
// 	function message(chatroomName, msg, cb) {
// 		socket.emit('Message.js', {chatroomName, message: msg}, cb)
// 	}
//
// 	function getChatrooms(cb) {
// 		socket.emit('chatrooms', null, cb)
// 	}
//
// 	function getAvailableUsers(cb) {
// 		socket.emit('availableUsers', null, cb)
// 	}
//
//
//
// 	return {
// 		join,
// 		leave,
// 		message,
// 		getChatrooms,
// 		getAvailableUsers
// 	}
// }