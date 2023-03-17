import React from "react";
import UsersList from "./UsersList";

function LandingPage(props) {
  return (
    <div className="landing-page-container">
      <UsersList data={props.data} />
    </div>
  );
}

export default LandingPage;
