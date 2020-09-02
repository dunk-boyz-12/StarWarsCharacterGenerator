import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import StarWarsCall from "../containers/request";

export default function CharacterCard() {
  const [load, isLoaded] = useState(false);
  //StarWarsCall("people/1/").then((p) => console.log(p));
  return (
    <Card style={{ width: "100%" }}>
      <Card.Img variant="top" />
      <Card.Body>
        <Card.Title>Luke Skywalker</Card.Title>
        <Card.Text>Age: </Card.Text>
        <Card.Text>Eye Color: </Card.Text>
        <Card.Text>Hair Color: </Card.Text>
        <Card.Text>Homeworld: </Card.Text>
        <Card.Text>Species: </Card.Text>
      </Card.Body>
    </Card>
  );
}
