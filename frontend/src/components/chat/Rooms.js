import React, {Fragment} from 'react';

import './rooms.css'

import Modal from './../modal/Modal'

class Rooms extends React.Component {
	render() {
		const newRoomInputs = (
			<div className={'new-room'}>
				<input
					type="text"
					placeholder={'name of new room'}
					className={'new-room-value'}
					value={this.props.inputRoomValue}
					onChange={(e) => this.props.onInputValueRoom(e.target.value)}
				/>
			</div>
		);

		return (
			<Fragment>
				<div className="create-new-room"
				     onClick={this.props.showModal}
				>
					{this.props.name}, tap to create new room
				</div>
				<div className={'chatrooms'}>
					Rooms
				</div>
				{
					this.props.isVisible &&
					<Modal
						text={'create new room?'}
						save={'make room'}
						cancel={'cancel'}
						create={this.props.createRoom}
						close={this.props.hideModal}
					>
						{newRoomInputs}
					</Modal>
				}
			</Fragment>
		);
	}
}

export default Rooms;