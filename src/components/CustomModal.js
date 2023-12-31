import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function CustomModal ({ id, setshowpopup }) {
  const {users} = useSelector((state) => state.users);
  const singleUser = users.filter((ele) => ele.id === id);
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <Link onClick={()=>{setshowpopup(false)}} className="btn btn-danger mb-3" >Close</Link>
      <h4><strong>Name: </strong>{singleUser[0].name}</h4>
      <p><strong>Email:</strong> {singleUser[0].email}</p>
      <p><strong>Phone:</strong> {singleUser[0].phone}</p>
      <p><strong>Country:</strong> {singleUser[0].country}</p>
      <p><strong>Age:</strong> {singleUser[0].age}</p>
      <p><strong>Gender:</strong> {singleUser[0].gender}</p>
      
      </div>
      
    </div>
  );
}

export default CustomModal;
