const express = require('express');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const validateRegisterInput = require('./../validation/register');
const validateLoginInput = require('./../validation/login');
const User = require('./../models/User');
const gravatar = require('gravatar');

module.exports = {
	register: (req, res) => {
		const {errors, isValid} = validateRegisterInput(req.body);

		if (!isValid) {
			return res.status(400).json(errors);
		}
		User.findOne({
			email: req.body.email
		}).then(user => {
			if (user) {
				return res.status(400).json({
					email: 'Email already exists'
				});
			} else {
				const avatar = gravatar.url(req.body.email, {
					s: '200',
					r: 'pg',
					d: 'mm'
				});
				const newUser = new User({
					name: req.body.name,
					email: req.body.email,
					password: req.body.password,
					avatar
				});

				bcrypt.genSalt(10, (err, salt) => {
					if (err)
						console.error('There was an error', err);
					else {
						bcrypt.hash(newUser.password, salt, (err, hash) => {
							if (err)
								console.error('There was an error', err);
							else {
								newUser.password = hash;

								newUser
									.save()
									.then(user => {
										const payload = {
											id: user.id,
											name: user.name,
											avatar: user.avatar
										};

										jwt.sign(payload, 'secret', {
											expiresIn: 3600
										}, (err, token) => {
											if (err) {
												console.error('There is some error in token', err);
											} else {
												res.json({
													success: true,
													token: `Bearer ${token}`,
												});
											}
										});
									});
							}
						});
					}
				});
			}
		});
	},
	login: (req, res) => {
		const {errors, isValid} = validateLoginInput(req.body);

		if (!isValid) {
			return res.status(400).json(errors);
		}

		const email = req.body.email;
		const password = req.body.password;

		User.findOne({email})
			.then(user => {
				if (!user) {
					errors.login_email = 'User not found';

					return res.status(404).json(errors);
				}
				bcrypt.compare(password, user.password)
					.then(isMatch => {
						if (isMatch) {
							const payload = {
								id: user.id,
								name: user.name,
								avatar: user.avatar
							};

							jwt.sign(payload, 'secret', {
								expiresIn: 3600
							}, (err, token) => {
								if (err) {
									console.error('There is some error in token', err);
								} else {
									res.json({
										success: true,
										token: `Bearer ${token}`
									});
								}
							});
						} else {
							errors.login_password = 'Incorrect Password';

							return res.status(400).json(errors);
						}
					});
			});
	},
};