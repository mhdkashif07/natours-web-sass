import React from "react";
import { Grid } from "@material-ui/core";
import Button from "../components/Button";
import nat_5 from "../images/nat-5.jpg";
import nat_6 from "../images/nat-6.jpg";
import nat_7 from "../images/nat-7.jpg";

const CARD = [
  {
    id: 1,
    background_image: nat_5,
    heading: "The sea explorer",
    detail_1: "3 days tours",
    detail_2: "up to 30 people",
    detail_3: "2 tour guides",
    detail_4: "sleep in cozy hotels",
    detail_5: "Difficulty: easy",
    price_only: "only",
    price_value: "297",
  },

  {
    id: 2,
    background_image: nat_6,
    heading: "The sea explorer",
    detail_1: "3 days tours",
    detail_2: "up to 30 people",
    detail_3: "2 tour guides",
    detail_4: "sleep in cozy hotels",
    detail_5: "Difficulty: easy",
    price_only: "only",
    price_value: "297",
  },

  {
    id: 3,
    background_image: nat_7,
    heading: "The sea explorer",
    detail_1: "3 days tours",
    detail_2: "up to 30 people",
    detail_3: "2 tour guides",
    detail_4: "sleep in cozy hotels",
    detail_5: "Difficulty: easy",
    price_only: "only",
    price_value: "297",
  }
];

const Card = () => {
  return (
    <div>
      <Grid container justifyContent="space-evenly">
        {CARD.map((item, index) => (
          <Grid item xs={8} sm={8} lg={3} xl={3}>
            <div className="card" key={item.id}>
              <div className="card__side card__side--front">
                <div
                  className="card__picture card__picture--1"
                  style={{ "--img": `url(${item.background_image})` }}
                ></div>
                <h4 className="card__heading">
                  <span className="card__heading-span card__heading-span--1">
                    {item.heading}
                  </span>
                </h4>
                <div className="card__details">
                  <ul>
                    <li>{item.detail_1}</li>
                    <li>{item.detail_2}</li>
                    <li>{item.detail_3}</li>
                    <li>{item.detail_4}</li>
                    <li>{item.detail_5}</li>
                  </ul>
                </div>
              </div>
              <div className="card__side card__side--back">
                <div className="card__cta">
                  <div className="card__price-box">
                    <p className="card__price-only">{item.price_only}</p>
                    <p className="card__price-value">${item.price_value}</p>
                  </div>
                  <Button text="Book Now!" />
                </div>
              </div>
            </div>
          </Grid>
        ))}
      </Grid>

      <div className="btn_container u-text-center u-margin-top-huge">
        <a href="" className="btn btn_green">
          Discover all tours
        </a>
      </div>
    </div>
  );
};

export default Card;
