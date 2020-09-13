import React, { useState, useEffect } from "react";
import StarWarsCall from "../containers/request";
import endUrls from "../containers/dbRoots";
import CCard from "./CCard";
//material-ui
import { Container } from "@material-ui/core";

const App = () => {
  const [character, getCharacter] = useState({});

  function APICall() {
    let rand = Math.floor(Math.random() * 82);
    StarWarsCall(`${endUrls.people}${rand}/`).then((data) => {
      getCharacter(data);
      return data;
    });
  }

  useEffect(() => {
    APICall();
  }, []);

  return (
    <Container maxWidth="md">
      <CCard
        name={character.name}
        by={character.birth_year}
        ht={character.height}
        skinColor={character.skin_color}
        eColor={character.eye_color}
        clickHandle={APICall}
      />
    </Container>
  );
};

export default App;
