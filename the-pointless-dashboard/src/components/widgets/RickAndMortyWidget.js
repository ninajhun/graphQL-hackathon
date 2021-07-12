import React, { useEffect, useState } from "react";
import "./widgets.css";
import "./title.css"

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
      <div className="card col-lg-4 col-md-4 col-sm-12 m-2">
        <div className="card-body text-start ">
          <h6 className="card-title mt-2 cardTitle">
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
                  style={{ height: "200px", width: "200px" }}
                />
                <p>{randomCharacter.name}</p>
              </>
            ) : (
              <p>Searching the Galaxy for alien lifeforms...</p>
            )}

            <div className="container">{}</div>
          </div>
        </div>
      </div>
    </>
  );
}
