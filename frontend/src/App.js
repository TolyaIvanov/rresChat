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
import Home from './components/home/Home'
import RegisterContainer from './containers/auth/RegisterContainer'
import LoginContainer from './containers/auth/LoginContainer'

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
					<Route exact path="/" component={Home}/>
					<div className="container">
						<Switch>
							<Route exact path="/register" component={RegisterContainer}/>
							<Route exact path="/login" component={LoginContainer}/>
						</Switch>
					</div>
				</Router>
			</Provider>
		);
	}
}

export default App;