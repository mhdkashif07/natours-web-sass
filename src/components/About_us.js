import { Grid } from '@material-ui/core';
import React from 'react'
import Title from './Title';

const About_us = () => {
    return (
        <main>
            <section className="section_about">
                <div className="u-text-center u-margin-8">
                <Title text="Exciting tours for adventurous people"/>
                </div>
                <div className="about_us_description">
                    <Grid container>
                        <Grid item xs={12} sm={12} lg={6} xl={6} className="text_container">
                            <div className="text">text</div>
                        </Grid>
                        <Grid item xs={12} sm={12} lg={6} xl={6} className="text_container">
                            <div className="text">images</div>
                        </Grid>
                    </Grid>
                </div>
            </section>
        </main>
    )
}

export default About_us
