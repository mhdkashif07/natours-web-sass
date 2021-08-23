import React from "react";
import nat_8 from "../images/nat-8.jpg";

const StoryCard = () => {
  return (
    <div className="stories__container">
      <div className="story__card u-margin-8">
        <div className="story__card-photo">
          <figure className="story__card-shape">
            <img
              src={nat_8}
              alt="person on a tour"
              className="story__card-img"
            />
            <figcaption className="story__card-caption">Mary smith</figcaption>
          </figure>
        </div>
        <div className="story__card-text">
          <h3 className="heading-tertiary u-margin-small">
            I HAD THE BEST WEEK EVER WITH MY FAMILY
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            ipsum sapiente aspernatur libero repellat quis consequatur ducimus
            quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente
            aspernatur libero repellat quis consequatur ducimus quam nisi
            exercitationem omnis earum qui.
          </p>
        </div>
      </div>

      <div className="story__card u-margin-8">
        <div className="story__card-photo">
          <figure className="story__card-shape">
            <img
              src={nat_8}
              alt="person on a tour"
              className="story__card-img"
            />
            <figcaption className="story__card-caption">Mary smith</figcaption>
          </figure>
        </div>
        <div className="story__card-text">
          <h3 className="heading-tertiary u-margin-small">
            I HAD THE BEST WEEK EVER WITH MY FAMILY
          </h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam,
            ipsum sapiente aspernatur libero repellat quis consequatur ducimus
            quam nisi exercitationem omnis earum qui. Aperiam, ipsum sapiente
            aspernatur libero repellat quis consequatur ducimus quam nisi
            exercitationem omnis earum qui.
          </p>
        </div>
      </div>

      
    </div>
  );
};

export default StoryCard;
