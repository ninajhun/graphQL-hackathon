import React from "react";
import "./widgets.css";

export default function CoffeeWidget() {
  return (
    <>
      <div className="card col-lg-5 col-md-5 col-sm-12 m-2" >
        <div class="card-body text-start">
          <h6 class="card-title ">
            Want a cup of coffee? <span class="emoji">&#9749;</span>
          </h6>
          <div className="card-text">
            <p>Yelp found these coffee shops nearby:</p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Varius
              morbi enim nunc faucibus a pellentesque sit. Euismod lacinia at quis
              risus sed vulputate odio ut enim. Id velit ut tortor pretium
              viverra. Pellentesque habitant morbi tristique senectus et netus et
              malesuada. Pellentesque habitant morbi tristique senectus et.
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
