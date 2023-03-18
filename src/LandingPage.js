import React, { useState, useEffect } from "react";
import { InfiniteScroll } from "./InfiniteScroll";
import UsersList from "./UsersList";

function LandingPage(props) {
  const [data, setData] = useState({ list: [] });
  const [loading, setLoading] = useState(false);

  async function fetchData(currentPage = 1, userAmount = 20) {
    const response = await fetch(
      `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${currentPage}/${userAmount}`
    );
    const newData = await response.json();
    setLoading(false);

    setData((prevData) => {
      return {
        pagination: newData.pagination,
        list: [...prevData.list, ...newData.list],
      };
    });
  }

  return (
    <div className="landing-page-container">
      <InfiniteScroll
        fetchData={fetchData}
        loading={loading}
        setLoading={setLoading}
      >
        <UsersList data={data} />
      </InfiniteScroll>
    </div>
  );
}

export default LandingPage;
