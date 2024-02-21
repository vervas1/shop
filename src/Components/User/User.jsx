import React, { useEffect, useState } from 'react';
import Spinner from 'react-bootstrap/Spinner';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './User.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faEnvelope,
  faPhone,
  faGlobe,
} from '@fortawesome/free-solid-svg-icons';

function User() {
  const [user, setUser] = useState('');
  const [show, setShow] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const fetchUser = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/users/2'
        );
        if (!response.ok) throw new Error('Something went wrong');

        const data = await response.json();
        console.log(data);
        setUser(data);
      } catch (error) {
        console.log(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchUser();
  }, []);

  //   sidebar
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  console.log(user);

  return (
    <>
      {loading && <Spinner animation="grow" />}
      {!loading && user && (
        <>
          <div className="user" onClick={handleShow}>
            {user.username[0]}
          </div>
          <Offcanvas show={show} onHide={handleClose} placement="end">
            <Offcanvas.Header closeButton closeVariant="white">
              <Offcanvas.Title>General Information</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <p>
                <FontAwesomeIcon icon={faUser} />
                {user.name}
              </p>
              <p>
                <FontAwesomeIcon icon={faEnvelope} />
                {user.email}
              </p>
              <p>
                <FontAwesomeIcon icon={faPhone} />
                {user.phone}
              </p>
              <p>
                <FontAwesomeIcon icon={faGlobe} />
                {user.website}
              </p>
            </Offcanvas.Body>
          </Offcanvas>
        </>
      )}
      {!loading && !user && <div>No user</div>}
    </>
  );
}

export default User;
