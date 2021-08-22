import React from 'react';
import Title from './Title';
import Card from './Card';

const Tours = () => {
    return (
        <section className="tours__section">
            <div className="tours_container">
                <div className="u-margin-8"><Title text="most popular tours" /></div>
                <Card />
            </div>
        </section>
    )
}

export default Tours
