import React, { Component } from 'react';

import { reduxForm, Field, Form } from 'redux-form';

import FormInput from '../formFields';
import { FormButton } from '../formFields';
import Details from '../details';

import history from '../../history';

class SignUpForm extends Component {
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
            <form onSubmit={handleSubmit} className={`${className} sign-up-form`}>

                <Field 
                    className="sign-up-form-name" 
                    name="name" 
                    type="name" 
                    title="Name" 
                    placeholder="Name" 
                    component={FormInput}
                />

                <Field 
                    className="sign-up-form-email" 
                    name="email" 
                    type="email" 
                    title="Email" 
                    placeholder="Email" 
                    component={FormInput}
                />

                <Field 
                    className="sign-up-form-password" 
                    name="password" 
                    type="password" 
                    title="Password" 
                    placeholder="Password" 
                    component={FormInput}
                />

                <Field 
                    className="sign-up-form-confirm-password" 
                    name="confirm" 
                    type="password" 
                    title="Confirm Password" 
                    placeholder="Confirm Password" 
                    component={FormInput}
                />



                <div className="sign-up-form-line"></div>

                <Field 
                    className="sign-up-form-back"
                    onClick={() => console.log("try to go back")} 
                    name="back" 
                    type="button" 
                    title="Back" 
                    short={true}
                    component={FormButton}
                />

                <Field 
                    className="sign-up-form-login"
                    onClick={() => console.log("try to submit")} 
                    name="login" 
                    type="submit" 
                    title="Login" 
                    component={FormButton}
                />

                <Details className='sign-up-form-details' title='QuickLinks' links={links}/>

            </form>
        );
    };
}

SignUpForm = reduxForm({
    form: 'SignUpForm'
})(SignUpForm);

export default SignUpForm;