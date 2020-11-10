import React, { useEffect } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import facade from '../apiFacade';
import Login from './Login';
import { useHistory } from 'react-router-dom';

function Home(props) {
  const history = useHistory();

  useEffect(() => {
    const user = facade.getUser();
    if (user) {
      history.push('/dashboard');
    } else {
      history.push('/');
    }
  }, []);

  return (
    <>
      <Container>
        <Col className="text-center">
          <h1>Group π</h1>
        </Col>
        {!props.loggedIn && (
          <Row>
            <Col>
              <h1>Welcome</h1>
              <h2>How to get started with this project:</h2>
              <ol>
                <li>Run 'npm install' to install dependencies</li>
                <li>Run 'npm start' to begin local server</li>
                <li>
                  To add a new page, add it to the Switch in App.js, and the
                  header.jsx component
                  <ul>
                    <li>
                      Make sure the 'to' attribute in Header matches the 'path'
                      attribute in App
                    </li>
                  </ul>
                </li>
              </ol>
            </Col>
            <Col sm="4">
              <Login setLoggedIn={props.setLoggedIn} />
            </Col>
          </Row>
        )}
      </Container>
    </>
  );
}
export default Home;
