import React from "react";

function Header(props) {
  const {
    imageUrl,
    id,
    prefix,
    name,
    lastName,
    title,
    email,
    ip,
    jobArea,
    jobType,
    company,
    address,
  } = props.singleUserData;

  return (
    <div className="user-details-container">
      <header>
        <div>
          <img src={`${imageUrl}?=v${id}`} alt="User" />
        </div>
        <fieldset className="left-info">
          <legend>Info</legend>
          <strong>{`${prefix} ${name} ${lastName}`}</strong>
          <p>
            <i>{title}</i>
          </p>
          <div className="contact-info-container">
            <div>
              <span>
                <u>Email:</u>
              </span>
              <span> {email}</span>
            </div>
            <div>
              <span>
                <u>Ip Address:</u>
              </span>
              <span> {ip}</span>
            </div>
            <div>
              <span>
                <u>Job Area:</u>
              </span>
              <span> {jobArea}</span>
            </div>
            <div>
              <span>
                <u>Job Type:</u>
              </span>
              <span> {jobType}</span>
            </div>
          </div>
        </fieldset>
        <fieldset className="right-info">
          <legend>Address</legend>
          <strong>{`${company.name} ${company.suffix}`}</strong>
          <div>
            <span>
              <u>City:</u>
            </span>
            <span> {address.city}</span>
          </div>
          <div>
            <span>
              <u>Country:</u>
            </span>
            <span> {address.country}</span>
          </div>
          <div>
            <span>
              <u>State:</u>
            </span>
            <span> {address.state}</span>
          </div>
          <div>
            <span>
              <u>Street Address:</u>
            </span>
            <span> {address.streetAddress}</span>
          </div>
          <div>
            <span>
              <u>ZIP:</u>
            </span>
            <span> {address.zipCode}</span>
          </div>
          <div />
        </fieldset>
      </header>
    </div>
  );
}

export default Header;
