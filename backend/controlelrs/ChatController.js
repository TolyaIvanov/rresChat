const express = require('express');
const crypto = require('crypto');
const bcrypt = require('bcryptjs');
const Room = require('./../models/Room');
const Users = require('./../models/User');

module.exports = {
	create: (req, res) => {
		let {title, user_id} = req.body;
		let hash = crypto.randomBytes(10).toString('hex');
		const newRoom = new Room({
			title: title.length > 0 ? title : `r_${user_id}_${hash}`,
		});

		newRoom.save()
			.then(room => {
				Users.findOne({_id: user_id})
					.then(function (user) {
						user.rooms.push(room);
						user.save();

						res.send(user);
					})
			});
	}
};
