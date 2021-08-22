import React from 'react';

const Button = (props) => {
    return (
        <div className="btn_container">
            <a href="" className="btn btn_white">{props.text}</a>
        </div>
    )
}

export default Button
