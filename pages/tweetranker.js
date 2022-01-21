import { connectToDatabase } from "../util/mongodb";
import React, { useEffect } from "react";
import Navbar from "../components/Navbar/Navbar.js";
import TwitterRanker from "../components/TwitterRanker/TwitterRanker.js";

export default function TweetRanker({ twitterUsers }) {
  return (
    <div>
      <Navbar />
      <TwitterRanker twitterUsers={twitterUsers} />
    </div>
  );
}
export async function getServerSideProps() {
  const { db } = await connectToDatabase();
  const twitterUsers = await db
    .collection("twitter_users")
    .find({})
    .sort({ count: -1 })
    .limit(20)
    .toArray();
  return {
    props: {
      twitterUsers: JSON.parse(JSON.stringify(twitterUsers)),
    },
  };
}
