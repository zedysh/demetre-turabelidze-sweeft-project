import React from "react";
import User from "./User";

function UsersList(props) {
  const { onUserClicked, handleHistoryChange } = props;

  return (
    <div className="grid-container">
      {props.data.map((userData, index) => (
        <User userData={userData} id={props.id} onUserClicked={onUserClicked} key={index} handleHistoryChange={handleHistoryChange}/>
      ))}
    </div>
  );
}

export default UsersList;
