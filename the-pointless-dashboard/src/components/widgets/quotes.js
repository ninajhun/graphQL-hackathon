import React, { useEffect, useState } from "react";
import "./widgets.css";

const grabQuotes = async () => {
  const data = await fetch("https://facadeapi.com/randomquotes", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query MyQuery {
        quotesList {
          quote
        }
      }
      `,
    }),
  })
    .then((res) => res.json())
    .then((data) => data);

  return data;
};

export default function Quotes() {
  const [data, setData] = useState("");
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  useEffect(() => {
    const data = grabQuotes();
    data.then((data) => {
      setData(data.data.quotesList[getRandomInt(342)].quote);
    });
  }, []);

  return (
    <>
      <div className="card col-lg-6 col-md-6 col-sm-12 m-2">
        <div className="card-body text-start ">
          <h6 className="card-title mt-1 cardTitle">
            Quote of the Day
          </h6>
          <p className="text-center">Give someone a program, you frustrate them for a day; teach them how to program, you frustrate them for a lifetime.{data}</p>
        </div>
      </div>
    </>
  )
}
