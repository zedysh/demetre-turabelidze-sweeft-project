import React, { useState, useEffect } from "react";
import { InfiniteScroll } from "./InfiniteScroll";
import UsersList from "./UsersList";

function FriendList(props) {
  const { id } = props;
  const [friendList, setFriendList] = useState({ list: [] });
  const [loading, setLoading] = useState(false);

  async function fetchData(currentPage = 1, userAmount = 20) {
    const response = await fetch(
      `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${id}/friends/${currentPage}/${userAmount}`
    );
    const newData = await response.json();
    setLoading(false);

    setFriendList((prevData) => {
      return {
        list: [...prevData.list, ...newData.list],
      };
    });
    return newData;
  }

  /**
   * This function loads initial friendList data
   */
  async function loadInitialData() {
    const newData = await fetchData(1);
    setFriendList({ list: [...newData.list] });
  }

  // if id changes, load initial data.
  useEffect(() => {
    loadInitialData();
  }, [id]);

  return (
    <>
      <h2 className="friends-title">Friends: </h2>
      <InfiniteScroll
        fetchData={fetchData}
        loading={loading}
        setLoading={setLoading}
      >
        <UsersList data={friendList} id={id} />
      </InfiniteScroll>
    </>
  );
}

export default FriendList;
