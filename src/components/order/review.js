import React, { Component } from 'react';
import * as actions from '../../actions';
import { connect } from 'react-redux';

import PageTitle from '../pageTitle';
import ReviewForm from './reviewForm';

class Review extends Component {

    componentDidMount() {
        this.props.setHeaderLinks([]);
        this.props.setNavbarLinks([]);
    }

    onSubmit = (fields) => {

    }
    
    render() {
        let subtotal = 0;
        this.props.cartProducts.map(cartProduct => {
            subtotal += cartProduct.quantity * cartProduct.product.price;
        })

        return (
            <div>
                <PageTitle className='review__page-title' title='Order Review'/>
                <ReviewForm className="review__form" onSubmit={this.onSubmit} subtotal={subtotal}/>
            </div>
        );
    };
}

function mapStateToProps(state) {
    const { cartProducts } = state.user;
    return { cartProducts };
}

Review = connect(mapStateToProps, actions)(Review);

export default Review;