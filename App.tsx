import * as React from 'react';
import './style.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const App: React.FC = () => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="text" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Last Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Email</Form.Label>
        <Form.Control type="text" placeholder="Email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>Telephone</Form.Label>
        <Form.Control type="text" placeholder="Password" />
      </Form.Group>
      <Button variant="primary text-left" type="submit">
        Submit
      </Button>
    </Form>
  );
};
export default App;
