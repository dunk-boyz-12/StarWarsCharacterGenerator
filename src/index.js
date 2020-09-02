import React from "react";
import ReactDOM from "react-dom";
//components
import SelectButton from "./components/Button";
import InputForm from "./components/Form";
import { Container, Card, Form, Button, Row } from "react-bootstrap";
//styles
import "./styles/global.scss";
import CharacterCard from "./components/CharacterCard";
//babel
import "regenerator-runtime/runtime";
function App() {
  return (
    <Container fluid>
      <CharacterCard />
      <InputForm />
      <SelectButton />
    </Container>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
