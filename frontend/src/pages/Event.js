import React, { Component } from 'react';

import Modal from '../componenets/Modals/Modal';
import Backdrop from '../componenets/Backdrop/Backdrop';
import './Event.css'

class EventsPage extends Component {
    state = {
        creating: false
    };

    startCreateEventHandler = () => {
        this.setState({creating: true});
    }

    modalConfirmHandler =() => {
        this.setState({creating: false});
    };

    modalCancelHandler = () => {
        this.setState({creating: false});
    };


    render() {
        return (
            <React.Fragment>
                {this.state.creating && <Backdrop />}
                    {this.state.creating && <Modal title="Add Event" canCancel canConfirm onCancel={this.modalCancelHandler} onConfirm={this.modalConfirmHandler}>
                        <p>Modal content</p>
                    </Modal>}
                    <div className="events-control">
                        <p>Share your own Events!</p>
                        <button className="btn" onClick={this.startCreateEventHandler}>Create Event</button>
                    </div>
            </React.Fragment>
        );
    }
}

export default EventsPage;