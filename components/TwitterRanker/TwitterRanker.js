import React from "react";
import Navbar from "../../components/Navbar/Navbar.js";

const TwitterRanker = ({ twitterUsers }) => {
  return (
    <>
      <h1>Top twitter users</h1>
      <p>
        <small>Highest count of #bangbangbanginbanana</small>
      </p>
      <ul>
        {twitterUsers.map((user) => (
          <li>
            <h2>{user.username}</h2>
            <p>{user.count}</p>
          </li>
        ))}
      </ul>
    </>
  );
};

export default TwitterRanker;
