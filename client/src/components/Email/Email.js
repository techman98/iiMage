import React from 'react';
import "./email.css"


class Email extends React.Component {
    state = {
        email: {
            recipient: '',
            sender: '',
            subject: '',
            text: '',
            sent: ''
        }
    }

    sendEmail = () => {
        const { email } = this.state;
        //this might be where i get the email & username from okta
        fetch(`http://localhost:3000//send-email?recipient=${email.recipient}&sender=${email.sender}&topic=${email.subject}&text=${email.text}`) //query string url
            .catch(err => console.error(err))
        this.setState(state => ({
            email: {
                recipient: 'wizmar.tyler@gmail.com',
                sender: '',
                subject: '',
                text: '',
                sent: 'Message sent!'
            }

        }))
    }
    render() {
        const { email } = this.state;
        const spacer = {
            margin: 10
        }
        const textArea = {
            borderRadius: 4
        }
        return (
            <div className="App">
                <div style={{ marginTop: 10 }} >
                    <p> Send Tyler an Email </p>
                    <label> Recipient </label>
                    <br />
                    <input value={email.recipient}
                        onChange={e => this.setState({ email: { ...email, recipient: e.target.value } })} />
                    <div style={spacer} />
                    <label> Sender </label>
                    <br />
                    <input value={email.sender}
                        onChange={e => this.setState({ email: { ...email, sender: e.target.value } })} />
                    <div style={spacer} />
                    <label> Subject </label>
                    <br />
                    <input value={email.subject}
                        onChange={e => this.setState({ email: { ...email, subject: e.target.value } })} />
                    <div style={spacer} />
                    <label> Message </label>
                    <br />
                    <textarea rows={3} value={email.text} style={textArea}
                        onChange={e => this.setState({ email: { ...email, text: e.target.value } })} />
                    <div style={spacer} />
                    <p onClick={this.sendEmail}>{email.sent}</p>
                    <button onClick={this.sendEmail}> Send Email </button>
                </div>
            </div>
        )
    }
}

export default Email;

