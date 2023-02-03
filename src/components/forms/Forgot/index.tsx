import Form from 'react-bootstrap/Form';
import { Button } from '../index';
import './styles.scss'

const Forgot = () => {
  return (
    <>
      <div className="form-forgot">
        <div className="container-forgot">
          <h3>Password assistance</h3>
          <p>Enter the email address associated with your Movies App account.</p>
          <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" />
            </Form.Group>
            <Button variant='forgot' type='submit' >Continue</Button>
          </Form>
        </div>
      </div>
    </>
  )
}

export { Forgot };