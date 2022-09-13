import * as React from 'react';
import '../style.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useForm } from 'react-hook-form';
const Forms: React.FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data, e: React.FormEvent) => {
    e.preventDefault();
    console.log(data);
    console.log(errors);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalFname">
        <Form.Label column sm={2}>
          First Name
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="text"
            placeholder="First Name"
            {...register('fname', {
              pattern: {
                value: /^[a-zA-Z ]*$/,
                message: 'First name should contains only albhabets',
              },
            })}
          />
          {errors.fname?.message && (
            <p>First name should contains only albhabets</p>
          )}
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalLname">
        <Form.Label column sm={2}>
          Last Name
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="text"
            placeholder="Last Name"
            {...register('lname', {
              pattern: {
                value: /^[a-zA-Z ]*$/,
                message: 'Last name should contains only albhabets',
              },
            })}
          />
        </Col>
        {errors.lname?.message && (
          <p>Last name should contains only albhabets</p>
        )}
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          Email
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="text"
            placeholder="Email"
            {...register('email', {
              pattern: {
                value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                message: 'Invalidemail format',
              },
            })}
          />
        </Col>
        {errors.email?.message && <p>Invalid Email Format</p>}
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalTel">
        <Form.Label column sm={2}>
          Telephone
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="tel"
            placeholder="Telephone"
            {...register('tel', {
              pattern: {
                value: /(7|8|9)\d{9}/,
                message: 'Invalid Telephone',
              },
            })}
          />
        </Col>
        {errors.tel?.message && <p>Invalid Telephone</p>}
      </Form.Group>
      <Button variant="primary" className="mb-3 " type="submit">
        Submit
      </Button>
    </Form>
  );
};
export default Forms;
