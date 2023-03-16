import React, {useEffect, useState} from "react";
import { useParams } from "react-router-dom";

function UserDetails() {
  let {id} = useParams();

  const [singleUserData, setSingleUserData] = useState({})

  useEffect(() => {
    fetch(`http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${id}`)
      .then(response => response.json())
      .then(data => setSingleUserData(data));
  }, []);

  console.log(singleUserData)


  return <div>{singleUserData.email}</div>;
}

export default UserDetails;