import { Grid } from "@material-ui/core";
import React from "react";
import Title from "./Title";
import nat_1 from '../images/nat-1-large.jpg';
import nat_2 from '../images/nat-2-large.jpg';
import nat_3 from '../images/nat-3-large.jpg';

const Adventure = [
  {
    id: 1,
    title: "YOU'RE GOING TO FALL IN LOVE WITH NATURE",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.",
  },

  {
    id: 2,
    title: "LIVE ADVENTURES LIKE YOU NEVER HAVE BEFORE",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur libero repellat quis consequatur ducimus quam nisi exercitationem omnis earum qui.",
  },
];

const About_us = () => {
  return (
    <main>
      <section className="section_about">
        <div className="u-text-center u-margin-8">
          <Title text="Exciting tours for adventurous people" />
        </div>
        <div className="about_us_description">
          <Grid container justifyContent="center">
            <Grid item xs={10} sm={10} md={5} lg={5} xl={5} className="about_item">
              <div className="text">
                {Adventure.map((item, index) => (
                  <>
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                  </>
                ))}

                <a href="" className="btn_text">Learn more &rarr;</a>
              </div>

            </Grid>
            <Grid item xs={10} sm={10} md={5} lg={5} xl={5} className="about_item">
              <div className="images_container">
                  <div className="composition">
                      <img src={nat_1} alt="photo 1" className="composition__photo composition__photo-1" />
                      <img src={nat_2} alt="photo 2" className="composition__photo composition__photo-2" />
                      <img src={nat_3} alt="photo 3" className="composition__photo composition__photo-3" />
                  </div>
              </div>
            </Grid>
          </Grid>
        </div>
      </section>
    </main>
  );
};

export default About_us;
