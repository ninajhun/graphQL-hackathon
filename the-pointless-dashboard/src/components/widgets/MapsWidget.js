import React, { useState, useEffect } from "react";
import "./widgets.css";
import { useQuery } from "@apollo/client";
import { GET_LOCATION_QUERY } from "../../queries/getLocation";

export default function MapsWidget(props) {
  const { ip } = props;
  const { data, error } = useQuery(GET_LOCATION_QUERY, {
    variables: { ip },
  });

  const [longitude, setLongitude] = useState(null);
  const [latitude, setLatitude] = useState(null);

  useEffect(() => {
    if (data) {
      setLongitude(data.location.longitude);
      setLatitude(data.location.latitude);
    }
  }, [data]);

  if (error) return <p>{error.message}</p>;

  return (
    <>
      <div className="card col-lg-10 col-md-10 col-sm-12 my-2 p-5 ">
        <div className="card-body text-start">
          <h6 className="card-title ">I see you...</h6>

          <iframe
            title="map"
            style={{
              width: "100%",
              height: "90%",
            }}
            src={`https://www.google.com/maps/embed/v1/place?key=AIzaSyDGH75fWG7ixeoQpr3Jhz3BoIL8TVOE3gQ
                &q=${latitude},${longitude}`}
          ></iframe>
        </div>
      </div>
    </>
  );
}
