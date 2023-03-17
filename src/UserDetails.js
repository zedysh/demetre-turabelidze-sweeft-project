import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
    <div className="user-details-container">
      <header>
        <div>
          <img
            src={`${singleUserData.imageUrl}?=v${singleUserData.id}`}
            alt="User"
          />
        </div>
        <fieldset className="left-info">
          <legend>Info</legend>
          <strong>{`${singleUserData.prefix} ${singleUserData.name} ${singleUserData.lastName}`}</strong>
          <p>
            <i>{singleUserData.title}</i>
          </p>
          <div className="contact-info-container">
            <div>
              <span>
                <u>Email:</u>
              </span>
              <span> {singleUserData.email}</span>
            </div>
            <div>
              <span>
                <u>Ip Address:</u>
              </span>
              <span> {singleUserData.ip}</span>
            </div>
            <div>
              <span>
                <u>Job Area:</u>
              </span>
              <span> {singleUserData.jobArea}</span>
            </div>
            <div>
              <span>
                <u>Job Type:</u>
              </span>
              <span> {singleUserData.jobType}</span>
            </div>
          </div>
        </fieldset>
        <fieldset className="right-info">
          <legend>Address</legend>
          <strong>{`${singleUserData.company.name} ${singleUserData.company.suffix}`}</strong>
          <div>
            <span>
              <u>City:</u>
            </span>
            <span> {singleUserData.address.city}</span>
          </div>
          <div>
            <span>
              <u>Country:</u>
            </span>
            <span> {singleUserData.address.country}</span>
          </div>
          <div>
            <span>
              <u>State:</u>
            </span>
            <span> {singleUserData.address.state}</span>
          </div>
          <div>
            <span>
              <u>Street Address:</u>
            </span>
            <span> {singleUserData.address.streetAddress}</span>
          </div>
          <div>
            <span>
              <u>ZIP:</u>
            </span>
            <span> {singleUserData.address.zipCode}</span>
          </div>
          <div />
        </fieldset>
      </header>
    </div>
  );
}

export default UserDetails;
