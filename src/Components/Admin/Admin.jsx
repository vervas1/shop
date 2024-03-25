import React from 'react';
import { Form, Container, Col, Row } from 'react-bootstrap';

function Admin() {
  const handleSubmit = () => {
    console.log('submit');
  };

  return (
    <div className="container">
      <h1>Add product</h1>
      <Container>
        {/* Funkcija rasom cia kad uzsikrovus puslapiui neatsirastu iskarto */}
        <Form noValidate onSubmit={handleSubmit}>
          <Row>
            <Form.Group as={Col} md="12" controlId="validationCustom01">
              <Form.Label>First name</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="First name"
                defaultValue=""
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
        </Form>
      </Container>
    </div>
  );
}

export default Admin;
