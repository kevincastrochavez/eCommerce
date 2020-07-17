import React, { Component } from 'react';

import { reduxForm, Field, Form } from 'redux-form';

import FormInput from '../formFields';

class SignInForm extends Component {
    render() {
        const { className } = this.props;
        return (
            <form className={`${className} sign-in-form`}>

                <Field 
                    className="sign-in-form-email" 
                    name="email" 
                    type="email" 
                    title="Email" 
                    placeholder="Email" 
                    component={FormInput}
                />

                <Field 
                    className="sign-in-form-password" 
                    name="password" 
                    type="password" 
                    title="Password" 
                    placeholder="Password" 
                    component={FormInput}
                />

            </form>
        );
    };
}

SignInForm = reduxForm({
    form: 'SignIn'
})(SignInForm);

export default SignInForm;