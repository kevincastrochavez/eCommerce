import React, { Component } from 'react';
import SignInForm from './signInForm';

class SignIn extends Component {
    render() {
        return (
            <div className="sign-in">
                <SignInForm className="sign-in_form" />
            </div>
        );
    };
}

export default SignIn;