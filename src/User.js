import React from "react";
import { useNavigate } from "react-router-dom";

function User(props) {
  const navigate = useNavigate();
  return (
    <div className="grid-item" onClick={() => navigate(`${props.userData.id}`)}>
      <img src={props.userData.imageUrl} alt="Person" />
      <div className="grid-item-description">
        <h3>{`${props.userData.prefix} ${props.userData.name} ${props.userData.lastName}`}</h3>
        <p>{props.userData.title}</p>
      </div>
    </div>
  );
}

export default User;
