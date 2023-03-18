import React, { useEffect, useState } from "react";

/**
 * Shared component that enables infinite scroll on any list component (in our case LandingPage and FriendList)
 * Parent component of this infinite scroll requires it to have loading/setLoading state.
 * Required parameters: fetchData, loading, setLoading
 */
export function InfiniteScroll({ fetchData, loading, setLoading, children }) {
  const [page, setPage] = useState(1);

  useEffect(() => {
    fetchData(1);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  useEffect(() => {
    // Simulation that fetching new data takes around 3 seconds
    // This is so that we can see loading text in action
    setTimeout(() => {
      fetchData(page);
    }, 3000);
  }, [page]);

  const handleScroll = () => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    const scrolledToBottom = scrollTop + clientHeight >= scrollHeight * 0.9;

    if (scrolledToBottom && !loading) {
      setPage((prevPage) => prevPage + 1);
      setLoading(true);
    }
  };

  return (
    <div>
      {children}
      {loading && <h1 className="loading">Loading...</h1>}
    </div>
  );
}
