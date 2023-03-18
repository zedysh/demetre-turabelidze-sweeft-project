import React, { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "./Header";
import FriendList from "./FriendList";
import { useFriendHistory } from "./FriendHistoryContext";

function UserDetails() {
  let { id } = useParams();
  const [singleUserData, setSingleUserData] = useState(null);
  const [navigationHistory, setNavigationHistory] = useState([]);

  const { friendHistory, pushFriendInHistory } = useFriendHistory();

  useEffect(() => {
    fetch(
      `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${id}`
    )
      .then((response) => response.json())
      .then((data) => setSingleUserData(data));
    console.log(`fetcing details for user ${id}`);
  }, [id]);

  function handleHistoryChange(id, name) {
    setNavigationHistory((prevNavigationHistory) => {
      return [...prevNavigationHistory, { id: id, name: name }];
    });
    // console.log(navigationHistory);
  }

  useEffect(() => {
    if (!singleUserData) return;
    const displayName = `${singleUserData.prefix} ${singleUserData.name} ${singleUserData.lastName}`;
    pushFriendInHistory({ id: singleUserData.id, name: displayName });
    console.log(singleUserData);
  }, [singleUserData]);

  if (!singleUserData) return;

  return (
    <div className="single-user-data-container">
      <Header singleUserData={singleUserData} />
      {friendHistory.map((friend, index) => {
        return (
          <span key={friend.id}>
            <Link to={`/user/${friend.id}`}>{friend.name}</Link>
            {index !== friendHistory.length - 1 && " > "}
          </span>
        );
      })}
      <FriendList id={id} handleHistoryChange={handleHistoryChange} />
    </div>
  );
}

export default UserDetails;
