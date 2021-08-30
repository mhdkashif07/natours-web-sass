import { Grid } from "@material-ui/core";
import React from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGlobe, faDesktop, faServer, faMobile } from '@fortawesome/free-solid-svg-icons';


const Features = [
  {
    id: 1,
    icon: "faGlobe",
    title: "explore the world",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.",
  },

  {
    id: 2,
    icon: "icon",
    title: "Meet nature",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.",
  },

  {
    id: 3,
    icon: "icon",
    title: "find your way",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.",
  },

  {
    id: 4,
    icon: "icon",
    title: "live a healthier life",
    desc: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ipsum sapiente aspernatur.",
  },
];

const Features_list = () => {
  return (
    <div className="feature__section">
      <div className="feature__list_container">
        <Grid container justifyContent="space-evenly">
          {Features.map((item, index) => (
            <Grid item xs={7} sm={7} md={2} lg={2} xl={2}>
              <div className="feature__box" key={item.id}>
                <i className="feature__box-icon">
                <FontAwesomeIcon icon={faGlobe} />
                </i>
                <h3 className="feature__box-heading">{item.title}</h3>
                <p className="feature__box-text">{item.desc}</p>
              </div>
            </Grid>
          ))}
        </Grid>
      </div>
    </div>
  );
};

export default Features_list;
