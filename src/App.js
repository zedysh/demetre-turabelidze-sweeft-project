import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import UsersList from "./UsersList";
import UserDetails from "./UserDetails";
import "./App.css";

function App() {
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState({ list: [] });

  async function fetchData(currentPage) {
    const response = await fetch(
      `http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${currentPage}/${12}`
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
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<UsersList data={data.list} />} />
          <Route path="/user-details" element={<UserDetails />} />
        </Routes>
        <button onClick={handleScroll}>Load More</button>
      </div>
    </BrowserRouter>
  );
}

export default App;
