import React from "react";
import "./widgets.css";

export default function CoffeeWidget() {
  return (
    <>
      <div className="card col-lg-5 col-md-5 col-sm-12 m-2" >
        <div className="card-body text-start">
          <h6 className="card-title ">
            Want a cup of coffee? <span className="emoji">&#9749;</span>
          </h6>
          <div className="card-text">
            <p>Yelp found these coffee shops nearby:</p>
            <div className="container">
              {/* yelp info */}


            </div>

          </div>
        </div>
      </div>
    </>
  );
}
