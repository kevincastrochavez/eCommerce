import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form';

function FormSearchBar(props) {
    return (
        <div className="search-bar-grid">
            <i className="fas fa-search search-bar-grid-icon"></i>
            <input className={`${props.className} form-search-bar search-bar-grid-input`} {...props.input} type='text' placeholder={`${props.placeholder}`} />
        </div>
    )
}

class ShopSearchBar extends Component {
    render() {
        const { className, handleSubmit } = this.props;
        return (
            <form onSubmit={handleSubmit} className={`${className} shop-search-bar`}>
                <Field name='query' className="shop-search-bar-form-serach-bar" placeholder="Search" component={FormSearchBar} />
            </form>
        );
    };
}

ShopSearchBar = reduxForm({
    form: 'ShopSearchBar'
})(ShopSearchBar);

export default ShopSearchBar;