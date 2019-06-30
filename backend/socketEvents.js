const express = require('express');
const Users = require('./models/User');


module.exports = function (socket) {
	console.log("Client Successfully Connected");

	socket.emit(getUsers());
};

const getUsers = () => {
	Users.find({}, function (err, users) {
		let userMap = {};

		users.forEach(function (user) {
			userMap[user._id] = user;
		});

		return userMap;
	});
};