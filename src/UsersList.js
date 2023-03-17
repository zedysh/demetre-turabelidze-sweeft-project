import React from "react";
import User from "./User";

function UsersList(props) {
  const { onUserClicked } = props;

  return (
    <div className="grid-container">
      {props.data.map((userData) => (
        <User userData={userData} id={props.id} onUserClicked={onUserClicked} />
      ))}
    </div>
  );
}

export default UsersList;
