import React, { Component } from 'react'
import { Row, Col } from 'react-materialize'
import MessageList from './MessageList'
import moment from 'moment';
import $ from 'jquery';

const chatList = [];


export default class Chat extends Component {

    constructor(props) {
        super(props)

        this.state = {
            messages: chatList,
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        this.setState({ value: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        chatList.push({ time: moment().calendar(), text: this.state.value });
        this.setState({ messages: chatList });
        $('#chat').val('');
        console.log('A message was submitted: ' + this.state.value);
        console.log('state: ', this.state);
    }

    render() {
        return (
            <>
                <h6 className='title'>SOCIAL FEED</h6>
                <MessageList messages={this.state.messages} />
                <Row>
                    <Col s={12}>
                        <div className="center-align">
                            <form class="form-signin" onSubmit={this.handleSubmit}>
                                <div
                                    class="alert alert-warning alert-dismissible"
                                    role="alert"
                                >
                                </div>
                                <div className="form-group">
                                    <input
                                        id='chat'
                                        name="message"
                                        type="text"
                                        maxlength="140"
                                        className="form-control"
                                        placeholder="      Enter a message"
                                        onChange={this.handleChange}
                                        required
                                    />
                                </div>
                                <br></br>
                                <button
                                    type="submit"
                                    className="btn btn-flat default-text"
                                >Submit
                                            </button>
                            </form>
                        </div>
                    </Col>
                </Row>
            </>
        )
    }
}
