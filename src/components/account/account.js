import React, { Component } from 'react';

import * as actions from '../../actions';
import { connect } from 'react-redux';
import AccountInformation from './accountInformation';
import PurchaseHistory from './purchaseHistory';

class Account extends Component {

    componentDidMount() {

        const headerLinks = [
            {
                _id: 0,
                title: 'Shop',
                path: '/shop'
            },
            {
                _id: 1,
                title: 'Logout',
                path: '/'
            }
        ]

        const navbarLinks = [
            {   
                _id: 0,
                title: 'Purchase History',
                active: true,
                component: <PurchaseHistory/>
            },
            {   
                _id: 1,
                title: 'Account Information',
                active: false,
                component: <AccountInformation/>
            }
        ]
        
        this.props.setHeaderLinks(headerLinks);
        this.props.setNavbarLinks(navbarLinks);
    }

    renderContent() {
        let jsx;
        if (this.props.navbarLinks) {
            this.props.navbarLinks.map(link => {
                if (link.active) {
                    jsx = link.component;
                }
            })
        }

        return jsx;
    }
    
    render() {
        return (
            <div className="account">
                {this.renderContent}
            </div>
        );
    };
}

function mapStateToProps(state) {
    const { headerLinks, navbarLins } = state.headerNavbar;
    return { headerLinks, navbarLins };
}

Account = connect(mapStateToProps, actions)(Account);

export default Account;