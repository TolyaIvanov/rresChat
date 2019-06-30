const mongoose = require('mongoose'),
	Schema = mongoose.Schema;

const MessageSchema = new Schema(
	{
		value: {
			type: String,
			required: true
		},
		author: {
			type: Schema.Types.ObjectId,
			ref: 'users'
		},
		room: {
			type: Schema.Types.ObjectId,
			ref: 'rooms'
		}
	},
	{
		timestamps: true
	}
);

module.exports = mongoose.model('messages', MessageSchema);
