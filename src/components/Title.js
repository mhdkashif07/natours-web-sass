import React from 'react'

const Title = (props) => {
    return (
        <div className="title_container">
            <div className="text_center">
                <h2 className="heading_secondary">{props.text}</h2>
            </div>
        </div>
    )
}

export default Title
