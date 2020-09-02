import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import StarWarsCall from "../containers/request";
import endUrls from "../containers/dbRoots";

export default function SelectButton() {
  const [click, isClicked] = useState(false);

  const buttonPress = () => {
    StarWarsCall(`${endUrls.people}?search=Luke`).then((p) => console.log(p));
  };

  return (
    <Button variant="primary" size="sm" onClick={buttonPress}>
      Who am I?
    </Button>
  );
}
