import React, {Component} from 'react';
import './home.css';


export default class Home extends Component {
	render() {
		return (
			<div className={'main'}>
				{this.props.children}
			</div>
		);
	}
}