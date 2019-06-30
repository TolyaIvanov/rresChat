import React from 'react'

import './modal.css'

class Modal extends React.Component {
	render() {
		return (
			<div className={'modal'}>
				<div className="modal-content">
					{this.props.text}
					{
						this.props.children
					}
					<div className="buttons">
						<input
							type="button"
							value={this.props.save}
							className={'button save'}
							onClick={this.props.create}
						/>
						<input
							type="button"
							value={this.props.cancel}
							className={'button cancel'}
							onClick={this.props.close}
						/>
					</div>

				</div>
			</div>
		);
	}
}

export default Modal