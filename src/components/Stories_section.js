import React from 'react';
import BgVideo from './BgVideo';
import StoryCard from './StoryCard';
import Title from './Title';

const Stories_section = () => {
    return (
        <section className="stories__section">
             <BgVideo />
            <div>
               
                <div className="u-margin-8">
                <Title text="WE MAKE PEOPLE GENUINELY HAPPY"/>
                </div>
                <StoryCard />
                <div className="u-text-center">
                <a href="" className="btn_text">Learn more &rarr;</a>
                </div>
            </div>
        </section>
    )
}

export default Stories_section
