import React from "react";
import { useParams } from "react-router-dom";

function UserDetails() {
  let {id} = useParams();
  return <div>Product Details {id}</div>;
}

export default UserDetails;