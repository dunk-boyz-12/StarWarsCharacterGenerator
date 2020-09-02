import React from "react";
import { Form } from "react-bootstrap";

export default function NameForm() {
  return (
    <Form>
      <Form.Group>
        <Form.Label style={{ fontSize: ".8rem" }}>
          Enter Your First Name
        </Form.Label>
        <Form.Control type="text" />
      </Form.Group>
    </Form>
  );
}
