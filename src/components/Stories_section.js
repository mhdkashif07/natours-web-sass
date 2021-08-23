import React from 'react';
import StoryCard from './StoryCard';
import Title from './Title';

const Stories_section = () => {
    return (
        <section className="stories__section">
            <div className="stories__container">
                <div className="u-margin-8 u-margin-top-big">
                <Title text="WE MAKE PEOPLE GENUINELY HAPPY"/>
                </div>
                <StoryCard />
                <div className="u-text-center u-margin-8">
                <a href="" className="btn_text">Learn more &rarr;</a>
                </div>
            </div>
        </section>
    )
}

export default Stories_section
