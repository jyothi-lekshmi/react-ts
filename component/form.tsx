import * as React from 'react';
import '../style.css';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { useForm } from 'react-hook-form';
import { FormDataModel } from '../model/FormDataModel';
import { useState } from 'react';

interface Props {
  formData: Array<FormDataModel>;
  setFormData: React.Dispatch<React.SetStateAction<FormDataModel[]>>;
  handleAdd: (e: React.FormEvent<HTMLFormElement>) => void;
  setFname: React.Dispatch<React.SetStateAction<string>>;
  setLname: React.Dispatch<React.SetStateAction<string>>;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  setTel: React.Dispatch<React.SetStateAction<string>>;
  firstName: string;
  lname: string;
  email: string;
  tel: string;
}

const Forms: React.FC<Props> = ({
  formData,
  setFormData,
  handleAdd,
  setFname,
  setLname,
  setEmail,
  setTel,
  firstName,
  lname,
  email,
  tel,
}) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    resetField,
  } = useForm();

  return (
    <Form onSubmit={handleSubmit(handleAdd)}>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalFname">
        <Form.Label column sm={2}>
          First Name
        </Form.Label>
        <Col sm={10}>
          <Form.Control
            type="text"
            value={firstName}
            onChange={(e) => setFname(e.target.value)}
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
            value={lname}
            onChange={(e) => setLname(e.target.value)}
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
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
            value={tel}
            onChange={(e) => setTel(e.target.value)}
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
