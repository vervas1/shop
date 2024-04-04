import React, { useState, useContext } from 'react';
import {
  Spinner,
  Offcanvas,
  Form,
  Row,
  Col,
  Button,
  Alert,
} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { cfg } from '../../cfg/cfg';
import useAuth from '../../hooks/useAuth';
import { AppContext } from '../../context/AppContext';

function AdminUser() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [validated, setValidated] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const { token, setToken } = useAuth();
  const { showLogin, setShowLogin } = useContext(AppContext);

  const handleClose = () => {
    setShowLogin(false);
    setValidated(false);
    setUsername('');
    setPassword('');
  };
  const handleShow = () => setShowLogin(true);
  const handleSubmit = async (e) => {
    setValidated(true);
    // sustabdo defdault veikima
    e.preventDefault();

    const form = e.currentTarget;
    if (!form.checkValidity()) return;
    console.log(username, password);
    try {
      setLoading(true);
      if (error) setError(false);
      const response = await fetch(`${cfg.API.HOST}/user/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) throw new Error('username or password incorrect');

      const user = await response.json();
      console.log(user);
      setToken(user.token);
      handleClose();
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="user" onClick={handleShow}>
        <FontAwesomeIcon icon={faUser} />
      </div>
      <Offcanvas show={showLogin} onHide={handleClose} placement="end">
        {token ? (
          <Offcanvas.Header closeButton closeVariant="white">
            <Offcanvas.Title>
              {token ? 'You are connected' : 'Please Login'}
            </Offcanvas.Title>
          </Offcanvas.Header>
        ) : (
          <>
            <Offcanvas.Header closeButton closeVariant="white">
              <Offcanvas.Title>Login</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              {error && <Alert variant="danger">Error</Alert>}
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row>
                  <Form.Group as={Col} controlId="validationCustom01">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                      required
                      type="text"
                      placeholder="Username"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      Username is required
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row style={{ marginTop: '1rem' }}>
                  <Form.Group as={Col} controlId="validationCustom02">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      required
                      type="password"
                      placeholder="Password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      Password is required
                    </Form.Control.Feedback>
                  </Form.Group>
                </Row>

                <Button
                  style={{ marginTop: '2rem' }}
                  type="submit"
                  disabled={loading || token}
                >
                  Login
                </Button>
                {loading && <Spinner animation="border" variant="success" />}
              </Form>
            </Offcanvas.Body>
          </>
        )}
      </Offcanvas>
    </>
  );
}

export default AdminUser;
