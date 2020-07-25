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
        return (
            <div>
                <PageTitle className='review__page-title' title='Order Review'/>
                <ReviewForm className="review__form" onSubmit={this.onSubmit}/>
            </div>
        );
    };
}

Review = connect(null, actions)(Review);

export default Review;