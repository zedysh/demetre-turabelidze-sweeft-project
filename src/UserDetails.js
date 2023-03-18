import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "./Header";
import FriendList from "./FriendList";
import { useFriendHistory } from "./FriendHistoryContext";

function UserDetails() {
  let { id } = useParams();
  const [singleUserData, setSingleUserData] = useState(null);

  const { friendHistory, pushFriendInHistory } = useFriendHistory();

  useEffect(() => {
    fetch(
      `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${id}`
    )
      .then((response) => response.json())
      .then((data) => setSingleUserData(data));
  }, [id]);

  useEffect(() => {
    if (!singleUserData) return;
    const displayName = `${singleUserData.prefix} ${singleUserData.name} ${singleUserData.lastName}`;
    pushFriendInHistory({ id: singleUserData.id, name: displayName });
  }, [singleUserData]);

  if (!singleUserData) return;

  return (
    <div className="single-user-data-container">
      <Header singleUserData={singleUserData} />
      <div className="previous-searches">
        {friendHistory.map((friend, index) => {
          return (
            <span key={friend.id} classNa>
              <Link to={`/user/${friend.id}`}>{friend.name}</Link>
              {index !== friendHistory.length - 1 && " > "}
            </span>
          );
        })}
      </div>
      <FriendList id={id} />
    </div>
  );
}

export default UserDetails;
