import React, {Component} from 'react';

import './register.css'

class Register extends Component {
	render() {
		return (
			<div className={'registration'}>
				<h2 className={'title'}>Registration</h2>
				<form
					className={'form'}
					onSubmit={this.props.onSubmit}
				>
					<input
						className={'input'}
						type="text"
						placeholder="Name"
						name="name"
						onChange={(e) => this.props.onInput('name', e.target.value)}
						value={this.props.name}
						autoComplete={'off'}
					/>
					{this.props.errors && (<div className="invalid-feedback">{this.props.errors.name}</div>)}
					<input
						className={'input'}
						type="email"
						placeholder="Email"
						name="email"
						onChange={(e) => this.props.onInput('email', e.target.value)}
						value={this.props.email}
						autoComplete={'off'}
					/>
					{this.props.errors && (<div className="invalid-feedback">{this.props.errors.email}</div>)}
					<input
						className={'input'}
						type="password"
						placeholder="Password"
						name="password"
						onChange={(e) => this.props.onInput('password', e.target.value)}
						value={this.props.password}
						autoComplete={'off'}
					/>
					{this.props.errors && (<div className="invalid-feedback">{this.props.errors.password}</div>)}
					<input
						className={'input'}
						type="password"
						placeholder="Confirm Password"
						name="password_confirm"
						onChange={(e) => this.props.onInput('password_confirm', e.target.value)}
						value={this.props.password_confirm}
						autoComplete={'off'}
					/>
					{this.props.errors && (
						<div className="invalid-feedback">{this.props.errors.password_confirm}</div>)}
					<button
						className={'submit'}
					>
						Register User
					</button>
				</form>
			</div>
		)
	}
}

export default Register;