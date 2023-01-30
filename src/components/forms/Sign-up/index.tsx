import Form from 'react-bootstrap/Form';
import { Button } from '../index';
import './styles.scss';

const SignUp = () => {
  return (
    <>
      <div className="container-sign-up"> 
        <h3>Create account</h3>
        <Form>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicLastname">
            <Form.Label>Lastname</Form.Label>
            <Form.Control type="text" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email"  />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicDate">
            <Form.Label>Birthdate</Form.Label>
            <Form.Control type="date" />
          </Form.Group>

          <Button variant='sign-up' type='submit' >Submit</Button>
        </Form>
        </div>

    </>
  )
}

export { SignUp };