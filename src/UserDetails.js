import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import FriendList from "./FriendList";

function UserDetails() {
  let { id } = useParams();

  const [singleUserData, setSingleUserData] = useState(null);

  useEffect(() => {
    fetch(
      `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${id}`
    )
      .then((response) => response.json())
      .then((data) => setSingleUserData(data));
  }, []);

  if (!singleUserData) return;

  console.log(singleUserData);

  return (
    <div className="single-user-data-container">
      <Header singleUserData={singleUserData} />
      <FriendList id={id} />
    </div>
  );
}

export default UserDetails;
