import React, { useState, useEffect } from "react";
import UsersList from "./UsersList";

function FriendList(props) {
  const { id } = props;
  const [currentPage, setCurrentPage] = useState(1);
  const [friendList, setFriendList] = useState({ list: [] });

  async function fetchData() {
    const response = await fetch(
      `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${id}/friends/${currentPage}/2`
    );
    const newData = await response.json();
    return newData;
  }

  /**
   * This function loads friendlist data and can optionally
   * append or not append to current data
   */
  async function loadData(append = true) {
    const newData = await fetchData(currentPage);
    setFriendList((prevData) => {
      const prevDataList = append ? prevData.list : [];
      return {
        pagination: newData.pagination,
        list: [...prevDataList, ...newData.list],
      };
    });
  }

  // if id changes, fetch new friendlist and do not append
  useEffect(() => {
    loadData(false);
  }, [id]);

  // if current page changes, append new data
  // don't fetch if current page is 1 (first useEffect has fetched initial data)
  useEffect(() => {
    if (currentPage === 1) return;
    loadData(true);
  }, [currentPage]);

  function handleScroll() {
    setCurrentPage((prevPage) => prevPage + 1);
  }

  return (
    <>
      <h2 className="friends-title">Friends: </h2>
      <UsersList
        data={friendList.list}
        id={id}
        handleHistoryChange={props.handleHistoryChange}
      />
      <button onClick={handleScroll}>Load More</button>
    </>
  );
}

export default FriendList;
