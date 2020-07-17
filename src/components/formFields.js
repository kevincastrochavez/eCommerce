import React, { Component } from 'react';

export default class FormInput extends Component {
    render() {
        const { className, title, type, placeholder, input } = this.props;
        return (
            <div className={`${className} form-input`}>
                <label className="form-input-label">
                    {title}
                </label>
                <input className="form-input-input" type={type} placeholder={placeholder} {...input}/>
            </div>
        );
    };
}

export class FormButton extends Component {
    render() {
        const { className, title, type, onClick, input } = this.props;
        return (
            <div className={`${className} form-button`}>
                <button 
                    className={`form-button-button`} 
                    type={type}
                    {...input}
                    onClick={onClick}
                >
                    {title}
                </button>
            </div>
        );
    };
}