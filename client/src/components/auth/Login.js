import React, { Component } from 'react';
// import { Redirect } from 'react-router-dom';
// import SignInWidget from './SignInWidget';
import { withAuth } from '@okta/okta-react';
import OktaAuth from '@okta/okta-auth-js'

export default withAuth(class Login extends Component {
    constructor(props){
        super(props)
        this.state = {
            sessionToken: null,
            email: '',
            password: ''
        };
        this.OktaAuth = new OktaAuth({url: props.baseUrl})

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleEmail = this.handleEmail.bind(this);
        this.handlePassword = this.handlePassword.bind(this)
    }

    handleSubmit(event){
        event.preventDefault();
        this.OktaAuth.signIn({
            email: this.state.email,
            password: this.state.password
        })
        .then(res => this.setState({
            sessionToken: res.sessionToken
        }))
        .catch(err => console.log('Error: ', err))
    }

    handleEmail(event){
        this.setState({email: event.target.value})
    }

    handlePassword(event){
        this.setState({password: event.target.value})
    }

    render(){
        if (this.state.sessionToken){
            this.props.auth.redirect({sessionToken: this.state.sessionToken});
            return null;
        }

        return (
            <form onSubmit={this.handleSubmit}>
            <lable>
                Email:
                <input id="email" type="text" value={this.state.email} onChange={this.handleEmail}/>
                Password: 
                <input id="password" type="password" value={this.state.password} onChange={this.handlePassword}/>
            </lable>
            <input id="submit" type="submit" value="submit"/>
            </form>
        )
    }

})
