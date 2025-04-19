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


function Reg() {
  const [validated, setValidated] = useState(false);

  const [fn, setFn] = useState("");
  const [ln, setLn] = useState("");
  const [em, setEm] = useState("");
  const [ps, setPs] = useState("");
  const [phn, setPhn] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");

  const handleChange = (event) => {
    switch (event.target.name) {
      case "fn":
        setFn(event.target.value);
        console.log(fn);
        break;
      case "ln":
        setLn(event.target.value);
        console.log(ln);
        break;
      case "em":
        setEm(event.target.value);
        console.log(em);
        break;
      case "phn":
        setPhn(event.target.value);
        console.log(phn);
        break;
      case "city":
        setCity(event.target.value);
        console.log(city);
        break;
      case "state":
        setState(event.target.value);
        console.log(state);
        break;
    }
  };

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
    setPs(event.target.value);
  };

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(!isPasswordVisible);
  };

  
    

  return (
    <>
      <Image src='../images/pint5[1].jpg' className='back' style={{height:"100vh", position:"fixed", top:"0px", left:"0px", width:"100%"}} fluid/>

<div className='d-flex log'>
      <div className='dv'>
      <Form noValidate validated={validated} onSubmit={handleSubmit} className='form'>
      <Row className="mb-4">
        <h1 className='h1' style={{textAlign:"center", color:"rgb(92, 163, 191)"}}>Registration</h1>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="6" controlId="validationCustom01">
          <Form.Label>First name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            name='fn'
            onChange={handleChange}
          />
          <Form.Control.Feedback type='invalid'>Required</Form.Control.Feedback>
          </Form.Group>
          {/* <Row className="mb-3"> */}
        <Form.Group as={Col} md="6" controlId="validationCustom02">
          <Form.Label>Last name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
            name='ln'
            onChange={handleChange}
          />
          <Form.Control.Feedback type='invalid'>Required</Form.Control.Feedback>
        </Form.Group>
        {/* </Row> */}
        </Row>
        <Row className="mb-3">
        <Form.Group as={Col} md="9" controlId="validationCustomUsername">
          <Form.Label>Email</Form.Label>
          <InputGroup className='inpt' hasValidation>
            <InputGroup.Text id="inputGroupPrepend"><FaEnvelope color='black'/></InputGroup.Text>
            <Form.Control
              type="email"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
              placeholder="Email"
              aria-describedby="inputGroupPrepend"
              required
              name='em'
              onChange={handleChange}
            />
            
            <Form.Control.Feedback type='invalid'>Required</Form.Control.Feedback>
          </InputGroup>
        </Form.Group>
      </Row>
      <Row className="mb-3">
      <Form.Group as={Col} md="7" controlId="validationCustomUsername">
          <Form.Label>Password</Form.Label>
          <InputGroup className='inpt' hasValidation>
            <InputGroup.Text id="inputGroupPrepend"><FaLock color='black'/></InputGroup.Text>
            <Form.Control
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
      <Row className="mb-3">
        <Form.Group as={Col} md="8" controlId="validationCustom03">
          <Form.Label>Phone No.</Form.Label>
          <Form.Control type="text" pattern="[7-9]{1}[0-9]{9}"  placeholder="Phone No." 
             name='phn'
             onChange={handleChange}
             required />
          <Form.Control.Feedback type='invalid'>Required</Form.Control.Feedback>
          </Form.Group>
          </Row>
          <Row className="mb-3">
        <Form.Group as={Col} md="4" controlId="validationCustom04">
          <Form.Label>City</Form.Label>
          <Form.Control type="text" placeholder="City" name='city' onChange={handleChange} required />
          <Form.Control.Feedback type='invalid'>Required</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom04">
          <Form.Label>State</Form.Label>
          <Form.Control type="text" placeholder="State" name='state' onChange={handleChange} required />
          <Form.Control.Feedback type='invalid'>Required</Form.Control.Feedback>
          </Form.Group>
      </Row>
      <Form.Group className="mb-3">
        <Form.Check
          required
          label="Agree to terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button className='button mb-3' type="submit">Submit form</Button>
      <div style={{display:"flex", justifyContent:"space-around"}}>
      <Link to="/" style={{cursor:"pointer"}}>Already have an account?</Link>
      </div>
      </Form>
    </div>
    </div>
    </>
  );
}

export default Reg;