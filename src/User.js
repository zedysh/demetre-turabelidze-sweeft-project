import React from "react";
import { useNavigate } from "react-router-dom";

function User(props) {
  const navigate = useNavigate();

  const { id, name, lastName, prefix, title, imageUrl } = props.userData;

  const handleClick = () => {
    navigate(`/user/${id}`);
  };

  return (
    <div className="grid-item" onClick={handleClick} key={id}>
      <img src={`${imageUrl}?=v${id}`} alt="Person" />
      <div className="grid-item-description">
        <h3>{`${prefix} ${name} ${lastName}`}</h3>
        <p>{title}</p>
      </div>
    </div>
  );
}

export default User;
