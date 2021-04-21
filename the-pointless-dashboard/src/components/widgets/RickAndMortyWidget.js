import React, { useEffect, useState } from "react";
import "./widgets.css";

const fetchRickAndMorty = async () => {
  const data = await fetch("https://rickandmortyapi.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: `
        query getCharacters {
          characters {
            results {
              name
              image
            }
          }
        }
      `,
    }),
  })
    .then((res) => res.json())
    .then((data) => data.data.characters.results);

  return data;
};

export default function RickAndMortyWidget() {
  const [rickAndAndMortyData, setRickAndMortyData] = useState();
  const [randomCharacter, setRandomCharacter] = useState();

  useEffect(() => {
    const data = fetchRickAndMorty();
    data.then((data) => {
      setRickAndMortyData(data);
    });
  }, []);

  useEffect(() => {
    if (rickAndAndMortyData) {
      setRandomCharacter(
        rickAndAndMortyData[
          Math.floor(Math.random() * rickAndAndMortyData.length)
        ]
      );
    }
  }, [rickAndAndMortyData]);

  return (
    <>
      <div className="card col-lg-5 col-md-5 col-sm-12 m-2">
        <div className="card-body text-start ">
          <h6 className="card-title">
            Here's a random Rick and Morty character for the sake of it{" "}
            <span className="emoji">&#128125;</span>
          </h6>
          <div className="card-text d-flex align-items-center justify-content-center flex-column">
            {randomCharacter ? (
              <>
                <img
                  className="img-thumbnail"
                  src={randomCharacter.image}
                  alt="..."
                />
                <p>{randomCharacter.name}</p>
              </>
            ) : null}

            <div className="container">{}</div>
          </div>
        </div>
      </div>
    </>
  );
}
