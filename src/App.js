import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate, useLocation } from "react-router-dom";
import LandingPage from "./LandingPage";
import UserDetails from "./UserDetails";
import "./App.css";
import FriendHistoryProvider from "./FriendHistoryContext";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState({ list: [] });
  const [visitedUrls, setVisitedUrls] = useState([]);

  async function fetchData(currentPage = 1, userAmount = 16) {
    const response = await fetch(
      `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${currentPage}/${userAmount}`
    );
    const newData = await response.json();
    return newData;
  }

  useEffect(() => {
    async function loadData() {
      const newData = await fetchData(currentPage);
      setData((prevData) => {
        return {
          pagination: newData.pagination,
          list: [...prevData.list, ...newData.list],
        };
      });
    }
    loadData();
  }, [currentPage]);

  function handleScroll() {
    setCurrentPage((prevPage) => prevPage + 1);
  }

  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage data={data.list} />} />
        <Route
          path="/user/:id"
          element={
            <FriendHistoryProvider>
              <UserDetails />
            </FriendHistoryProvider>
          }
        />
      </Routes>
      <button onClick={handleScroll}>Load More</button>
    </div>
  );
}

export default App;
