import React, { useState, useEffect } from "react"
import User from "./User"
import './App.css';

function App() {
  
  const [currentPage, setCurrentPage] = useState(1);
  const [data, setData] = useState({list: []});

  async function fetchData(currentPage) {
    const response = await fetch(`http://sweeftdigital-intern.eu-central-1.elasticbeanstalk.com/user/${currentPage}/${20}`);
    const newData = await response.json();
    return newData;
  }

  useEffect(() => {
    async function loadData() {
      const newData = await fetchData(currentPage);
      setData((prevData) => {
        return {
          pagination: newData.pagination,
          list: [...prevData.list, ...newData.list]
        }
      });
    }
    loadData();
  }, [currentPage]);

  function handleScroll() {
      console.log("setting current page")
      setCurrentPage((prevPage) => prevPage + 1);
  }

  console.log(data)

  return (
    <div className="App">
      <div className = "grid-container">
        {data.list && data.list.map(user => <User key = {user.id} data = {user}/>)}
      </div>
      <button onClick={handleScroll}>Load More</button>
    </div>
  );
}

export default App;
