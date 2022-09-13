import * as React from 'react';
import '../style.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';

const Forms: React.FC = () => {
  return (
    <Form>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalFname">
        <Form.Label column sm={2}>
          First Name
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text" placeholder="First Name" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalLname">
        <Form.Label column sm={2}>
          Last Name
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="text" placeholder="Last Name" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Email
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="email" placeholder="Email" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalTel">
        <Form.Label column sm={2}>
          Email
        </Form.Label>
        <Col sm={10}>
          <Form.Control type="tel" placeholder="Telephone" />
        </Col>
      </Form.Group>
      <Button variant="primary" className="mb-3 " type="submit">
        Submit
      </Button>
    </Form>
  );
};
export default Forms;
