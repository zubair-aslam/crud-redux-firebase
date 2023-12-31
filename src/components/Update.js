import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { Button, Container, Form } from "react-bootstrap";
import { updateUser } from "../store/actions/Actions";

const Update = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [updateData, setUpdateData] = useState({});

  const { users } = useSelector((state) => state.users);

  useEffect(() => {
    if (id) {
      const singleUser = users.filter((ele) => ele.id === id);
      setUpdateData(singleUser[0]);
    }
  }, [id, users]);

  const newData = (e) => {
    setUpdateData({ ...updateData, [e.target.name]: e.target.value });
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    dispatch(updateUser(id, updateData));
    navigate("/home");
  };

  return (
    <Container fluid>
      <h2 className="my-4 offset-3">Edit the Data</h2>
      <Form className="col-6 offset-3 mt-3" onSubmit={handleUpdate}>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            name="name"
            value={updateData && updateData.name}
            placeholder="Enter your name"
            required
            onChange={newData}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={updateData && updateData.email}
            placeholder="Enter your email"
            required
            onChange={newData}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Phone</Form.Label>
          <Form.Control
            type="number"
            name="phone"
            value={updateData && updateData.phone}
            placeholder="Phone Number"
            required
            onChange={newData}
          />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Age</Form.Label>
          <Form.Control
            type="number"
            value={updateData && updateData.age}
            name="age"
            placeholder="Age"
            required
            onChange={newData}
          />
           </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Country</Form.Label>
          <Form.Control
            type="string"
            value={updateData && updateData.country}
            name="country"
            placeholder="Country"
            required
            onChange={newData}
          />
        </Form.Group>
        <div className="mb-3">
          <input
            className="form-check-input"
            name="gender"
            value="Male"
            type="radio"
            checked={updateData && updateData.gender === "Male"}
            onChange={newData}
          />
          <label className="form-check-label">Male</label>

          <input
            className="form-check-input"
            name="gender"
            value="Female"
            type="radio"
            checked={updateData && updateData.gender === "Female"}
            onChange={newData}
          />
          <label className="form-check-label">Female</label>
        </div>
        <Button variant="primary" type="submit" className="mt-3">
          Submit
        </Button>
      </Form>
    </Container>
  );
};

export default Update;
