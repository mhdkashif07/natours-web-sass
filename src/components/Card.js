import React from "react";
import { Grid } from "@material-ui/core";
import Button from '../components/Button';

const Card = () => {
  return (
    <div>
      <Grid container justifyContent="space-evenly">
        <Grid item xs={8} sm={8} lg={3} xl={3}>
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--1"></div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--1">
                  The sea explorer
                </span>
              </h4>
              <div className="card__details">
                  <ul>
                      <li>3 days tours</li>
                      <li>up to 30 people</li>
                      <li>2 tour guides</li>
                      <li>sleep in cozy hotels</li>
                      <li>Difficulty: easy</li>
                  </ul>
              </div>
            </div>
            <div className="card__side card__side--back">
                <div className="card__cta">
                    <div className="card__price-box">
                        <p className="card__price-only">only</p>
                        <p className="card__price-value">$297</p>
                    </div>
                    <Button text="Book Now!" />
                </div>
            </div>
          </div>
        </Grid>

        <Grid item xs={8} sm={8} lg={3} xl={3}>
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--1"></div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--1">
                  The sea explorer
                </span>
              </h4>
              <div className="card__details">
                  <ul>
                      <li>3 days tours</li>
                      <li>up to 30 people</li>
                      <li>2 tour guides</li>
                      <li>sleep in cozy hotels</li>
                      <li>Difficulty: easy</li>
                  </ul>
              </div>
            </div>
            <div className="card__side card__side--back">
                <div className="card__cta">
                    <div className="card__price-box">
                        <p className="card__price-only">only</p>
                        <p className="card__price-value">$297</p>
                    </div>
                    <Button text="Book Now!" />
                </div>
            </div>
          </div>
        </Grid>

        <Grid item xs={8} sm={8} lg={3} xl={3}>
          <div className="card">
            <div className="card__side card__side--front">
              <div className="card__picture card__picture--1"></div>
              <h4 className="card__heading">
                <span className="card__heading-span card__heading-span--1">
                  The sea explorer
                </span>
              </h4>
              <div className="card__details">
                  <ul>
                      <li>3 days tours</li>
                      <li>up to 30 people</li>
                      <li>2 tour guides</li>
                      <li>sleep in cozy hotels</li>
                      <li>Difficulty: easy</li>
                  </ul>
              </div>
            </div>
            <div className="card__side card__side--back">
                <div className="card__cta">
                    <div className="card__price-box">
                        <p className="card__price-only">only</p>
                        <p className="card__price-value">$297</p>
                    </div>
                    <Button text="Book Now!" />
                </div>
            </div>
          </div>
        </Grid>


      </Grid>
    </div>
  );
};

export default Card;
