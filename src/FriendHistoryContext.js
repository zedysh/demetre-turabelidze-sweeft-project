import React, { createContext, useContext, useState } from "react";

const friendHistoryContext = createContext({});
export function useFriendHistory() {
  return useContext(friendHistoryContext);
}
/**
 * Friend history context providing access to friendHistory variable
 * And ability to modify friendHistory using setFriendHistory function
 */
function FriendHistoryProvider(props) {
  const [friendHistory, setFriendHistory] = useState([]);

  const pushFriendInHistory = (friend) => {
    setFriendHistory((prevFriendHistory) => {
      // Check if friend already doesn't exist in history
      const found = prevFriendHistory.find(
        (prevFriend) => prevFriend.id === friend.id
      );
      if (found) return prevFriendHistory;

      return [...prevFriendHistory, friend];
    });
  };

  return (
    <friendHistoryContext.Provider
      value={{ friendHistory, pushFriendInHistory }}
    >
      {props.children}
    </friendHistoryContext.Provider>
  );
}

export default FriendHistoryProvider;
