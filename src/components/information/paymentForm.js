import React, { Component } from 'react';

import { reduxForm, Field, Form } from 'redux-form';

import FormInput from '../formFields';
import { FormButton } from '../formFields';

import history from '../../history';

class PaymentForm extends Component {
    render() {

        const { className, handleSubmit } = this.props;
        
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
                    className="sign-up-form-confirm" 
                    name="confirm" 
                    type="password" 
                    title="Confirm Password" 
                    placeholder="Confirm Password" 
                    component={FormInput}
                />



                <div className="sign-up-form-line"></div>

                <Field 
                    className="sign-up-form-login"
                    onClick={() => history.push('/account')} 
                    name="login" 
                    type="submit" 
                    title="Create Account" 
                    component={FormButton}
                />

                <Field 
                    className="sign-up-form-back"
                    onClick={() => history.push('/signin')} 
                    name="back" 
                    type="button" 
                    title="Back" 
                    short={true}
                    component={FormButton}
                />

            </form>
        );
    };
}

PaymentForm = reduxForm({
    form: 'PaymentForm'
})(PaymentForm);

export default PaymentForm;