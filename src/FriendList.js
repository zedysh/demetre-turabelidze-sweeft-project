import React, { useState, useEffect } from "react";

function FriendList(props) {
  const [friendList, setFriendList] = useState([]);
  const { id } = props;

  useEffect(() => {
    fetch(
      `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${id}/friends/1/10`
    )
      .then((response) => response.json())
      .then((data) => setFriendList(data));
  }, []);

  if (!friendList) return;
  console.log(friendList.list);

  return (
    <div>
      <h2 className="friends-title">Friends: </h2>
      <div className="friend-list-container">
        {friendList.list.map((friend) => (
          <p>{friend.name}</p>
        ))}
      </div>
    </div>
  );
}

export default FriendList;
