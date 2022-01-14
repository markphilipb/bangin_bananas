// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
const needle = require("needle");

export default function handler(req, res) {
  needle.get("http://localhost:4040/api/tweets", function (error, response) {
    if (!error && response.statusCode == 200) {
      console.log(response.body);
      res.status(200).json(response.body);
    }
  });
}
