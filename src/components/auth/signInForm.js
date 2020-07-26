import React, { Component } from 'react';

import { reduxForm, Field, Form } from 'redux-form';

import FormInput from '../formFields';
import { FormButton } from '../formFields';
import Details from '../details';


class SignInForm extends Component {
    render() {

        const { className, handleSubmit } = this.props;
        const links = [
            {
                _id: 0,
                title: 'Not registered? Create account here',
                onClick: () => history.push('/signup')
            },
            {
                _id: 1,
                title: 'Forgot account email?',
                onClick: () => console.log('forgot email')
            },
            {
                _id: 2,
                title: 'Forgot password?',
                onClick: () => console.log('forgot password')
            }
        ]

        return (
            <form onSubmit={handleSubmit} className={`${className} sign-in-form`}>

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

                <div className="sign-in-form-line"></div>

                <Field 
                    className="sign-in-form-login"
                    name="login" 
                    type="submit" 
                    title="Login" 
                    component={FormButton}
                />

                <Details className='sign-in-form-details' title='QuickLinks' links={links}/>

            </form>
        );
    };
}

SignInForm = reduxForm({
    form: 'SignIn'
})(SignInForm);

export default SignInForm;