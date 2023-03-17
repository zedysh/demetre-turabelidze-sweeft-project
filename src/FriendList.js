import React, { useState, useEffect } from "react";
import UsersList from "./UsersList";

function FriendList(props) {
  const [friendList, setFriendList] = useState(undefined);
  const { id } = props;

  useEffect(() => {
    fetch(
      `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${id}/friends/1/10`
    )
      .then((response) => response.json())
      .then((data) => setFriendList(data));
  }, [id]);

  if (!friendList) return;

  return (
    <>
      <h2 className="friends-title">Friends: </h2>
      <UsersList data={friendList.list} />
    </>
  );
}

export default FriendList;
