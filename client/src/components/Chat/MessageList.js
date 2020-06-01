import React from 'react'

import { Row, Col } from 'react-materialize';
// import { user } from "../../utils/helpers";


// const userName = user().fname;



class MessageList extends React.Component {
    render() {
        return (
            <Row>
                <Col s={12}>
                    <div className = 'messages'>
                    <ul className="message-list default-text">
                        {this.props.messages.map(message => {
                            return (
                                <li key={message.id}>
                                    <div>
                                        {/* {message.time} {userName.toUpperCase()} wrote:<br></br> */}
                                        {message.text}<br></br>
                                    </div>
                                </li>
                            )
                        })}
                    </ul>
                    </div>
                </Col>
            </Row>

        )
    }
}

export default MessageList