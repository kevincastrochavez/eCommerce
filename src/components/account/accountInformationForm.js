import React, { Component } from 'react';

import { reduxForm, Field, Form } from 'redux-form';

import FormInput, { LongGrayButton } from '../formFields';
import { FormButton } from '../formFields';

import history from '../../history';

class AccountInformationForm extends Component {
    render() {

        const { className, handleSubmit } = this.props;

        return (
            <form onSubmit={handleSubmit} className={`${className} account-information-form`}>

                <Field 
                    className="account-information-form-name" 
                    name="name" 
                    type="name" 
                    title="Name" 
                    placeholder="Name" 
                    component={FormInput}
                />

                <Field 
                    className="account-information-form-email" 
                    name="email" 
                    type="email" 
                    title="Email" 
                    placeholder="Email" 
                    component={FormInput}
                />

                <Field 
                    className="account-information-form-street-address" 
                    name="address" 
                    type="address" 
                    title="Street Address" 
                    placeholder="Street Address" 
                    component={FormInput}
                />

                <Field 
                    className="account-information-form-city" 
                    name="city" 
                    type="city" 
                    title="City" 
                    placeholder="City" 
                    component={FormInput}
                />

                <Field 
                    className="account-information-form-state" 
                    name="state" 
                    type="state" 
                    title="State" 
                    placeholder="State" 
                    component={FormInput}
                />

                <Field 
                    className="account-information-form-zipcode" 
                    name="zipcode" 
                    type="zipcode" 
                    title="Zipcode" 
                    placeholder="Zipcode" 
                    component={FormInput}
                />



                <Field 
                    className="account-information-form-change-password"
                    onClick={() => console.log('show buttons')}
                    name="change-password" 
                    type="button" 
                    labelTitle="Password"
                    title="Change Password" 
                    component={LongGrayButton}
                />

            </form>
        );
    };
}

AccountInformationForm = reduxForm({
    form: 'SignIn'
})(AccountInformationForm);

export default AccountInformationForm;