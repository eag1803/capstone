require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks:{
    localganache:{
      url: "http://127.0.0.1:8545",
      accounts: ["6f9654256e5c0d248d1e6352bf981ec0fb24e32dfd9ee012cb08accfa23ccfe0"],
      chainId: 1337
    }
  }
};
