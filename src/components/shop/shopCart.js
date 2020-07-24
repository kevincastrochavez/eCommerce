import React, { Component } from 'react';

function CartButton({className, icon}) {
    return (
        <div className={`${className} cart-button`}>
            <i className={icon} />
        </div>
    )
}

function CartContent({ className, products }) {
    let count = products.length();
    return (
        <div className={`${className} cart-content`}>

            <div className="cart-contet__title">
                Cart ({count})
            </div>

            <div className="cart-content__products">

            </div>

            <div className="cart-content__footer">

            </div>

        </div>
    )
}

class ShopCart extends Component {
    render() {
        const { className } = this.props;

        return (
            <div className={`${className} shop-cart`}>
                <CartButton className="shop-cart-toggle" icon="fas fa-times" />
                <CartContent className="shop-cart-content" products={[4, 5, 8]} />
            </div>
        );
    };
}

export default ShopCart;