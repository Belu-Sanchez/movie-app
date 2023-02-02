import Form from 'react-bootstrap/Form';
import { NavLink } from 'react-router-dom';
import { Button } from '../index';
import './styles.scss';

const SignIn = () => {
    return (
        <>
        <div className="container-form ">
            <div className="title">
                <h2>Movies <span>ADA</span></h2>
            </div>
            <div className="container-sign-in">
                <h3>Sign In</h3>
                <Form>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" />
                   
                   
                    </Form.Group>

                    <Button variant='form' type='submit' >Submit</Button>


                    <div>
                        <NavLink to="/forgot">Forgot your password?</NavLink>

                    </div>

                </Form>
            </div>
            </div>
        </>
    )
}

export { SignIn };