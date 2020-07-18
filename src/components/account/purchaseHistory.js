import React, { Component } from 'react';

import PageTitle from '../pageTitle';
import Purchases from './purchases';
import PurchaseDetail from './purchaseDetail';

class PurchaseHistory extends Component {
    render() {
        return (
            <div className='purchase-history'>
                <PageTitle className='purchase-history__page-title' title='Purchase History'/>
                <div className="purchase-history-content">
                    <Purchases className="purchase-history-purchases"/>
                    <PurchaseDetail className="purchase-history-detail"/>
                </div>
                <div className="purchase-history-bottom-border"></div>
            </div>
        );
    };
}

export default PurchaseHistory;