import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./LandingPage";
import UserDetails from "./UserDetails";
import "./App.css";
import FriendHistoryProvider from "./FriendHistoryContext";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/user/:id"
          element={
            <FriendHistoryProvider>
              <UserDetails />
            </FriendHistoryProvider>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
