import { connectToDatabase } from "../../util/mongodb";

export default async (req, res) => {
  const { db } = await connectToDatabase();
  const tweets = await db
    .collection("twitter_users")
    .find({})
    .sort({ count: -1 })
    .limit(20)
    .toArray();
  res.json(tweets);
};
