import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/esm/Container';
import {useDispatch} from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { addUser } from '../store/actions/Actions';

function Create() {
  const Navigate = useNavigate();
    const [users, setUsers] = useState()

    const getUserData = (e)=>{
        setUsers({...users, [e.target.name] : e.target.value })
    }
    const dispatch = useDispatch();

    const handleSubmit = (e)=>{
      e.preventDefault();
        dispatch(addUser(users))
        Navigate('/home')
      }
   
  return (
    <Container fluid>
      <h2 className='my-4 offset-3'>Fill the Data</h2>
    <Form className='col-6 offset-3 mt-3' onSubmit={handleSubmit}>
      <Form.Group className="mb-3" >
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" name='name' placeholder="Enter your name" required onChange={getUserData}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter your email" required onChange={getUserData}/>
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Phone</Form.Label>
        <Form.Control type="number" name='phone' placeholder="Phone Number" required onChange={getUserData}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Age</Form.Label>
        <Form.Control type="number" name='age' placeholder="Age" required onChange={getUserData}/>
      </Form.Group>
      <Form.Group className="mb-3" >
        <Form.Label>Country</Form.Label>
        <Form.Control type="string" name='country' placeholder="Country" required onChange={getUserData}/>
      </Form.Group>
      <div className="mb-3">
          <input
            className="form-check-input"
            name="gender"
            value="Male"
            type="radio"
            onChange={getUserData}
            required
          />
          <label className="form-check-label">Male</label>
        </div>
        <div className="mb-3">
          <input
            className="form-check-input"
            name="gender"
            value="Female"
            type="radio"
            onChange={getUserData}
          />
          <label className="form-check-label">Female</label>
        </div>
      <Button variant="primary" type="submit" className='mt-3'>
        Submit
      </Button>
    </Form>
    </Container>
  );
}

export default Create;
