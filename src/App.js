import React, { useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stars } from "@react-three/drei";
import { Physics } from "@react-three/cannon";
import axios from "axios";
import Plane from "./components/plane/plane";
import Box from "./components/box/box";
import "./App.css";

function App() {
  const [characters, setCharacters] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    //get data from API
    const fetchData = async () => {
      await axios
        .get("https://rickandmortyapi.com/api/character/?page=2")
        .then((res) => {
          setCharacters(
            res.data.results.map((item) => ({
              url: item.image,
              name: item.name,
              gender: item.gender,
              species: item.species,
            }))
          );
        })
        .catch(function (error) {
          // handle error
          console.log(error);
        });
    };
    fetchData();
    console.log("Fetch data");
  }, []);

  return (
    <div className="full-screen">
      <div className="search-container">
        <input
          className="input-search"
          placeholder="Search character"
          type="text"
          value={searchValue}
          onChange={(event) => setSearchValue(event.target.value)}
        />
      </div>
      <Canvas>
        <OrbitControls />
        <Stars />
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 15, 10]} angle={0.3} />
        <Physics>
          {characters &&
            characters
              .filter(
                (
                  character // filter by name
                ) =>
                  character.name
                    .toLowerCase()
                    .includes(searchValue.toLowerCase())
              )
              .map(
                (
                  character,
                  index // map into boxes
                ) => <Box character={character} z={index * -1.4} key={index} />
              )}
          <Plane />
        </Physics>
      </Canvas>
    </div>
  );
}

export default App;
