const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const config = require('./db');
const socketEvents = require('./socketEvents');
const users = require('./routes/user');
const chat = require('./routes/chat');
const PORT = process.env.PORT || 5000;

require('./passport')(passport);

mongoose.connect(config.DB, {useNewUrlParser: true}).then(
	() => {
		console.log('Database is connected')
	},
	err => {
		console.log('Can not connect to the database' + err)
	}
);

const app = express();

app.use(passport.initialize());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/api/users', users);
app.use('/api/chat', chat);

const server = app.listen(PORT, () => {
	console.log(`Server is running on PORT ${PORT}`);
});

const io = require('socket.io')(server);

io.set("origins", "*:*");
io.on("connection", socketEvents);
