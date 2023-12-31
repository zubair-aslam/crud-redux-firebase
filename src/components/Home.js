import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CustomModal from "./CustomModal";
import { Link } from "react-router-dom";
import { deleteUser, getUsers } from "../store/actions/Actions";

function Home() {
  const dispatch = useDispatch();
  const [showpopup, setshowpopup] = useState(false)
  const [id, setid] = useState()
  const {users} = useSelector((state) => state.users);

  useEffect(() => {
    dispatch(getUsers());
  }, []);

  return (
    <div className="col-6 offset-3 text-center ">
      {showpopup && <CustomModal key={id} id={id} showpopup={showpopup} setshowpopup={setshowpopup} />}
      <div>
        {users &&
          users
          .map((ele) => (
            <div key={ele.id} className="user-card">
            <div className="card-body text-center">
              <h5 className="card-title">{ele.name}</h5>
              <p className="card-subtitle mb-3"><strong>Email:</strong> {ele.email}</p>
              <p className="card-text"><strong>Phone:</strong> {ele.phone}</p>
              <p className="card-text"><strong>Country:</strong> {ele.country}</p>
              <div className="button-group">
                <Link onClick={() => [setid(ele.id), setshowpopup(true)]} className="btn btn-primary">View</Link>
                <Link to={`/edit/${ele.id}`} className="btn btn-secondary">Edit</Link>
                <Link onClick={() => dispatch(deleteUser(ele.id))} className="btn btn-danger">Delete</Link>
              </div>
            </div>
          </div>
          ))}
      </div>
    </div>
  );
}

export default Home;