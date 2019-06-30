const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const RoomSchema = new Schema({
	title: {
		type: String,
	},
	usersInRoom: {
		type: Schema.Types.ObjectId,
		ref: 'users'
	},
	messagesInRoom: {
		type: Schema.Types.ObjectId,
		ref: 'messages'
	}
});

module.exports = mongoose.model('rooms', RoomSchema);
