import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import { Image } from 'react-bootstrap';
import './log.css'
import { FaEnvelope, FaEye, FaEyeSlash, FaLock } from 'react-icons/fa6';
import { Link } from 'react-router-dom';


function Login() {
  const [validated, setValidated] = useState(false);
  const [info, setInfo] = useState({
    fn:"",
    ln:"",
    em:"",
    ps:"",
    phn:"",
    city:"",
    state:"",
  })

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  const [password, setPassword] = useState('');
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };


  return (
    <>    

<Image src='../images/pint5[1].jpg' className='back' style={{height:"100vh", position:"fixed", top:"0px", left:"0px", width:"100%"}} fluid/>

<div className='d-flex log' style={{top:"20%"}}>
      <div className='dv'>
      <Form noValidate validated={validated} onSubmit={handleSubmit} className='form'>
      <Row className="mb-4">
        <h1 className='h1' style={{textAlign:"center", color:"rgb(92, 163, 191)"}}>LogIn</h1>
      </Row>
        <Row className="mb-3">
        <Form.Group  as={Col} md="9" controlId="validationCustomUsername">
          <Form.Label className='input'>Email</Form.Label>
          <InputGroup hasValidation>
            <InputGroup.Text id="inputGroupPrepend"><FaEnvelope color='black'/></InputGroup.Text>
            <Form.Control className='inpt'
              type="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              placeholder="Email"
              aria-describedby="inputGroupPrepend"
              required
            />
            
            <Form.Control.Feedback type='invalid'>Required</Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
      <Form.Group  as={Col} md="9" controlId="validationCustomUsername">
          <Form.Label className='input'>Password</Form.Label>
          <InputGroup  hasValidation>
            <InputGroup.Text id="inputGroupPrepend"><FaLock color='black'/></InputGroup.Text>
            <Form.Control className='inpt'
              placeholder="Password"
              aria-describedby="inputGroupPrepend"
             type={isPasswordVisible ? 'text' : 'password'}
        value={password}
        onChange={handlePasswordChange}  required />
        <InputGroup.Text id="inputGroupPrepend">
        <span onClick={togglePasswordVisibility} className="eye-icon" style={{ cursor: 'pointer' }}>
        {isPasswordVisible ?<FaEyeSlash color='black'/> : <FaEye  color='black'/> }
        </span></InputGroup.Text>
            <Form.Control.Feedback type='invalid'>Required</Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Button className='button mb-3' as={Col} md="2" type="submit">Login</Button>
      <div style={{display:"flex", justifyContent:"space-around"}}>
      <Link to="/components/reg" style={{cursor:"pointer"}}>Forgot Password?</Link>
      <Link to="/components/reg" style={{cursor:"pointer"}}>Doesn't have an account?</Link>
      </div>
      </Form>
    </div>
    </div>
    </>
  );
}

export default Login;