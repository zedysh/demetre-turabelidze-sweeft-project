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
    console.log(id);
    return newData;
  }

  useEffect(() => {
    async function loadData() {
      const newData = await fetchData(currentPage);
      setFriendList((prevData) => {
        return {
          pagination: newData.pagination,
          list: [...prevData.list, ...newData.list],
        };
      });
    }
    loadData();
    console.log(`Fetching friendlist for ${id}`);
  }, [id, currentPage]);

  function handleScroll() {
    setCurrentPage((prevPage) => prevPage + 1);
  }

  function onUserClicked() {
    setFriendList({ list: [] });
  }

  return (
    <>
      <h2 className="friends-title">Friends: </h2>
      <UsersList data={friendList.list} id={id} onUserClicked={onUserClicked} />
      <button onClick={handleScroll}>Load More</button>
    </>
  );
}

export default FriendList;
