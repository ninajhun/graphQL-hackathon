import React from "react";
import "./widgets.css";
import { useQuery } from "@apollo/client";
import { GET_COFFEE_QUERY } from "../../queries/getCoffeeShops.js";

export default function CoffeeWidget(props) {
  const { ip } = props;

  const { data, loading, error } = useQuery(GET_COFFEE_QUERY, {
    variables: { ip },
  });

  const coffeeShops = data?.getCoffeeShops;

  if (loading) return <p>Almost there...</p>;
  if (error) return <p>{error.message}</p>;

  console.log(coffeeShops);

  return (
    <>
      <div className="card col-lg-5 col-md-5 col-sm-12 m-2">
        <div className="card-body text-start">
          <h6 className="card-title ">
            Want a cup of coffee? <span className="emoji">&#9749;</span>
          </h6>
          <div className="card-text">
            <p>Yelp found these coffee shops nearby:</p>
            <div className="container">{/* yelp info */}</div>
          </div>
        </div>
      </div>
    </>
  );
}
