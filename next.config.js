require("dotenv").config();
module.exports = {
  reactStrictMode: true,
  env: {
    ALCHEMY_API_POINT: process.env.ALCHEMY_API_POINT,
    ALCHEMY_API_KEY: process.env.ALCHEMY_API_KEY,
    CONTRACT_ADDR: process.env.CONTRACT_ADDR,
  },
};
