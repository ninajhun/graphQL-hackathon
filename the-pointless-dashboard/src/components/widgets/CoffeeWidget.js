import React, { useEffect, useState } from "react";
import "./widgets.css";
import { useQuery } from "@apollo/client";
import { GET_COFFEE_QUERY } from "../../queries/getCoffeeShops.js";

export default function CoffeeWidget(props) {
  const { ip } = props;
  const { data, loading, error } = useQuery(GET_COFFEE_QUERY, {
    variables: { ip },
  });

  const [coffeeShops, setCoffeeShops] = useState(null);

  useEffect(() => {
    if (data) {
      setCoffeeShops(data.location.coffeeShops);
    }
  }, [data]);

  if (loading) return <p>Roasting your coffee beans still...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <>
      <div className="card col-lg-5 col-md-5 col-sm-12 m-2">
        <div className="card-body text-start">
          <h6 className="card-title ">
            Want a cup of coffee? <span className="emoji">&#9749;</span>
          </h6>
          <div className="card-text">
            <div className="container d-flex align-items-start justify-content-center">
              {!coffeeShops
                ? null
                : coffeeShops.map((coffeeShop, index) => (
                    <div key={index} className="col-4 ">
                      {/* <div className="thumbnail-container"> */}
                      <a href={coffeeShop.url} target="_blank" rel="noreferrer">
                        <img
                          src={coffeeShop.image_url}
                          className="thumbnail"
                          alt="..."
                        ></img>
                      </a>
                      {/* </div> */}
                      <p className="mt-2">{coffeeShop.name}</p>
                    </div>
                  ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
