import React from "react";
import User from "./User";

function UsersList(props) {
  console.log(props.data);
  return (
    <div className="grid-container">
      {props.data.map((userData) => (
        <User userData={userData}/>
      ))}
    </div>
  );
}

export default UsersList;
