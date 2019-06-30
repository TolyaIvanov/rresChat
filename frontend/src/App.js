import React, {Component} from 'react';
import {Router, Route, Switch} from "react-router-dom"
import {Provider} from 'react-redux';
import store from './store';
import jwt_decode from 'jwt-decode';
import setAuthToken from './setAuthToken';
import {
	logoutUser
} from './actions/auth/authentication';
import {
	setCurrentUser
} from "./actions/auth/actionCreator";
import history from './history';

import NavbarContainer from './containers/header/NavbarContainer'
import HomeContainer from './containers/home/HomeContainer'
import RegisterContainer from './containers/auth/RegisterContainer'
import LoginContainer from './containers/auth/LoginContainer'
import RoomsContainer from './containers/chat/RoomsContainer'
import UserListContainer from './containers/chat/UserListContainer'

import './App.css'


if (localStorage.jwtToken) {
	setAuthToken(localStorage.jwtToken);
	const decoded = jwt_decode(localStorage.jwtToken);

	store.dispatch(setCurrentUser(decoded));

	const currentTime = Date.now() / 1000;

	if (decoded.exp < currentTime) {
		store.dispatch(logoutUser());
		window.location.href = '/login'
	}
}

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router history={history}>
					<NavbarContainer/>
					<div className="container">
						<Route exact path="/" component={HomeContainer}/>
						<Switch>
							<Route exact path="/register" component={RegisterContainer}/>
							<Route exact path="/login" component={LoginContainer}/>
							<Route exact path="/users" component={UserListContainer}/>
							<Route exact path="/rooms" component={RoomsContainer}/>
						</Switch>
					</div>
				</Router>
			</Provider>
		);
	}
}

export default App;