import React from "react";
import Title from "./Title";

const BookSection = () => {
  return (
    <section className="book__section">
      <div className="center">
        <div className="book">
          <div className="book__form">
            <form action="#" className="form">
              <Title text="Start booking now" />
              <div className="form__group">
                <input
                  type="text"
                  className="form__input"
                  placeholder="Full name"
                  id="name"
                  required
                />
              </div>

              <div className="form__group">
                <input
                  type="email"
                  className="form__input"
                  placeholder="Email address"
                  id="name"
                  required
                />
              </div>

              <div className="form__group-radio">
                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="small"
                    name="size"
                  />
                  <label for="small" className="form__radio-label">
                    Small tour group
                  </label>
                </div>

                <div className="form__radio-group">
                  <input
                    type="radio"
                    className="form__radio-input"
                    id="large"
                    name="size"
                  />
                  <label for="small" className="form__radio-label">
                    Large tour group
                  </label>
                </div>
              </div>

              <div className="btn_container">
                <a href="" className="btn btn_green">
                  Next step
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookSection;
