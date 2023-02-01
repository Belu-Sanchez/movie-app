import Form from 'react-bootstrap/Form';
import { Button } from '../index';

const Forgot = () => {
  return (
    <>
      <div className="container-sign-up"> 
        <h3>Password assistance</h3>
        <p>Enter the email address associated with your Movies App account.</p>
        <Form>

          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email"  />
          </Form.Group>

          <Button variant='' type='submit' >Continue</Button>

        </Form>
        </div>

    </>
  )
}

export { Forgot };