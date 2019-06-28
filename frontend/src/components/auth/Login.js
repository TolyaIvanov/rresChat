import React, {Component} from 'react';

class Login extends Component {
	render() {
		return (
			<div className={'login'}>
				<h2 className={'title'}>Login</h2>
				<form
					className={'form'}
					onSubmit={this.props.onSubmit}
				>
					<input
						className={'input'}
						type="email"
						placeholder="Email"
						name="email"
						onChange={(e) => this.props.onInput('login_email', e.target.value)}
						value={this.props.email || ''}
						autoComplete={'off'}
					/>
					{this.props.errors && (<div className="invalid-feedback">{this.props.errors.login_email}</div>)}
					<input
						className={'input'}
						type="password"
						placeholder="Password"
						name="password"
						onChange={(e) => this.props.onInput('login_password', e.target.value)}
						value={this.props.password || ''}
						autoComplete={'off'}
					/>
					{this.props.errors && (
						<div className="invalid-feedback">{this.props.errors.login_password}</div>)}
					<button
						className={'submit'}
					>
						Login User
					</button>
				</form>
			</div>
		)
	}
}

export default Login;
