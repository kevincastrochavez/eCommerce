import React, { Component } from 'react';

import PageTitle from '../pageTitle';
import { connect } from 'react-redux';
import * as actions from '../../actions';
import PaymentForm from './paymentForm';

class Payment extends Component {

    componentDidMount() {
        this.props.setHeaderLinks([]);
        this.props.setNavbarLinks([]);
    }

    onSubmit = (fields) => {
        this.props.Payment(fields);
        this.props.history.push('/account');
    }

    render() {
        return (
            <div className='payment'>
                <PageTitle className='payment-page-title' title='Payment Information' />
                <PaymentForm onSubmit={onSubmit} className="payment__form" />
            </div>
        )
    }
}

Payment = connect(null, actions)(Payment);

export default Payment;