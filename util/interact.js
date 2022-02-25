const { ethers, BigNumber } = require("ethers");
const CONTRACT_ABI = require("./contract-abi.json");
const CONTRACT_ADDR = process.env.CONTRACT_ADDR;
const ALCHEMY_API_POINT = process.env.ALCHEMY_API_POINT;
const ALCHEMY_API_KEY = process.env.ALCHEMY_API_KEY;
const MINT_PRICE = 0.05;

export const handleMint = async (mintAmount) => {
  if (window.ethereum) {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    const signer = provider.getSigner();

    const contract = await new ethers.Contract(
      CONTRACT_ADDR,
      CONTRACT_ABI,
      signer
    );
    try {
      const etherAmount = mintAmount * MINT_PRICE;
      const response = await contract.mint(BigNumber.from(mintAmount), {
        value: ethers.utils.parseEther(String(etherAmount)),
      });
    } catch (err) {
      console.log(err);
    }
  }
};

export const connectWallet = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_requestAccounts",
      });
      const obj = { address: addressArray[0] };
      return obj;
    } catch (err) {
      return { address: "" };
    }
  } else {
    return { address: "" };
  }
};

export const getCurrentWalletConnected = async () => {
  if (window.ethereum) {
    try {
      const addressArray = await window.ethereum.request({
        method: "eth_accounts",
      });
      if (addressArray.length > 0) {
        return { address: addressArray[0] };
      } else {
        return { address: "" };
      }
    } catch (err) {
      return { address: "" };
    }
  } else {
    return {
      address: "",
    };
  }
};
