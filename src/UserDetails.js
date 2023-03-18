import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Header from "./Header";
import FriendList from "./FriendList";

function UserDetails() {
  let { id } = useParams();

  const [singleUserData, setSingleUserData] = useState(null);
  const [navigationHistory, setNavigationHistory] = useState([])

  useEffect(() => {
    fetch(
      `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${id}`
    )
      .then((response) => response.json())
      .then((data) => setSingleUserData(data));
    console.log(`fetcing details for user ${id}`);
  }, [id]);


  function handleHistoryChange(id, name){
    setNavigationHistory(prevNavigationHistory => {
      return(
        [...prevNavigationHistory, {id: id, name: name}]
      )
    })
    console.log(navigationHistory)
  }

  if (!singleUserData) return;

  return (
    <div className="single-user-data-container">
      <Header singleUserData={singleUserData} />
      <FriendList id={id} handleHistoryChange={handleHistoryChange}/>
    </div>
  );
}

export default UserDetails;
