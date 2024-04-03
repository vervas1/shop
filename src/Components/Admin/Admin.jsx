import React, { useState, useContext } from 'react';
import {
  Form,
  Container,
  Col,
  Row,
  Button,
  Spinner,
  Alert,
} from 'react-bootstrap';
import { cfg } from '../../cfg/cfg';
import { AppContext } from '../../context/AppContext';
import useAuth from '../../hooks/useAuth';

function Admin() {
  const [validated, setValidated] = useState(false);
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [imgUrl, setImgUrl] = useState('');
  const [status, setStatus] = useState({
    value: null, //'success' || 'danger'
    message: '',
  });
  const { token } = useAuth();
  const { fetchData } = useContext(AppContext);

  const handleSubmit = async (e) => {
    setValidated(true);
    // sustabdo defdault veikima
    e.preventDefault();

    const form = e.currentTarget;
    if (!form.checkValidity()) return;

    try {
      setLoading(true);
      const data = {
        title,
        description,
        img: imgUrl,
      };
      if (imgUrl.trim()) data.img = imgUrl;

      const response = await fetch(`${cfg.API.HOST}/product`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(data),
      });
      const product = await response.json();

      if (!response.ok) throw new Error(product.error);
      setStatus({ value: 'success', message: 'Product successfully created ' });
      await fetchData();
    } catch (error) {
      console.log('error', error.message);
      setStatus({
        value: 'danger',
        message: error.message || 'Product already exists',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="custom-container">
      <h1>Add product</h1>
      <Container>
        {status.value && <Alert variant={status.value}>{status.message}</Alert>}
        {/* Funkcija rasom cia kad uzsikrovus puslapiui neatsirastu iskarto */}
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row>
            <Form.Group as={Col} md="4" controlId="validationCustom01">
              <Form.Label>Title</Form.Label>
              <Form.Control
                required
                as="textarea"
                placeholder="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} md="4" controlId="validationCustom02">
              <Form.Label>Description</Form.Label>
              <Form.Control
                required
                as="textarea"
                placeholder="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group as={Col} md="4" controlId="validationCustom03">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="Image URL"
                value={imgUrl}
                onChange={(e) => setImgUrl(e.target.value)}
              />
              <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Button type="submit" disabled={loading}>
            Create product
          </Button>
          {loading && <Spinner animation="border" variant="success" />}
        </Form>
      </Container>
    </div>
  );
}

export default Admin;
